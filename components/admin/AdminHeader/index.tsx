import { Box, Toolbar, Tooltip, Typography } from "@mui/material";
import { idState } from "@store/auth";
import { getUserProfileById } from "api/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";

const AdminHeader = () => {
  const id = useRecoilValue(idState);
  const [user, setUser] = useState();
  const router = useRouter();

  const getUser = async () => {
    try {
      const data = await getUserProfileById({ id });
      setUser(data);
      console.log(data);

      if (data.userData[0].type !== 2) {
        toast.error("권한이 없습니다");
      }
    } catch (e) {
      console.log(e);
      toast.error("토큰만료");
      router.push("/logout");
    }
  };
  useEffect(() => {
    getUser();
  }, []);

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
