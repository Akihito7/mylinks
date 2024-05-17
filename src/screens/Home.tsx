import { Box, FlatList, ScrollView, Text } from "native-base";
import { Header } from "../components/Header";
import { CardItem } from "../components/CardItem";
import { InputSearch } from "../components/InputSearch";

const links = ["1", "2", "3", "4", "5", "6"];

export function Home() {
    return (
        <Box flex={1} bg="gray.700">
            <Header />
            <Box mt={8} px={4} pt={6} flex={1} bg="gray.600" borderTopRadius={40}>
                <ScrollView showsVerticalScrollIndicator={false}>
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
                        keyExtractor={item => item}
                        renderItem={({ item }) => (
                            <CardItem />
                        )}
                        mb={4}
                        ItemSeparatorComponent={() => <Box h={2} />}

                        showsVerticalScrollIndicator={false}
                    />
                </ScrollView>
            </Box>
        </Box>
    );
}
