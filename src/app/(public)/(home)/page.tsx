'use client'

import { Stack, Heading, Box, Flex } from "@chakra-ui/react";
import StoreCard from "@/components/StoreCard";

export default function Home() {
  return (
    <Flex
      mt="3rem"
      as="main"
      flexDir={{ base: "column" }}
      alignItems="start"
      p={{ lg: "0 10%", base: "0 5%" }}>

      <Flex
        mt="2rem"
        w={{ base: "90%", md: "80%", lg: "90%" }}
        gap="2rem"
        flexDir={{ base: "column", md: "row" }}
        alignItems="start"
        p={{ lg: "0 10%", base: "0 5%" }}>

      </Flex>
      <Box w="100%" mt="5rem" as="section" maxW="90vw">
        <Heading fontSize="3xl">Venha conhecer nossos produtos!</Heading>
        <Stack direction={{ base: "row", lg: "row" }} wrap="wrap"
          justify="space-between" align-tems="start">

          <StoreCard
            id={1}
            nome="Fone Razer"
            categoria="eletronicos"
            imagem="/fone.jpg"
            text={"Fone Razer RGB OG"}
            preco="R$ 699,99"
          />

          <StoreCard
            id={2}
            nome="Teclado Gamer"
            categoria="eletronicos"
            imagem="/teclado.jpg"
            text={"Teclado RGB"}
            preco="R$ 1.300,00"
          />

          <StoreCard
            id={3}
            nome="Placa de video"
            categoria="eletronicos"
            imagem="/placa.jpg"
            text={"RTX 3060 NVIDIA"}
            preco="R$ 1.999,99"
          />

          <StoreCard
            id={4}
            nome="Mouse logitech"
            categoria="eletronicos"
            imagem="/mouse.jpg"
            text={"Mouse logitech g403"}
            preco="R$ 200,00"
          />

          <StoreCard
            id={5}
            nome="Fone airpods"
            categoria="eletronicos"
            imagem="/airpods.jpg"
            text={"Fone sem fio apple"}
            preco="R$ 1.599,00"
          />

          <StoreCard
            id={6}
            nome="Iphone 13"
            categoria="eletronicos"
            imagem="/iphone.jpg"
            text={"Iphone 13"}
            preco="R$ 4.000,00"
          />

          <StoreCard
            id={7}
            nome="Monitor Asus"
            categoria="eletronicos"
            imagem="/monitor.jpg"
            text={"Monitor Asus 250hz"}
            preco="R$ 1.200,00"
          />

          <StoreCard
            id={8}
            nome="Sansung Galaxy M54"
            categoria="eletronicos"
            imagem="/galaxy.jpg"
            text={"Celular Sansung Galaxy M54"}
            preco="R$ 1.700,00"
          />
        </Stack>
      </Box>
    </Flex>
  );
};
