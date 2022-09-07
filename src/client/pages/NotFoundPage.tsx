import React from "react"
import {
  Box,
  useColorModeValue,
  Flex,
  Text,
  Heading,
  Icon,
  VStack,
  HStack,
} from "@chakra-ui/react"
import { TbError404 } from "react-icons/tb"

export const NotFoundPage = () => {
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")}>
      <Flex h={"calc(100vh - 8rem)"} align={"center"} justify={"center"}>
        <VStack>
          <HStack>
            <Heading color={"red.600"}>Error</Heading>
            <Icon as={TbError404} boxSize={16} color={"red.600"} />
          </HStack>
          <Text fontSize={"xl"}>La página que buscas no existe.</Text>
        </VStack>
      </Flex>
    </Box>
  )
}
