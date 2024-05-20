import { useCallback, useState, useEffect } from "react";
import { Box, FlatList, Text, Toast } from "native-base";
import { Header } from "../components/Header";
import { CardItem } from "../components/CardItem";
import { InputSearch } from "../components/InputSearch";
import { api } from "../services/axios";
import { AppError } from "../utils/AppError";
import { useFocusEffect } from "@react-navigation/native";
import { useAuth } from "../Contexts/AuthContext";

export type PropsLinks = {
    id: string;
    title: string;
    link: string;
    description: string;
};

export function Home() {
    const [links, setLinks] = useState<PropsLinks[]>([]);
    const [searchValue, setSearchValue] = useState("");

    const { user } = useAuth();

    async function fetchLinks() {
        try {
            const response = await api.get("/link");
            setLinks(response.data);
        } catch (error) {
            const errorMessage = error instanceof AppError ? error.errorMessage : "Erro no servidor, tente novamente mais tarde";
            Toast.show({
                title: errorMessage,
                duration: 3000,
                bg: "red.500",
                placement: "top",
            });
        }
    };

    function handleSearchLink(linkName: string) {
        setSearchValue(linkName);
    };

    async function handleCleanSearchValue() {
        setSearchValue("");
    };

    useFocusEffect(useCallback(() => {
        fetchLinks();
    }, []));

    useEffect(() => {
        if (searchValue === "") {
            fetchLinks();
        }
    }, [searchValue]);

    const filteredLinks =
        searchValue
            ?
            links.filter(item =>
                item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            :
            links;

    return (
        <Box flex={1} bg="gray.700">
            <Header name={user.name} />

            <Box mt={8} px={4} pt={6} flex={1} bg="gray.600" borderTopRadius={40}>
                <InputSearch
                    onChangeText={handleSearchLink}
                    handleCleanSearchValue={handleCleanSearchValue}
                    value={searchValue}
                />

                <Text
                    fontFamily="heading"
                    fontSize="xl"
                    color="gray.100"
                    textAlign="center"
                    mb={4}
                >
                    Seus links
                </Text>

                <FlatList
                    data={filteredLinks.reverse()}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <CardItem
                            id={item.id}
                            title={item.title}
                            link={item.link}
                            description={item.description}
                        />
                    )}
                    mb={4}
                    ItemSeparatorComponent={() => <Box h={2} />}
                    showsVerticalScrollIndicator={false}
                />
            </Box>
        </Box>
    );
}
