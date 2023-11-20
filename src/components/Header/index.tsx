"use client";

import SearchForm from "@/components/SearchForm";
import { Button } from "../Button";
import * as S from "./header.style";
import { BiUserCircle, BiSolidCartAlt, BiLogOutCircle } from "react-icons/bi";
import { useAuth } from "@/contexts/AuthContext";
import {
  Button as ChakraButton,
  Heading,
  Menu,
  Text,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton as icoChackra
} from "@chakra-ui/react";
import Link from "next/link";

const Header: React.FC = () => {
  const { isLoged, logOut } = useAuth();
  return (
    <>
      <S.Header>
        <S.HeaderCenter>
          <Heading fontSize="2xl">
            <Text as="span" color="#34afff"
            >CheapTech</Text></Heading>
          <S.Nav>
            <Menu>
              <MenuButton variant="unstyled" as={icoChackra} icon={
                <BiUserCircle color="#34afff" />}></MenuButton>
              <MenuList>
                {isLoged ? (
                  <>
                    <SearchForm />
                    <MenuItem color="black" as={Link} href="/perfil">
                      Perfil
                    </MenuItem>
                    <MenuItem as={ChakraButton} leftIcon={<BiLogOutCircle
                      onClick={logOut}
                    />}>
                      Sair
                    </MenuItem>
                  </>
                ) : (
                  <><MenuItem as={Link} href="/register">Criar Conta</MenuItem><MenuItem as={Link} href="/login">Login</MenuItem></>
                )}
              </MenuList>
            </Menu>
            <Button variant="unstyled" color="#34afff">
              <BiSolidCartAlt color="#34afff" />
            </Button>
          </S.Nav>
        </S.HeaderCenter>
      </S.Header>
    </>
  );
};

export default Header;
