import { SimpleGrid } from "@chakra-ui/react";

export default function Therapists() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      <Card />
    </SimpleGrid>
  );
}

function Card({}) {
  return null;
}
