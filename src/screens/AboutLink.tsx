import { Box, HStack, ScrollView, Text, TextArea, Toast } from "native-base";
import { Header } from "../components/Header";
import { InputDefault } from "../components/InputDefault";


import { Button } from "../components/Button";
import { TouchableOpacity } from "react-native";

import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../services/axios";
import { AppError } from "../utils/AppError";
import { useNavigation } from "@react-navigation/native";

const aboutLinkScheme = Yup.object({
    title: Yup.string().required("Informe um titulo"),
    link: Yup.string().required("Informe um link"),
    description: Yup.string(),
})

type PropsLink = {
    title: string;
    link: string;
    description?: string;
}

export function AboutLink() {

    const { control, handleSubmit, reset, formState: { errors } } = useForm<PropsLink>({
        resolver: yupResolver(aboutLinkScheme)
    });

    const navigate = useNavigation();

    async function handleSaveLink(data: PropsLink) {

        try {
            await api.post("/link", data);
            reset();
            navigate.navigate("home" as never);
        } catch (error) {
            const errorMessage = error instanceof AppError ? error.errorMessage : "Erro no servidor, tente novamente mais tarde"
            Toast.show({
                title: errorMessage,
                duration: 3000,
                bg: "red.500",
                placement: "top",
            })
        }

    };

    return (
        <Box flex={1} bg="gray.700">
            <Header />

            <ScrollView mt={8} px={4} flex={1} bg="gray.600" borderTopRadius={40}>
                <Box mt={8} mb={4}>

                    <HStack px={4} mb={4} alignItems="center">
                        <Text
                            color="gray.100"
                            fontSize="md"
                            fontFamily="heading"
                            flex={1}
                        >
                            Criar link
                        </Text>

                        <TouchableOpacity>
                            <Text
                                color="gray.300"
                                fontSize="md"
                            >
                                Voltar
                            </Text>

                        </TouchableOpacity>
                    </HStack>

                    <Controller
                        name="title"
                        control={control}
                        render={({ field: { onChange, value } }) => (

                            <InputDefault
                                errorMessage={errors.title?.message}
                                placeholder="Title"
                                onChangeText={onChange}
                                value={value}

                            />
                        )}

                    />

                    <Controller
                        name="link"
                        control={control}
                        render={({ field: { onChange, value } }) => (

                            <InputDefault
                                errorMessage={errors.link?.message}
                                placeholder="Link"
                                onChangeText={onChange}
                                value={value}

                            />
                        )}

                    />

                    <Controller
                        name="description"
                        control={control}
                        render={({ field: { onChange, value } }) => (

                            <TextArea
                                onChangeText={onChange}
                                value={value}
                                mt={2}
                                autoCompleteType={false}
                                borderWidth={0}
                                bg="gray.500"
                                borderRadius={10}
                                color="gray.100"
                                fontSize="md"
                                h={32}
                                mb={2}
                                placeholder="Descrição (Opcional)"
                                placeholderTextColor="gray.300"
                                _focus={{
                                    bg: "gray.500"
                                }}
                            />
                        )}
                    />





                    <Button title="Cadastrar link" onPress={handleSubmit(handleSaveLink)} />

                </Box >
            </ScrollView>
        </Box >
    )
}