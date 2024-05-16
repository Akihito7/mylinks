import { Box, Heading, HStack } from "native-base";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

export function Header() {
    return (
        <HStack
            px={4}
            pt={16}
            pb={6}
            alignItems="center"
            justifyContent="space-between"
            borderBottomWidth={1}
            borderBottomColor="gray.600"

        >
            <TouchableOpacity>
                <AntDesign name="back" size={24} color="white" />
            </TouchableOpacity>


            <Heading
                color="gray.100"

            >
                mylinks
            </Heading>

            <TouchableOpacity>
                <AntDesign name="logout" size={24} color="white" />
            </TouchableOpacity>
        </HStack>
    )
}