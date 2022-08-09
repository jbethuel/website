import { MantineProvider } from "@mantine/core";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { ReactNode, useContext } from "react";
import { GlobalStyles } from "../components/GlobalStyle";
import { ThemeContext, ThemeProvider } from "../components/ThemeProvider";
import { seoConfig } from "../config/seo";

function Provider(props: { children: ReactNode }) {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
      theme={{
        colorScheme: isDarkTheme ? "dark" : "light",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      }}
    >
      <GlobalStyles />
      {props.children}
    </MantineProvider>
  );
}

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <DefaultSeo {...seoConfig} />
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
