import { Flex, Text, Heading, Box, Link } from "@chakra-ui/react";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => (
    <Flex
        as="footer"
        p={5}
        gap={3}
        justify="space-between"
        alignItems="center"
        mt="3rem"
        fontSize="2rem"
        borderTop="solid 2px"
        color="#34afff"
    >

        <Box>
            <Flex fontSize="2rem" gap={2} justify="space-betwen">
                <Link href="https://instagram.com" target="_blank" color="#34afff">
                    <FaInstagram />
                </Link>
                <Link href="https://youtube.com" target="_blank" color="#34afff">
                    <FaYoutube />
                </Link>
                <Link href="https://twitter.com" target="_blank" color="#34afff">
                    <FaTwitter />
                </Link>
            </Flex>
        </Box>

        <Flex direction="column">
            <Heading fontSize="2rem" color="black">
                Cheap{" "}
                <Text as="span" color="#34afff">
                    Tech
                </Text>
            </Heading>
            <Text fontSize="1rem" color="black">
                &copy; 2023 - CheapTech 
            </Text>
        </Flex>
    </Flex>
);

export default Footer;