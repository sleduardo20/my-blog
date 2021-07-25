import { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "../styles/globalStyles";

import theme from "../styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>Blog | Eduardo Lima</title>
          </Head>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
  );
}

export default App;
