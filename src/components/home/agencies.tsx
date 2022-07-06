import { Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { FaBook, FaEye, FaPhoneAlt, FaStethoscope } from "react-icons/fa";

export default function Agencies() {
  return (
    <Container>
      <ContainerInside>
        <VStack spacing={20}>
          <Heading as="h1" size="2xl">
            For Agencies
          </Heading>
          <HStack alignItems="flex-start">
            <Card
              icon={FaStethoscope}
              title="Access"
              description="Access Information on patients, therapists, physicians and staff information"
            />
            <Card
              icon={FaBook}
              title="Track"
              description="Therapist – patient mapping: (viewing therapists treating specific patients)"
            />
            <Card
              icon={FaEye}
              title="Display"
              description="Therapist tracking (display all patients being treated by a specific therapist)"
            />
            <Card
              icon={FaPhoneAlt}
              title="Communicate"
              description="Staff or therapist direct messaging"
            />
          </HStack>
        </VStack>
      </ContainerInside>
    </Container>
  );
}

function Card({ icon, title, description }) {
  return (
    <VStack
      bg="primary"
      color="white"
      p={5}
      rounded="xl"
      justifyContent="center"
      minH="160px"
      w="100%"
      justify="flex-start"
    >
      <HStack>
        <Icon as={icon} boxSize={8} />
        <Heading fontSize={20}>{title}</Heading>
      </HStack>
      <Text>{description}</Text>ch
    </VStack>
  );
}
