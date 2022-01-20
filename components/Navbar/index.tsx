import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { TopNav } from "./styles";

const pages: string[] = [
  "Editor's pick",
  "추천코스",
  "테마여행",
  "코스를 부탁해",
  "내 주변 갈만한 곳",
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [selectedNavIndex, setSelectedNavIndex] = useState(-1);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const onHandleNavItemClick = useCallback(
    (event: React.MouseEvent<HTMLElement>, index: number) => {
      handleCloseNavMenu();
      setSelectedNavIndex(index);
    },
    []
  );

  return (
    <Container>
      <TopNav>
        <Link href="/login">Login</Link>|<Link href="/login">Join us</Link>|
        <Link href="/login">고객센터</Link>
      </TopNav>
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page, index) => (
              <MenuItem
                key={page}
                onClick={(event) => onHandleNavItemClick(event, index)}
              >
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Link href="/">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
        </Link>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
          }}
        >
          <Link href="/">
            <Button>
              <Typography
                variant="h6"
                noWrap
                component={"div"}
                sx={{
                  my: 2,
                  color: "blue",
                  display: "block",
                }}
              >
                HOME
              </Typography>
            </Button>
          </Link>
          {pages.map((page, index) => (
            <Button
              key={page}
              onClick={(event) => onHandleNavItemClick(event, index)}
              sx={[
                {
                  my: 2,
                  color: "black",
                  display: "block",
                  fontSize: "1rem",
                  fontWeight: "bold",
                },
                selectedNavIndex === index && {
                  color: "orange",
                },
              ]}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Container>
  );
};

export default Navbar;
import Link from "next/link";
