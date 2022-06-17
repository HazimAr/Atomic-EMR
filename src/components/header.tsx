import { Flex, Heading, Image, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Container from "./container";
import ContainerInside from "./containerInside";
import NextChakraLink from "./nextChakraLink";

export default function Header() {
  const [background, setBackground] = useState(false);
  const [properties, setProperties] = useState({
    position: "sticky",
    width: "auto",
  });
  useEffect(() => {
    onscroll = () => {
      if (window.scrollY > 30) return setBackground(true);
      setBackground(false);
    };
    console.log(location.pathname);
    if (location.pathname === "/") {
      setProperties({
        position: "fixed",
        width: "100vw",
      });
    }
  }, []);
  return (
    <Container
      position={properties.position}
      top={0}
      w={properties.width}
      transition="all 0.3s ease"
      background={"white"}
      shadow={background ? "md" : null}
      zIndex={100}
      fontSize={22}
      as="header"
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
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
