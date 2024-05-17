import { Box, HStack, Input } from "native-base";
import { Feather } from '@expo/vector-icons';
import { useTheme } from "native-base";

export function InputSearch() {

    const { colors } = useTheme()
    return (
        <HStack width="full" bg="gray.700" borderRadius={10} mb={8} alignItems="center" px={4}>

            <Feather name="search" size={24} color={colors.gray[500]} />

            <Input
                bg="transparent"
                borderWidth={0}
                color="gray.100"
                fontSize="md"
                placeholder="Buscar"
                placeholderTextColor="gray.500"
                type="text"

                _focus={{
                    bg: "transparent",

                }}
            />


        </HStack>
    )
}