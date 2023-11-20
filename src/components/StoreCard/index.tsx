import { Text, Flex, Heading, Link, Image } from "@chakra-ui/react";
import React from "react";

export interface iStoreCardProps {
    id: number;
    nome: string;
    text: string;
    categoria: string;
    imagem: string;
    preco: string;
};

const StoreCard: React.FC<iStoreCardProps> = ({
    imagem,
    nome,
    categoria,
    id,
    preco,
    text,
}) => {
    return (
        <Flex as={Link}
            href={`loja/${id}`}
            p="2rem"
            m="1rem"
            bg="white"
            borderRadius="xl"
            justify="space-betwen"
            border="solid 1px #d8d8d8"
            _hover={{
                transform: "scale(1.02)",
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
            }}
            transition="all .1s linear">
            <Flex gap={4} justify="space-between">
                <Image
                    boxSize="200px"
                    src={imagem}
                    alt="produtos"
                />
                <Flex flexDir="column" gap={3} >
                    <Heading fontSize="20px" color="#34afff">
                        {nome}
                    </Heading>
                    <Flex gap={2}>
                        <Text>{categoria}</Text>
                    </Flex>
                    <Flex gap={2} color="#0800e0">
                        <Text>{preco}</Text>
                    </Flex>
                    <Flex>
                        <Text>{text}</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
};

export default StoreCard;