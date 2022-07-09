import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const stats = [
  { stat: "90%", description: "of users said it was easy to navigate" },
  { stat: "100%", description: "of users said the software met their needs" },
  {
    stat: "90%",
    description: "of users said they would recommend Atomic",
  },
];

export default function Stats() {
  return (
    <Container>
      <ContainerInside as={HStack} justify="center">
        {stats.map((stat, index) => (
          <Stat
            key={stat.description}
            bg={index % 2 == 0 ? "secondary" : "primary"}
            color={index % 2 != 0 && "white"}
            {...stat}
          />
        ))}
      </ContainerInside>
    </Container>
  );
}

function Stat({ stat, description, ...props }) {
  return (
    <VStack flex={1} rounded="lg" p={6} {...props}>
      <Heading size="3xl">{stat}</Heading>
      <Text>{description}</Text>
    </VStack>
  );
}
