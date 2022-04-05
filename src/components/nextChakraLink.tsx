import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NextChakraLink(props: any) {
  return (
    <NextLink href={props.href} passHref>
      <Link {...props}>{props.children}</Link>
    </NextLink>
  );
}
