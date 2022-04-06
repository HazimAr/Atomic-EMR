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
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

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
              href="tel:702-502-9462"
              title="Give us a call"
              info="(702) 502-9462"
            />
            <ContactInfo
              icon={<FaEnvelope />}
              href="mailto:sparksvolleyballclub@gmail.com?subject=Contacted From Website"
              title="Send us an email"
              info="SparksVolleyballClub@gmail.com"
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
    <HStack>
      <Circle fontSize={40} p={3} color="primary">
        {icon}
      </Circle>
      <Stack>
        <Text>{title}</Text>
        <Link href={href} isExternal>
          <Heading size="sm">{info}</Heading>
        </Link>
      </Stack>
    </HStack>
  );
}