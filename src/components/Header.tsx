import { Box, Heading } from "native-base";

export function Header() {
    return (
        <Box
            px={4}
            pt={16}
            pb={2}
            alignItems="center"
            justifyContent="center"
            borderBottomWidth={1}
            borderBottomColor="gray.600"
        >
            <Heading
                color="gray.100"
                mb={4}
            >
                mylinks
            </Heading>
        </Box>
    )
}