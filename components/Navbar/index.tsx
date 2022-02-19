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
import React, { useCallback, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";

import { TopNav } from "./styles";
import Logo from "@components/Logo";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { authState } from "@store/auth";
import { checkToken, setToken } from "@src/API";

interface PageProps {
  label: string;
  target?: string;
}

const pages: PageProps[] = [
  { label: "Home", target: "" },
  { label: "Editor's pick", target: "editor" },
  { label: "추천코스", target: "editor" },
  { label: "테마여행", target: "editor" },
  { label: "코스를 부탁해", target: "course" },
  { label: "내 주변 갈만한 곳", target: "map" },
];

const Navbar = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useRecoilState(authState);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [selectedNavIndex, setSelectedNavIndex] = useState(-1);
  const [isMain, setIsMain] = useState(true);

  useEffect(() => {
    if (!checkToken() && loggedIn) {
      setToken(loggedIn);
    }
  }, []);

  useEffect(() => {
    if (router.pathname) {
      setIsMain(router.pathname === "/");
    }
  }, [router.pathname]);

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
      router.push(`/${pages[index].target}`);
    },
    []
  );

  const doLogout = () => {
    setLoggedIn("");
    alert("logout");
  };

  return (
    <Container>
      <TopNav>
        {loggedIn ? (
          <div className={isMain ? "whiteTxt" : ""}>
            <span onClick={doLogout}>Logout</span>|
            <Link href="/profile/home">Profile</Link>|
            <Link href="/help/faq">고객센터</Link>
          </div>
        ) : (
          <div className={isMain ? "whiteTxt" : ""}>
            <Link href="/signin">Login</Link>|
            <Link href="/signup">Join us</Link>|
            <Link href="/help/faq">고객센터</Link>
          </div>
        )}
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
                key={index}
                onClick={(event) => onHandleNavItemClick(event, index)}
              >
                <Typography textAlign="center">{page.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography> */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            hover: "cursor",
          }}
        >
          <Button sx={{ textTransform: "none" }}>
            <Logo />
          </Button>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            // justifyContent: "center",
          }}
        >
          <Button
            onClick={(event) => onHandleNavItemClick(event, 0)}
            sx={[
              {
                textTransform: "none",
                my: 2,
                color: router.pathname === "/" ? "#ffffff" : "#000000",
                display: "block",
                fontSize: "1rem",
                fontWeight: "bold",
              },
            ]}
          >
            <Logo />
          </Button>
          {pages.map((page, index) => (
            <Button
              key={index}
              onClick={(event) => onHandleNavItemClick(event, index)}
              sx={[
                {
                  textTransform: "none",
                  my: 2,
                  color: router.pathname === "/" ? "#ffffff" : "#000000",
                  display: "block",
                  fontSize: "1rem",
                  fontWeight: "bold",
                },
                selectedNavIndex === index && {
                  color: "#0068ff",
                },
              ]}
            >
              {page.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Container>
  );
};

export default Navbar;
