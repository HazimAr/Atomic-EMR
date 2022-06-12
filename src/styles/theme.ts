import { extendTheme } from "@chakra-ui/react";
import { Button, Link } from "./components";

const theme = extendTheme({
  colors: {
    primary: "hsl(204,64%,55%)",
    secondary: "white",
    accent: "#1f1f1f",
    gradient:
      "linear-gradient(90deg, hsl(204,64%,50%) 0%, hsl(204,64%,30%) 100%); hsl(204,70%,55%)",
  },
  components: {
    Button,
    Link,
  },
  styles: {
    global: () => ({
      body: {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        color: "black",
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
      ul: {
        listStyle: "none",
      },
      span: {
        color: "primary",
        fontWeight: "bold",
        background: "gradient",
        backgroundClip: "text",
      },
      ".white-header": {
        color: "#fff",
        textShadow: "#000 0px 0px 3px",
        background: "transparent",
      },
      "&::-webkit-scrollbar": {
        width: "0.6em",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "0px",
        background: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "primary",
        borderRadius: "50px",
      },
    }),
  },
});

export default theme;
