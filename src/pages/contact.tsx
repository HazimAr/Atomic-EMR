import {
  Circle,
  Heading,
  HStack,
  Stack,
  Text,
  Link,
  Accordion,
  VStack,
  Image,
  Button,
  useToast,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import {  FaPhoneAlt } from "react-icons/fa";
import { Formik } from "formik";
import { z } from "zod";
import { InputControl, TextareaControl } from "formik-chakra-ui";
import { toFormikValidationSchema } from "zod-formik-adapter";

export default function Contact() {
  const toast = useToast();
  return (
    <Container>
      <ContainerInside>
        <Stack spacing={10}>
          {/* <Text>Add Interactive Map Here</Text> */}
          <Heading as="h1" textAlign="center">
            Got any questions?
          </Heading>
          <HStack spacing={20}>
            <Formik
              validationSchema={toFormikValidationSchema(
                z.object({
                  firstName: z.string(),
                  lastName: z.string(),
                  email: z.string().email(),
                  subject: z.string(),
                  message: z.string(),
                })
              )}
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                subject: "",
                message: "",
              }}
              onSubmit={async (values, { resetForm }) => {
                await Promise.all([
                  setTimeout(() => {
                    console.log("submitting");
                  }, 2000),
                ]);
                console.log(values);
                toast({
                  title: "Thank you for your message!",
                  description: "We will get back to you as soon as possible.",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
                resetForm();
              }}
            >
              {({ handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                  <VStack p={10} bg="white" rounded="xl">
                    <HStack alignItems="flex-start" w="100%">
                      <InputControl name="firstName" label="First Name" />
                      <InputControl name="lastName" label="Last Name" />
                    </HStack>
                    <InputControl name="email" label="Email" />
                    <InputControl name="subject" label="Subject" />
                    <TextareaControl
                      name="message"
                      label="Message"
                      resize="none"
                    />
                    <Button type="submit" isLoading={isSubmitting}>
                      Submit
                    </Button>
                  </VStack>
                </form>
              )}
            </Formik>
            <VStack spacing={20}>
              <HStack spacing={10} justify="center" w="100%">
                <ContactInfo
                  icon={<FaPhoneAlt />}
                  href="tel:702-989-8961"
                  title="Give us a call"
                  info="702-989-8961"
                />
              </HStack>
              <Image src="/contact.svg" alt="contact us" />
            </VStack>
          </HStack>
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
