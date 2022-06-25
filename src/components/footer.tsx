import {
  Button,
  Center,
  Circle,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  useToken,
  VStack,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import Container from "./container";
import ContainerInside from "./containerInside";
import NextChakraLink from "./nextChakraLink";

export default function () {
  const primary = useToken("colors", "primary");
  return (
    <Container as="footer" bg="accent" color="whiteAlpha.600" mt={200}>
      <ContainerInside>
        <Center
          bg="gradient"
          py={10}
          pos="relative"
          bottom={100}
          rounded="3xl"
          textAlign="center"
          boxShadow={`0px 0px 100px ${primary}`}
        >
          <VStack maxW="500px" px="25px" color="white">
            <Heading fontSize={{ base: "xl", sm: "3xl", lg: "4xl" }} as="h1">
              Upgrade ☝️ your productivity today!
            </Heading>
            <HStack>
              <Button variant="secondary" as={Link} href="/register">
                Register
              </Button>
            </HStack>
          </VStack>
        </Center>
        <Flex justify="space-between">
          <VStack>
            <NextChakraLink href="/">
              <Image
                src="/logo_transparent.png"
                alt="atomic emr logo"
                w="200px"
                mb={10}
              />
            </NextChakraLink>
            <HStack gap={4} justify="center">
              <FooterIcon icon={<FaInstagram />} href="/instagram" />
              <FooterIcon icon={<FaTwitter />} href="/twitter" />
              <FooterIcon icon={<FaFacebook />} href="/facebook" />
              <FooterIcon icon={<FaTiktok />} href="/tiktok" />
            </HStack>
          </VStack>
          <Stack>
            <Heading size="sm" color="white">
              Quick Links
            </Heading>
            <Link href="/">Home</Link>
            <Link href="/register">Register</Link>
            <Link href="/contact">Contact</Link>
          </Stack>
          <Stack>
            <Heading size="sm" color="white">
              Follow
            </Heading>
            <Link isExternal href="/instagram">
              Instagram
            </Link>
            <Link isExternal href="/twitter">
              Twitter
            </Link>
            <Link isExternal href="/facebook">
              Facebook
            </Link>
            <Link isExternal href="/tiktok">
              TikTok
            </Link>
          </Stack>
          {/*
          <Stack>
            <Heading size="sm" color="white">
              Legal
            </Heading>
            <NextChakraLink href="/privacy">Privacy</NextChakraLink>
            <NextChakraLink href="/terms">Terms</NextChakraLink>
          </Stack>
          */}
          <Stack>
            <Heading size="sm" color="white">
              Contact Us
            </Heading>
            <Contact
              icon={<FaPhoneAlt />}
              href="tel:702-989-8961"
              info="702-989-8961"
            />
          </Stack>
        </Flex>
      </ContainerInside>
      <Divider />
      <ContainerInside py={5}>
        <Flex justify="space-between">
          <Text>
            Copyright ©️ {new Date().getFullYear()} Atomic EMR LLC. All Rights
            Reserved
          </Text>

          <Link href="https://hazim.tech" isExternal>
            Designed & Developed with<span>💖</span>
            by: <span style={{ fontWeight: "bold" }}>Hazim Arafa</span>
          </Link>
        </Flex>
      </ContainerInside>
    </Container>
  );
}

function FooterIcon({ icon, href }) {
  return (
    <Link href={href} isExternal>
      <Circle
        transition="all ease .3s"
        _hover={{ background: "white", color: "primary" }}
        fontSize="2xl"
        p={3}
        bg="primary"
        color="white"
      >
        {icon}
      </Circle>
    </Link>
  );
}

function Contact({ icon, href = null, info }) {
  return (
    <Link href={href} isExternal>
      <HStack>
        <Circle>{icon}</Circle>
        <Text>{info}</Text>
      </HStack>
    </Link>
  );
}
