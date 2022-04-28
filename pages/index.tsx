import type { NextPage } from "next";
import Head from "next/head";
import styles from "@styles/Home.module.css";
import React, { useEffect, useState } from "react";
import Banner from "@components/Banner";
import ProgramList from "@components/ProgramList";
import { API } from "@src/API";
import { Box, Container, Button } from "@mui/material";
import MapContainer from "@components/MapContainer";
import styled from "@emotion/styled";
import MainMapContainer from "@components/main/MainMapContainer";
import MainEditorPickContainer from "@components/main/MainEditorPickContainer";
import MainThemeContainer from "@components/main/MainThemeContainer";
import MainSearchContaier from "@components/main/MainSearchContainer";

const Home: NextPage = () => {
  const [isLoading, setLoading] = useState(false);

  // useEffect(() => {

  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>FollowMe</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      {isLoading ? (
        <></>
      ) : (
        <div>
          <MainSearchContaier />
          <MainEditorPickContainer />

          <Container>
            <ProgramList />
            <Banner />
            <MainThemeContainer />
          </Container>
          <MainMapContainer />
        </div>
      )}
    </div>
  );
};

// export async function getServerSideProps() {
//   const { data } = await API.get(process.env.API_URL + "/main/swipers", {});

//   return {
//     props: {
//       data,
//     },
//   };
// }

export default Home;
