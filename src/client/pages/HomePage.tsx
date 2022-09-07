import React from "react"
import { BasicPage } from "./BasicPage"
import {
  VStack,
  Container,
  Heading,
  Center,
  Text,
  SimpleGrid,
  useColorModeValue,
  Box,
  Icon,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react"
import { IconType } from "react-icons/lib"
import { TbDeviceTv, TbFileDownload } from "react-icons/tb"
import { Link } from "react-router-dom"

type Service = {
  name: string
  icon: IconType
  color: string
  description: string
  url: string
}

const services: Service[] = [
  {
    name: "Programación",
    icon: TbFileDownload,
    color: "red.600",
    description: "Programación de mplus para varios días.",
    url: "/epg",
  },
  {
    name: "Creador de listas M3U",
    icon: TbDeviceTv,
    color: "blue.600",
    description: "Crea tu propia lista M3U a partir de los canales de mplus.",
    url: "/m3u",
  },
]

export const HomePage = () => {
  return (
    <BasicPage>
      <VStack py={6} spacing={8}>
        <Center>
          <Container maxW="container.md">
            <VStack spacing={12}>
              <Heading>Servicios</Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
                {services.map((s) => (
                  <ServiceCard key={s.name} service={s} />
                ))}
              </SimpleGrid>
            </VStack>
          </Container>
        </Center>
      </VStack>
    </BasicPage>
  )
}

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <LinkBox
      rounded={"lg"}
      bg={useColorModeValue("white", "gray.800")}
      _hover={{
        bg: useColorModeValue("gray.100", "gray.700"),
        transitionProperty: "common",
        transitionDuration: "normal",
        boxShadow: useColorModeValue("lg", "dark-lg"),
      }}
      boxShadow={"base"}
      p={6}
    >
      <VStack>
        <Icon as={service.icon} boxSize={16} color={service.color} />
        <LinkOverlay as={Link} to={service.url}>
          <Heading fontSize={"2xl"} textAlign={"center"}>
            {service.name}
          </Heading>
        </LinkOverlay>
        <Text>{service.description}</Text>
      </VStack>
    </LinkBox>
  )
}
