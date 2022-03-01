import AdminDrawer from "@components/AdminDrawer";
import MainSearchContaier from "@components/main/MainSearchContainer";
import Navbar from "@components/Navbar";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  const router = useRouter();

  return (
    <Box>
      {router?.pathname === "/" && <BackPhoto src={"/back.jpeg"} />}
      {router?.pathname.includes("admin") ? <AdminDrawer /> : <Navbar />}
      {children}
    </Box>
  );
};

const BackPhoto = styled.div`
  position: absolute;
  background: url(${(props: { src: string }) => props.src}) no-repeat;
  z-index: -9999;
  background-size: cover;
  width: 100%;
  height: 700px;
`;

export default Layout;
