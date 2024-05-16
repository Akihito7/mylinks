import { Box, ScrollView, Text, TextArea } from "native-base";
import { Header } from "../components/Header";
import { InputDefault } from "../components/InputDefault";


import { Button } from "../components/Button";

export function AboutLink() {
    return (
        <Box flex={1} bg="gray.700">
            <Header />

            <ScrollView mt={8} px={4} flex={1} bg="gray.600" borderTopRadius={40}>
                <Box mt={8}>
                    <InputDefault />
                    <InputDefault />

                    <TextArea
                        autoCompleteType={false}
                        borderWidth={0}
                        bg="gray.700"
                        borderRadius={10}
                        color="gray.100"
                        fontSize="md"
                        h={32}
                        mb={2}
                        placeholder="Descrição (Opcional)"
                        placeholderTextColor="gray.500"
                        _focus={{
                            bg: "gray.700"
                        }}
                    >
                    </TextArea>
                    <Button />


                </Box>
            </ScrollView>





        </Box >
    )
}