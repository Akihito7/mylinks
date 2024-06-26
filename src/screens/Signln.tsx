import { Text, VStack, useTheme } from "native-base";
import { InputDefault } from "../components/InputDefault";
import { Button } from "../components/Button";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import backgroundImg from "../../assets/back.png";
import { useForm, Controller } from "react-hook-form"
import { useAuth, LoginProps } from "../Contexts/AuthContext";
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";


const signlnScheme = Yup.object({
    email: Yup.string().email("Informe um Email válido").required("Informe um email"),
    password: Yup.string().min(8).required("Informe uma senha")
});

export function Signln() {

    const { colors } = useTheme();
    const { signln } = useAuth();

    const { handleSubmit, control, reset, formState: { errors } } = useForm<LoginProps>({
        resolver: yupResolver(signlnScheme)
    });

    async function handleLogin(crentials: LoginProps) {
        signln(crentials);
        reset()
    }

    return (

        <ScrollView
            style={{
                backgroundColor: colors.gray[700]
            }}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >

            <VStack
                flex={1}
                pt={24}
                px={4}
                alignItems="center"
                pb={24}
                bg={"red.500"}

            >

                <Image
                    source={backgroundImg}
                    defaultSource={backgroundImg}
                    alt="Foto de uma agenda"
                    resizeMode="cover"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        margin: 'auto',
                    }}

                />

                <Text

                    color="purple.700"
                    fontSize="3xl"
                    fontFamily="heading"
                    mb={2}

                >
                    Mylinks
                </Text>
                <Text
                    px={14}
                    color="white"
                    fontSize="sm"
                    fontFamily="body"
                    mb={16}
                >
                    No more losing important links, save them with just a few clicks
                </Text>

                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, value } }) => (

                        <InputDefault
                            errorMessage={errors.email?.message}
                            placeholder="Email"
                            onChangeText={onChange}
                            value={value}

                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    render={({ field: { onChange, value } }) => (

                        <InputDefault
                            errorMessage={errors.password?.message}
                            placeholder="Senha"
                            onChangeText={onChange}
                            value={value}
                            type="password"

                        />
                    )}

                />

                <Button
                    title="Entrar"
                    onPress={handleSubmit(handleLogin)}
                />

                <TouchableOpacity>
                    <Text
                        px={14}
                        color="white"
                        fontSize="sm"
                        fontFamily="body"
                        mt={4}

                    >
                        Esqueci minha senha
                    </Text>
                </TouchableOpacity>



                <Text
                    px={14}
                    color="white"
                    fontSize="sm"
                    fontFamily="body"
                    position="absolute"
                    bottom={5}
                >
                    Ainda não tenho conta
                </Text>
            </VStack>
        </ScrollView>
    )
}