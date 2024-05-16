import { HStack, Input } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from "native-base";

export function InputDefault() {

    const { colors } = useTheme()

    return (

        <HStack width="full" bg="gray.700" borderRadius={10} mb={2} alignItems="center" px={4}>

            <Ionicons name="document-outline" size={24} color={colors.gray[500]} />

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