import { HStack, Input } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from "native-base";

export function InputDefault() {

    const { colors } = useTheme()

    return (

        <HStack width="full" bg="gray.500" borderRadius={10} mb={2} alignItems="center" h={14}>
            <Input
                bg="transparent"
                borderWidth={0}
                
                color="gray.100"
                fontSize="md"
                placeholder="Title"
                placeholderTextColor="gray.300"
                type="text"

                _focus={{
                    bg: "transparent",

                }}
            />


        </HStack>
    )
}