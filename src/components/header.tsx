import { Flex, Heading, Image } from "@chakra-ui/react";
import Container from "./container";
import ContainerInside from "./containerInside";
import NextChakraLink from "./nextChakraLink";

export default function () {
  return (
    <Container
      position="sticky"
      top={0}
      transition="all 0.3s ease"
      background={"white"}
      shadow={"md"}
      zIndex={100}
      // color={background ? "black" :  "white"}
      fontSize={22}
    >
      <ContainerInside py={2}>
        <Flex align="center" justify="space-between">
          <NextChakraLink href="/">
            <Flex gap={5} align="center" justify="center">
              <Image
                src="/logo_transparent.png"
                alt="sparks volleyball club's logo"
                width="75px"
              />
              <Heading size="md">Atomic EMR</Heading>
            </Flex>
          </NextChakraLink>
          <Flex gap={10}>
            <HeaderLink href="/">Home</HeaderLink>
            <HeaderLink href="/register">Register</HeaderLink>
            <HeaderLink href="/contact">Contact</HeaderLink>
          </Flex>
        </Flex>
      </ContainerInside>
    </Container>
  );
}

function HeaderLink({ children, href, ...props }) {
  return (
    <NextChakraLink href={href} {...props}>
      {children}
    </NextChakraLink>
  );
}
