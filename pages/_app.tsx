import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { seoConfig } from "../config/seo";
import "../styles/index.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
