import { MantineProvider } from "@mantine/core";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { GlobalStyles } from "../components/GlobalStyle";
import { seoConfig } from "../config/seo";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        withCSSVariables
        theme={{
          colorScheme: "dark",
          fontFamily:
            "Hack, monospace, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        }}
      >
        <GlobalStyles />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default App;
