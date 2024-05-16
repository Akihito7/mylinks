import { Button as ButtonNativeBase, Text } from "native-base"

export function Button() {
    return (
        <ButtonNativeBase bg="purple.500" borderRadius={10} _pressed={{
            bg: "purple.500",
            opacity: 0.8
        }}>
            <Text
                fontFamily="heading"
                fontSize="xl"
                color="white"
            >
                Salvar
            </Text>
        </ButtonNativeBase>
    )
}