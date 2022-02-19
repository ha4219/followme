import "@styles/globals.css";
import React from "react";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import { RecoilRoot } from "recoil";

import createEmotionCache from "@styles/createEmotionCache";
import { CssBaseline } from "@mui/material";
import theme from "@styles/theme";
import Layout from "@components/Layout";
import Footer from "@components/Footer";
import "react-quill/dist/quill.snow.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
            <ToastContainer />
            <Footer />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </RecoilRoot>
  );
}

export default MyApp;
