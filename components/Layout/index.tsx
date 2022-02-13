import AdminDrawer from "@components/AdminDrawer";
import Navbar from "@components/Navbar";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  const router = useRouter();
  console.log(router);

  return (
    <Box>
      {router?.pathname === "/" && <BackPhoto src={"/bg.jpeg"} />}
      <Navbar />
      {/* <AdminDrawer /> */}
      {children}
    </Box>
  );
};

const BackPhoto = styled.img`
  position: absolute;
  z-index: -9999;
`;

export default Layout;
