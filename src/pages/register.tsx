import { Heading, VStack } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Register() {
  return (
    <Container>
      <ContainerInside>
        <VStack>
          <Heading as="h1">Register</Heading>
        </VStack>
      </ContainerInside>
    </Container>
  );
}
