import "@styles/globals.css";
import React from "react";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import { RecoilRoot } from "recoil";

import createEmotionCache from "@styles/createEmotionCache";
import { CssBaseline } from "@mui/material";
import theme from "@styles/theme";
import Layout from "@components/Layout";
import Footer from "@components/Footer";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props: {
  Component: any;
  emotionCache?: EmotionCache | undefined;
  pageProps: any;
}) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <RecoilRoot>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
            <Footer />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </RecoilRoot>
  );
}

export default MyApp;
