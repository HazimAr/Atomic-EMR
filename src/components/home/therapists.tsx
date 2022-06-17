import {
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { FaBook, FaEye, FaPen, FaStethoscope } from "react-icons/fa";

export default function Therapists() {
  return (
    <Container bg="primary">
      <ContainerInside>
        <VStack spacing={20}>
          <Heading as="h1" color="white" size="2xl">
            For Therapists
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <Card
              icon={FaStethoscope}
              title="Dashboard"
              description="Access, add and edit information as well as patient and therapist history"
            />
            <Card
              icon={FaBook}
              title="Document"
              description="Upload documents such as evaluations, re-evaluations, prescriptions and intake forms."
            />
            <Card
              icon={FaEye}
              title="View"
              description="View completed documents for patients which they are assigned and can complete initial evaluations, re-evaluations, treatment notes, discharge summaries for adult and pediatric patients with Medicare/private insurances"
            />
            <Card
              icon={FaPen}
              title="Write"
              description="Write notes for checkups, evaluations, re-evaluations, prescriptions and intake forms."
            />
          </SimpleGrid>
        </VStack>
      </ContainerInside>
    </Container>
  );
}

function Card({ icon, title, description }) {
  return (
    <VStack bg="white" p={5} rounded="xl" justifyContent="center">
      <HStack>
        <Icon as={icon} boxSize={8} />
        <Heading fontSize={20}>{title}</Heading>
      </HStack>
      <Text>{description}</Text>ch
    </VStack>
  );
}
