import { HStack, Input, IInputProps, Text } from "native-base";



type PropsCustomInput = IInputProps & {
    errorMessage?: string | undefined
}

export function InputDefault({ defaultValue = undefined, errorMessage = undefined, placeholder, ...restProps }: PropsCustomInput) {

    const isError = !!errorMessage;

    return (
        <>
            <HStack
                width="full" bg="gray.500" borderRadius={10} mt={2} alignItems="center" h={14}>
                <Input
                    defaultValue={defaultValue}
                    bg="transparent"
                    borderWidth={0}

                    color="gray.100"
                    fontSize="md"
                    placeholder={placeholder}
                    placeholderTextColor="gray.300"
                    {...restProps}
                    _focus={{
                        bg: "transparent",

                    }}
                />


            </HStack >

            {
                isError ?
                    <Text
                        alignSelf="flex-start"
                        color="red.600"
                        fontFamily="heading"
                    >
                        {errorMessage}
                    </Text>

                    : null
            }

        </>
    )
}