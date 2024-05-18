import { useCallback, useState } from "react";
import { Box, FlatList,Text, Toast, useSafeArea } from "native-base";
import { Header } from "../components/Header";
import { CardItem } from "../components/CardItem";
import { InputSearch } from "../components/InputSearch";
import { api } from "../services/axios";
import { AppError } from "../utils/AppError";
import { useFocusEffect } from "@react-navigation/native";


export type PropsLinks = {
    id: string;
    title: string;
    link: string;
    description: string;
}

export function Home() {

    const [links, setLinks] = useState([] as PropsLinks[]);

    async function fetchLinks() {

        try {
            const response = await api.get("/link");
            setLinks(response.data)

        } catch (error) {
            const errorMessage = error instanceof AppError ? error.errorMessage : "Erro no servidor, tente novamente mais tarde"
            Toast.show({
                title: errorMessage,
                duration: 3000,
                bg: "red.500",
                placement: "top",
            })
        }
    }

    useFocusEffect(useCallback(() => {
        fetchLinks()
    }, []))

    return (
        <Box flex={1} bg="gray.700">
            <Header />
            <Box mt={8} px={4} pt={6} flex={1} bg="gray.600" borderTopRadius={40}>

                <InputSearch />
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
                    data={links}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => (
                        <CardItem
                            key={index}
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
