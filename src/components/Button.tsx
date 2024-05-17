import { Button as ButtonNativeBase, Text } from "native-base"


type PropsButton = {
    onPress: () => void;
    title: string;
}


export function Button({ title, onPress }: PropsButton) {
    return (
        <ButtonNativeBase
            onPress={onPress}
            w="full"
            h={14}
            bg="purple.500"
            borderRadius={10}
            mt={2}
            _pressed={{
                bg: "purple.500",
                opacity: 0.8
            }}>
            <Text
                fontFamily="heading"
                fontSize="xl"
                color="white"
            >
                {title}
            </Text>
        </ButtonNativeBase>
    )
}