import { Box, Toolbar, Tooltip, Typography } from "@mui/material";
import { idState } from "@store/auth";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

const AdminHeader = () => {
  const id = useRecoilValue(idState);
  const router = useRouter();
  return (
    <Box>
      <Toolbar disableGutters sx={{ minHeight: 64, px: 2 }}>
        <Tooltip title="hi">
          <div>{router.pathname}</div>
        </Tooltip>
        <Box sx={{ flexGrow: 1 }} />
        <Tooltip title="hi">
          <div>{id}</div>
        </Tooltip>
      </Toolbar>
    </Box>
  );
};

export default AdminHeader;
