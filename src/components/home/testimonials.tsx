import { Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Claudio Rojas",
    title: "Genius Coder",
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, rem culpa ullam incidunt ducimus voluptates expedita! Aliquam id et libero autem aspernatur obcaecati, consequatur repudiandae neque. Eum pariatur dolorem quasi.",
  },
  {
    name: "Hazim Arafa",
    title: "Physical Therapist",
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, rem culpa ullam incidunt ducimus voluptates expedita! Aliquam id et libero autem aspernatur obcaecati, consequatur repudiandae neque. Eum pariatur dolorem quasi.",
  },
  {
    name: "Tom Rojas",
    title: "Mastermind CEO",
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, rem culpa ullam incidunt ducimus voluptates expedita! Aliquam id et libero autem aspernatur obcaecati, consequatur repudiandae neque. Eum pariatur dolorem quasi.",
  },
];

export default function Testimonials() {
  return (
    <Container bg="primary">
      <ContainerInside as={VStack}>
        <Heading as="h1" mb={10} size="2xl" color="white">
          Testimonials
        </Heading>
        <HStack>
          {testimonials.map((testimonial) => (
            <Testimonial {...testimonial} />
          ))}
        </HStack>
      </ContainerInside>
    </Container>
  );
}

function Testimonial({ name, title, quote }) {
  return (
    <VStack bg="white" p={4} rounded="lg">
      <Icon as={FaQuoteLeft} fontSize={40} color="primary" />
      <Text>{quote}</Text>
      <Heading size="lg" color="primary">
        {name}
      </Heading>
      <Text>{title}</Text>
    </VStack>
  );
}
