import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Button,
  Container,
  TextField,
  InputAdornment,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

import { TopNav } from "./styles";
import Logo from "@components/Logo";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { authState, idState } from "@store/auth";
import { checkToken, setToken } from "@src/API";
import { toast } from "react-toastify";
import useInput from "@hooks/useInput";
import SearchIcon from "@mui/icons-material/Search";
import { tagState } from "@store/tag";

interface PageProps {
  label: string;
  target?: string;
}

const pages: PageProps[] = [
  { label: "Home", target: "" },
  { label: "Editor's pick", target: "editor" },
  { label: "추천코스", target: "recommend" },
  { label: "테마여행", target: "theme" },
  { label: "코스를 부탁해", target: "course" },
  { label: "내 주변 갈만한 곳", target: "map" },
];

const Navbar = () => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useRecoilState(authState);
  const [loggedInId, setLoggedInId] = useRecoilState(idState);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [selectedNavIndex, setSelectedNavIndex] = useState(-1);
  const [isMain, setIsMain] = useState(true);
  const [selectedTag, setSelectedTag] = useRecoilState(tagState);
  const [value, setValue] = useState("");
  const onChangeValue = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [value]
  );

  const onSubmitValue = useCallback(() => {
    setSelectedTag(value);
    router.push("/editor");
  }, [value]);

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

  const doLogout = async () => {
    try {
      setLoggedIn("");
      setLoggedInId("");
      router.push("/signin");
      toast.success("로그아웃");
    } catch (e) {
      toast.error("로그아웃 error");
    }
  };

  return (
    <Container
      sx={{
        borderBottom: "1px solid rgba(255,255,255,0.3)",
        paddingBottom: "1rem",
      }}
    >
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
                paddingBottom: 0,
                paddingTop: "1.1rem",
                marginBottom: 0,
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
                  paddingBottom: 0,
                  paddingTop: "1.1rem",
                  marginBottom: 0,
                },
                selectedNavIndex === index && {
                  color: "#ff9016",
                  borderBottom: "2px solid #ff9016",
                },
              ]}
            >
              {page.label}
            </Button>
          ))}
          <TopNav>
            <div>
              {loggedIn ? (
                <div className={isMain ? "topSub whiteTxt" : "topSub"}>
                  <span onClick={doLogout}>Logout</span>|
                  <Link href="/profile/home">Profile</Link>|
                  <Link href="/help/faq">고객센터</Link>
                </div>
              ) : (
                <div className={isMain ? "topSub whiteTxt" : "topSub"}>
                  <Link href="/signin">Login</Link>|
                  <Link href="/signup">Join us</Link>|
                  <Link href="/help/faq">고객센터</Link>
                </div>
              )}
              <TextField
                id="search"
                className="searchField"
                value={value}
                onChange={onChangeValue}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  marginTop: "10px",
                }}
                size="small"
                placeholder="검색어를 입력해주세요."
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={onSubmitValue}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </TopNav>
        </Box>
      </Toolbar>
    </Container>
  );
};

export default Navbar;
