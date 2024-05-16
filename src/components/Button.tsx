import { Button as ButtonNativeBase, Text } from "native-base"

export function Button() {
    return (
        <ButtonNativeBase bg="green.700" borderRadius={10} _pressed={{
            bg: "green.700",
            opacity: 0.8
        }}>
            <Text
                fontWeight="bold"
                fontSize="xl"
            >
                Salvar
            </Text>
        </ButtonNativeBase>
    )
}