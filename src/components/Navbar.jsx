import { useState } from "react";
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
    Menu,
    MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [gameMenuAnchor, setGameMenuAnchor] = useState(null);
    const logoSrc = "./icon.png";

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleGameMenuOpen = (event) => {
        setGameMenuAnchor(event.currentTarget);
    };

    const handleGameMenuClose = () => {
        setGameMenuAnchor(null);
    };

    const isGameMenuOpen = Boolean(gameMenuAnchor);

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
                sx={{
                    p: 2,
                    textAlign: "center",
                    borderBottom: "1px solid #2e2e3f",
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    -H2O
                </Typography>
            </Box>
            <List sx={{ flex: 1 }}>
                {["Home", "Science", "Solution", "3D"].map((text) => (
                    <ListItem
                        key={text}
                        component={Link}
                        to={`./${text === "Home" ? "" : text.toLowerCase()}`}
                        sx={{
                            color: "white !important",
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
                <ListItem
                    component={Link}
                    to={`./game/quiz`}
                    sx={{
                        color: "white !important",
                        textDecoration: "none",
                        "&:hover": {
                            backgroundColor: "#2e2e3f",
                        },
                    }}
                >
                    <ListItemText
                        primary="Quiz"
                        primaryTypographyProps={{
                            fontSize: "16px",
                            fontWeight: "medium",
                            textAlign: "center",
                        }}
                    />
                </ListItem>
                <ListItem
                    component={Link}
                    to={`./game/rainwater`}
                    sx={{
                        color: "white !important",
                        textDecoration: "none",
                        "&:hover": {
                            backgroundColor: "#2e2e3f",
                        },
                    }}
                >
                    <ListItemText
                        primary="Rainwater Collection"
                        primaryTypographyProps={{
                            fontSize: "16px",
                            fontWeight: "medium",
                            textAlign: "center",
                        }}
                    />
                </ListItem>
            </List>
            <Box
                sx={{
                    p: 2,
                    borderTop: "1px solid #2e2e3f",
                    textAlign: "center",
                }}
            >
                <Typography variant="body2" sx={{ color: "#aaa" }}>
                    &copy; {new Date().getFullYear()} Node at 25:00. All rights reserved.
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

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "block" },
                        }}
                    >
                        <img src={logoSrc} width="3.5%" alt="" />
                    </Typography>

                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                sm: "block",
                            },
                        }}
                    >
                        <Button color="inherit" component={Link} to="./">
                            Home
                        </Button>
                        <Button color="inherit" component={Link} to="./science">
                            Science
                        </Button>
                        <Button color="inherit" component={Link} to="./solution">
                            Solution
                        </Button>
                        <Button color="inherit" component={Link} to="./3D">
                            3D Model
                        </Button>
                        <Button
                            color="inherit"
                            onClick={handleGameMenuOpen}
                            endIcon={
                                <KeyboardArrowDownIcon
                                    sx={{
                                        transform: isGameMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                                        transition: "transform 0.3s ease",
                                    }}
                                />
                            }
                        >
                            Game
                        </Button>
                        <Menu
                            anchorEl={gameMenuAnchor}
                            open={isGameMenuOpen}
                            onClose={handleGameMenuClose}
                            MenuListProps={{
                                "aria-labelledby": "game-button",
                            }}
                        >
                            <MenuItem
                                onClick={handleGameMenuClose}
                                component={Link}
                                to="./game/quiz"
                            >
                                Quiz
                            </MenuItem>
                            <MenuItem
                                onClick={handleGameMenuClose}
                                component={Link}
                                to="./game/rainwater"
                            >
                                Rainwater Collection
                            </MenuItem>
                        </Menu>
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
