import { Box, HStack, Text, useTheme } from "native-base";
import { TouchableOpacity, Linking } from "react-native";
import { PropsLinks } from "../screens/Home";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "../routes/app.routes";
import { FontAwesome5 } from '@expo/vector-icons';


export function CardItem(data: PropsLinks) {

    const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();
    const { colors } = useTheme();

    async function handleToGoAboutLink() {
        navigate("aboutLink", { id: data.id })
    };

    return (
        <TouchableOpacity onPress={handleToGoAboutLink}>
            <HStack
                alignItems="center"
                borderRadius={10}
                px={4}
                py={2}
                bg="gray.500"
            >
                <Box flex={1}>
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

                <TouchableOpacity>
                    <FontAwesome5 name="trash" size={22} color={colors.red[500]} />
                </TouchableOpacity>


            </HStack>
        </TouchableOpacity>
    )
}