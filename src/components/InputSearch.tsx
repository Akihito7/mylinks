import { Box, HStack, Input, IInputProps } from "native-base";
import { Feather } from '@expo/vector-icons';
import { useTheme } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

type PropsInputSearch = IInputProps & {
    handleCleanSearchValue: () => void;
}

export function InputSearch({ handleCleanSearchValue, ...props }: PropsInputSearch) {

    const { colors } = useTheme()
    return (
        <HStack
            width="full"
            bg="gray.700"
            borderRadius={10}
            mb={8}
            alignItems="center"
            px={4}
        >

            <Feather name="search" size={24} color={colors.gray[300]} />

            <Input
                bg="transparent"
                borderWidth={0}
                color="gray.100"
                fontSize="md"
                placeholder="Buscar"
                placeholderTextColor="gray.300"
                type="text"
                flex={1}

                _focus={{
                    bg: "transparent",
                }}

                {...props}
            />

            <TouchableOpacity onPress={handleCleanSearchValue}>
                <FontAwesome name="remove" size={24} color={colors.gray[300]} />
            </TouchableOpacity>

        </HStack>
    )
}
