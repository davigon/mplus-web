import React from "react"
import {
  useColorMode,
  Flex,
  IconButton,
  useColorModeValue,
  HStack,
  Container,
  Heading,
  Icon,
  As,
} from "@chakra-ui/react"
import { TbHome, TbSun, TbMoon } from "react-icons/tb"
import { Link as RouterLink, LinkProps } from "react-router-dom"

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container maxW="container.xl">
      <Flex h={"4rem"} alignItems={"center"} justifyContent={"space-between"}>
        <Heading fontSize={"2xl"}>mplus</Heading>
        <HStack spacing={2}>
          <NavIconLink
            icon={<Icon as={TbHome} boxSize={5} />}
            aria-label={"Home"}
            as={RouterLink}
            to={"/"}
          />
          <NavIconButton
            icon={
              colorMode === "light" ? (
                <Icon as={TbMoon} boxSize={5} />
              ) : (
                <Icon as={TbSun} boxSize={5} />
              )
            }
            aria-label={"ColorMode"}
            onClick={toggleColorMode}
          />
        </HStack>
      </Flex>
    </Container>
  )
}

type NavIconButtonProps = {
  icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>
  "aria-label": string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

type NavIconLinkProps = {
  icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>
  "aria-label": string
  as: As<any> &
    React.ForwardRefExoticComponent<
      LinkProps & React.RefAttributes<HTMLAnchorElement>
    >
  to: string
}

const NavIcon = ({
  props,
}: {
  props: NavIconButtonProps | NavIconLinkProps
}) => {
  return (
    <IconButton
      size={"md"}
      colorScheme={"whiteAlpha"}
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("black", "white")}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.100", "whiteAlpha.200"),
      }}
      {...props}
    />
  )
}

const NavIconButton = (props: NavIconButtonProps) => {
  return <NavIcon props={props} />
}

const NavIconLink = (props: NavIconLinkProps) => {
  return <NavIcon props={props} />
}
