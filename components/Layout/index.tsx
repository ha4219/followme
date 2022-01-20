import AdminDrawer from "@components/AdminDrawer";
import Navbar from "@components/Navbar";
import { Box } from "@mui/material";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <Box>
      <Navbar />
      {/* <AdminDrawer /> */}
      {children}
    </Box>
  );
};

export default Layout;
