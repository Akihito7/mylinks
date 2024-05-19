import { Box, Text } from "native-base";
import { TouchableOpacity, Linking } from "react-native";
import { PropsLinks } from "../screens/Home";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "../routes/app.routes";


export function CardItem(data: PropsLinks) {

    const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>()

    async function handleToGoAboutLink() {
        navigate("aboutLink", { id: data.id })
    };
    
    return (
        <TouchableOpacity onPress={handleToGoAboutLink}>
            <Box
                width="full"
                bg="gray.500"
                borderRadius={10}
                px={4}
                py={2}
            >
                <Text
                    color="gray.100"
                    fontFamily="heading"
                    fontSize="md"
                >
                    {data.title}
                </Text>


                <TouchableOpacity
                    onPress={() => Linking.openURL(`${data.link}`)}
                >
                    <Text
                        color="blue.500"
                        textDecorationLine="underline"
                    >
                        {data.link}
                    </Text>
                </TouchableOpacity>
            </Box>
        </TouchableOpacity>
    )
}