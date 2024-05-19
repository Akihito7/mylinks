import { useEffect, useState, useCallback } from "react";
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
import { useNavigation, useRoute, useFocusEffect, NavigationProp } from "@react-navigation/native";
import { AuthStackParamList } from "../routes/app.routes";

const aboutLinkScheme = Yup.object({
    title: Yup.string().required("Informe um titulo"),
    link: Yup.string().required("Informe um link"),
    description: Yup.string(),
});

type AboutLinkParams = {
    id?: string;
}

type PropsLink = {
    title: string;
    link: string;
    description?: string;
};

export function AboutLink() {

    const [editLink, setEditLink] = useState<boolean>(false);
    const [link, setLink] = useState<PropsLink>({} as PropsLink);

    const { control, handleSubmit, reset, formState: { errors } } = useForm<PropsLink>({
        resolver: yupResolver(aboutLinkScheme)
    });

    const { navigate, goBack} = useNavigation()

    const navigation = useNavigation<NavigationProp<AuthStackParamList>>();
    const route = useRoute();
    const { id } = route.params as AboutLinkParams || {};

    const handleFetchLink = useCallback(async () => {

        try {
            const response = await api.get(`/link/${id}`);
            setLink(response.data);
            setEditLink(true);
            reset(response.data);
        } catch (error) {
            const errorMessage = error instanceof AppError ? error.errorMessage : "Erro no servidor, tente novamente mais tarde";
            Toast.show({
                title: errorMessage,
                duration: 3000,
                bg: "red.500",
                placement: "top",
            });
        }
    }, [id]);

    async function handleSaveLink(data: PropsLink) {

        try {
            await api.post("/link", data);
            navigate("home" as never);
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

    async function handleEditLink(data: PropsLink) {

        try {
            await api.put(`/link/${id}`, data);
            navigate("home" as never);

        } catch (error) {
            const errorMessage = error instanceof AppError ? error.errorMessage : "Erro no servidor, tente novamente mais tarde";
            Toast.show({
                title: errorMessage,
                duration: 3000,
                bg: "red.500",
                placement: "top",
            });
        }
    }

    async function handleDeleteLink() {
        try {
            await api.delete(`/link/${id}`);
            navigate("home" as never);

        } catch (error) {
            const errorMessage = error instanceof AppError ? error.errorMessage : "Erro no servidor, tente novamente mais tarde";
            Toast.show({
                title: errorMessage,
                duration: 3000,
                bg: "red.500",
                placement: "top",
            });
        }
    }

    useEffect(() => {
        if (id) {
            handleFetchLink();
        } else {
            setEditLink(false);
        }
    }, [id]);

    useFocusEffect(
        useCallback(() => {
            return () => {
                if (navigation.setParams) {
                    navigation.setParams({ id: null });
                    reset({
                        title: "",
                        link: "",
                        description: ""
                    })
                }
            };
        }, [navigation])
    );

    return (
        <Box flex={1} bg="gray.700">
            <Header />

            <ScrollView mt={8} px={4} flex={1} bg="gray.600" borderTopRadius={40}>
                <Box mt={8} mb={4}>

                    <HStack px={4} mb={4} alignItems="center" justifyContent="space-between">

                        <TouchableOpacity onPress={goBack}>
                            <Text
                                color="gray.300"
                                fontSize="md"
                            >
                                Voltar
                            </Text>

                        </TouchableOpacity>

                        <Text
                            color="gray.100"
                            fontSize="md"
                            fontFamily="heading"
                        >
                            {editLink ? "Editar link" : "Criar link"}
                        </Text>

                        <TouchableOpacity onPress={handleDeleteLink}>
                            <Text
                                color="red.400"
                                fontSize="md"
                            >
                                Excluir
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




                    {
                        editLink

                            ?

                            <Button
                                title="Editar link"
                                onPress={handleSubmit(handleEditLink)}
                            />

                            :

                            <Button
                                title="Cadastrar link"
                                onPress={handleSubmit(handleSaveLink)}
                            />
                    }

                </Box >
            </ScrollView>
        </Box >
    )
}