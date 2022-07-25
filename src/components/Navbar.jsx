import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";

const menus = [
  {
    menu: "Home",
    page: "/",
  },
  {
    menu: "Search",
    page: "/search",
  },
  {
    menu: "About",
    page: "/about",
  },
];

const settings = [
  {
    menu: "Profile",
    page: "/profile",
  },

  {
    menu: "Logout",
    page: "/logout",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      color="transparent"
      position="static"
      sx={{
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          border: "1px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <EggAltOutlinedIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component={Button}
              onClick={() => {
                navigate("/");
              }}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "text",
                textTransform: "none",
              }}
            >
              Resepku
            </Typography>

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
                {menus.map((menu) => (
                  <MenuItem
                    key={menu.menu}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(menu.page);
                    }}
                  >
                    <Typography textAlign="center">{menu.menu}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <EggAltOutlinedIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              onClick={() => {
                navigate("/");
              }}
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "text",
                textDecoration: "none",
              }}
            >
              Resepku
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: 2,
                marginLeft: 8,
              }}
            >
              {menus.map((menu) => (
                <Button
                  key={menu.menu}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(menu.page);
                  }}
                  sx={{
                    my: 3,
                    display: "block",
                    textTransform: "none",
                    fontWeight: "500",
                  }}
                >
                  {menu.menu}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Profile "
                    src="https://i.pravatar.cc/150?img=68"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting.menu}
                    onClick={() => {
                      handleCloseUserMenu();
                      navigate(setting.page);
                    }}
                  >
                    <Typography textAlign="center">{setting.menu}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
};
export default Navbar;
