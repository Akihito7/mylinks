import { Text, VStack, useTheme } from "native-base";
import { InputDefault } from "../components/InputDefault";
import { Button } from "../components/Button";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import backgroundImg from "../../assets/back.png";


export function Signln() {

    const { colors } = useTheme();

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
                pt={40}
                px={4}
                alignItems="center"
                pb={24}
                bg={"red.500"}

            >

                <Image
                    source={backgroundImg}
                    defaultSource={backgroundImg}
                    alt="Pessoas treinando"
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

                <InputDefault placeholder="Email" />
                <InputDefault
                    placeholder="Senha"
                    type="password"
                />

                <Button />

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