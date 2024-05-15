import { Box, Text } from "native-base";
import { TouchableOpacity, Linking } from "react-native";

export function CardItem() {
    return (
        <Box
            width="full"
            bg="gray.500"
            borderRadius={10}
            px={4}
            py={2}
        >
            <Text
                color="gray.100"
                fontWeight="bold"
                fontSize="md"
            >
                How to play of riven in lol
            </Text>


            <TouchableOpacity
                onPress={() => Linking.openURL('https://youtube.com')}
            >
                <Text
                    color="blue.500"
                    textDecorationLine="underline"
                >
                    https://youtube.com
                </Text>
            </TouchableOpacity>
        </Box>
    )
}