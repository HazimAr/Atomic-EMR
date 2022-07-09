import {
  Heading,
  Stack,
  Text,
  Image,
  HStack,
  Box,
  Button,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

export default function Manage() {
  return (
    <Container bg="primary" color="white">
      <ContainerInside as={HStack} spacing={0} gap={10}>
        <Stack flex={1} spacing={4}>
          <Heading as="h1">Manage Everything in One Place</Heading>
          <Text>
            Forget managing your practice with various systems or keeping track
            of paper records. Your patient data, scheduling, and notes are all
            linked in a portable software solution with Atomic EMR.
          </Text>
          <Button variant="secondary" w="fit-content">
            Start Managing
          </Button>
        </Stack>
        <Box flex={1}>
          <Image src="/all.svg" alt="all the data" />
        </Box>
      </ContainerInside>
    </Container>
  );
}
