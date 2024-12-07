import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    Box,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: "100%",
        backgroundColor: `rgba(0,0,0,.7)`,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <Box
        sx={{ p: 2, textAlign: "center", borderBottom: "1px solid #2e2e3f" }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          MyApp
        </Typography>
      </Box>
            <List sx={{ flex: 1 }}>
                {["Home", "About", "Forum", "Login"].map((text) => (
                    <ListItem
                        key={text}
                        component={Link}
                        to={`/${text.toLowerCase()}`}
                        sx={{
                            color: "white",
                            textDecoration: "none",
                            "&:hover": {
                                backgroundColor: "#2e2e3f",
                            },
                        }}
                    >
                        <ListItemText
                            primary={text}
                            primaryTypographyProps={{
                                fontSize: "16px",
                                fontWeight: "medium",
                                textAlign: "center",
                            }}
                        />
                    </ListItem>
                ))}
            </List>

      <Box sx={{ p: 2, borderTop: "1px solid #2e2e3f", textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "#aaa" }}>
          © 2024 MyApp. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(0, 0, 0, .5)",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            MyApp
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/forum">
              Forum
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{ backgroundColor: "transparent" }}
        
      >
        {drawer}
      </Drawer>
      <Outlet />
    </>
  );
};

export default Navbar;
