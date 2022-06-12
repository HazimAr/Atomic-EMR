import {
  Circle,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  Link,
  Accordion,
  // AccordionItem,
  // AccordionButton,
  // AccordionPanel,
  // AccordionIcon,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { FaBuilding, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <Container>
      <ContainerInside>
        <Stack spacing={10}>
          {/* <Text>Add Interactive Map Here</Text> */}
          <Heading as="h1" textAlign="center">
            Contact Us
          </Heading>
          <Flex gap={10} justify="center" align="center">
            <ContactInfo
              icon={<FaPhoneAlt />}
              href="tel:702-989-8961"
              title="Give us a call"
              info="702-989-8961 ext 801"
            />
            <ContactInfo
              icon={<FaEnvelope />}
              href="mailto:info@atomicemr.com?subject=Contacted From Website"
              title="Send us an email"
              info="info@atomicemr.com"
            />
            <ContactInfo
              icon={<FaBuilding />}
              href="https://goo.gl/maps/tDLFd3bzcd6tSR948"
              title="Visit Us"
              info="304 S. Jones Blvd, Ste. 5812, Las Vegas, NV 89107"
            />
          </Flex>
          <Heading as="h1" textAlign="center">
            FAQ
          </Heading>
          <Accordion allowToggle id="faq">
            {
              // questions.results.map((question) => (
              //   <AccordionItem key={question.id}>
              //     <AccordionButton>
              //       <Heading size="md" flex="1" textAlign="left">
              //         {/* @ts-ignore */}
              //         {question.properties.Name.title[0]?.plain_text}
              //       </Heading>
              //       <AccordionIcon />
              //     </AccordionButton>
              //     <AccordionPanel pb={4}>
              //       {/* @ts-ignore */}
              //       {question.properties.Answer.rich_text[0]?.plain_text}
              //     </AccordionPanel>
              //   </AccordionItem>
              // ))
            }
          </Accordion>
        </Stack>
      </ContainerInside>
    </Container>
  );
}

function ContactInfo({ icon, title, info, href }) {
  return (
    <Link href={href} isExternal>
      <HStack align="flex-start">
        <Circle fontSize={40} p={3} color="primary">
          {icon}
        </Circle>
        <Stack maxW="30ch">
          <Text>{title}</Text>
          <Heading size="sm">{info}</Heading>
        </Stack>
      </HStack>
    </Link>
  );
}