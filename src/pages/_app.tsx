import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@components/footer";
import Header from "@components/header";
import theme from "@styles/theme";
import { GA_TRACKING_ID, META } from "config";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: unknown) => {
      // @ts-ignore gtag is when google inject their script
      window.gtag("config", GA_TRACKING_ID, {
        page_location: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <title>{META.title}</title>
        <link rel="icon" href="/logo_secondary_solid.png" />
      </Head>
      <ChakraProvider theme={theme}>
        <Header />

        <Component {...pageProps} />

        <Footer />
      </ChakraProvider>
    </>
  );
}
