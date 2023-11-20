'use client'

import { Center, Heading, Text, Spinner } from "@chakra-ui/react";

export default function Loading() {
    return (
        <Center w="100vw" h="100vh" bgColor="orange.">
            <Heading fontSize="2xl">
                Cheap {" "}
                <Text as="span" color="#34afff">Tech</Text></Heading>
            <Spinner size={{ base: "sm", md: "xl" }} color="#34afff" />
        </Center>
    )
}