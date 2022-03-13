import { Box, Toolbar, Tooltip, Typography } from "@mui/material";

const AdminHeader = () => {
  return (
    <Box>
      <Toolbar disableGutters sx={{ minHeight: 64, px: 2 }}>
        <Tooltip title="hi">
          <div>option</div>
        </Tooltip>
        <Box sx={{ flexGrow: 1 }} />
        <Tooltip title="hi">
          <div>option</div>
        </Tooltip>
      </Toolbar>
    </Box>
  );
};

export default AdminHeader;
