import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Dashboard from "@mui/icons-material/Dashboard";
import Quiz from "@mui/icons-material/Quiz";
import Notes from "@mui/icons-material/Notes";
import ViewCarousel from "@mui/icons-material/ViewCarousel";
import GroupIcon from "@mui/icons-material/Group";
import Drawer from "@mui/material/Drawer";
import ReportIcon from "@mui/icons-material/Report";
import ApiIcon from "@mui/icons-material/Api";
import React, { FC } from "react";
import Link from "next/link";
import Logo from "@components/Logo";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const ADMINLEFTLAYOUTDETAIL = [
  { name: "Editor's Pick", value: "/admin/editor", icon: <Dashboard /> },
  { name: "공지사항", value: "/admin/notice", icon: <Notes /> },
  { name: "FAQ", value: "/admin/faq", icon: <Quiz /> },
  { name: "BANNER", value: "/admin/banner", icon: <ViewCarousel /> },
  { name: "신고", value: "/admin/report", icon: <ReportIcon /> },
  { name: "기업", value: "/admin/enterApprove", icon: <ApiIcon /> },
  { name: "유저", value: "/admin/users", icon: <GroupIcon /> },
];

const drawer = (
  <div>
    <Toolbar>
      <Link href={"/"}>
        <a>
          <Logo />
        </a>
      </Link>
    </Toolbar>

    <Divider />
    <List>
      {ADMINLEFTLAYOUTDETAIL.map((text, index) => (
        <Link href={text.value} key={index}>
          <ListItem button key={text.name}>
            <ListItemIcon>
              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              {text.icon}
            </ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItem>
        </Link>
      ))}
    </List>
    <Divider />
    {/* <List>
      {["All mail", "Trash", "Spam"].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List> */}
  </div>
);

const AdminDrawer: FC<Props> = (props) => {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box
        // component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {props.children}
    </div>
  );
};

export default AdminDrawer;
