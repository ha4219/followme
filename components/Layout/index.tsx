import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  const router = useRouter();

  return (
    <Box sx={{ padding: 0 }}>
      {router?.pathname === "/" && <BackPhoto src={"/back.jpeg"} />}
      {!router?.pathname.includes("admin") && <Navbar />}
      {children}
      {!router?.pathname.includes("admin") && <Footer />}
    </Box>
  );
};

const BackPhoto = styled.div`
  position: absolute;
  background: url(${(props: { src: string }) => props.src}) no-repeat;
  z-index: -9999;
  background-size: cover;
  width: 100%;
  height: 800px;
`;

export default Layout;
