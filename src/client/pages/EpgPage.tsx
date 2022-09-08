import React from "react"
import { BasicPage } from "./BasicPage"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Link,
  ListItem,
  UnorderedList,
  VStack,
} from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Link as RouterLink } from "react-router-dom"

export const EpgPage = () => {
  return (
    <BasicPage>
      <VStack py={6} spacing={8}>
        <Container maxW="container.md">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink as={RouterLink} to="/">
                Inicio
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Programación</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
        <Container maxW="container.md">
          <VStack align={"start"}>
            <Heading fontSize={"3xl"}>Programación para 2 días</Heading>
            <UnorderedList>
              <ListItem>
                <Link href={"/api/epg/mepg.xml"} isExternal>
                  Xmltv sin comprimir <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
              <ListItem>
                <Link href={"/api/epg/mepg.xml.gz"} isExternal>
                  Xmltv comprimido <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
            </UnorderedList>
          </VStack>
        </Container>
      </VStack>
    </BasicPage>
  )
}
