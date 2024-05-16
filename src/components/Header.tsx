import { TouchableOpacity } from "react-native";
import { HStack, VStack, useTheme, Text } from "native-base";

import { SimpleLineIcons } from '@expo/vector-icons';
import UserAvatar from 'react-native-user-avatar';
import { useAuth } from "../Contexts/AuthContext";



export function Header() {

    const { sizes, colors } = useTheme();

    return (
        <HStack
            px={4}
            pt={16}
            pb={6}
            alignItems="center"

            borderBottomWidth={1}
            borderBottomColor="gray.600"
        >


            <UserAvatar size={sizes[12]} name="Guilherme Akihito" bgColor={colors.purple[500]} />

            <VStack ml={4} flex={1}>
                <Text
                    fontSize="sm"
                    color="gray.100"
                    marginBottom={-2}

                >
                    Bem vindo
                </Text>

                <Text
                    fontSize="md"
                    color="gray.100"
                    fontFamily="heading"

                >
                    Guilherme Akihito
                </Text>
            </VStack>

            <TouchableOpacity>
                <SimpleLineIcons name="logout" size={24} color="white" />
            </TouchableOpacity>


        </HStack>
    )
}