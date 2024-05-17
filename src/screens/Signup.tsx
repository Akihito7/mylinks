import { Text, VStack, useTheme } from "native-base";
import { InputDefault } from "../components/InputDefault";
import { Button } from "../components/Button";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import backgroundImg from "../../assets/back.png";
import { Controller, useForm } from "react-hook-form";
import { useAuth, SignupProps } from "../Contexts/AuthContext";


export function Signup() {

    const { colors } = useTheme();
    const { control, handleSubmit, reset } = useForm();
    const { signup } = useAuth();

    async function handleSignup(credentials: SignupProps) {
        signup(credentials);
        reset();
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

                            placeholder="Email"
                            onChangeText={onChange}
                            value={value}

                        />
                    )}
                />

                <Controller
                    name="name"
                    control={control}
                    render={({ field: { onChange, value } }) => (

                        <InputDefault
                            placeholder="Nome"
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

                            placeholder="Senha"
                            type="password"
                            onChangeText={onChange}
                            value={value}

                        />
                    )}
                />


                <Controller
                    name="passwordAgain"
                    control={control}
                    render={({ field: { onChange, value } }) => (

                        <InputDefault

                            placeholder="Confirme a senha"
                            type="password"
                            onChangeText={onChange}
                            value={value}

                        />
                    )}
                />

                <Button
                    title="Cadastrar"
                    onPress={handleSubmit(handleSignup)}
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
                    Ja tenho conta
                </Text>
            </VStack>
        </ScrollView>
    )
}