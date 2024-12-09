import React from "react";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import {
    ParallaxProvider,
    ParallaxBanner,
    ParallaxBannerLayer,
} from "react-scroll-parallax";

const Banner = () => {
    return (
        <ParallaxBanner style={{ height: "100vh", aspectRatio: "2/1" }}>
            <ParallaxBannerLayer image="The_Rhone_1.png" speed={20} />
            <ParallaxBannerLayer image="The_Rhone_2.png" speed={15} />
            <ParallaxBannerLayer image="The_Rhone_3.png" speed={18} />
            <ParallaxBannerLayer image="The_Rhone_4.png" speed={10} />{" "}
            <ParallaxBannerLayer>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        color: "#fff",
                        textAlign: "center",
                        padding: 4,
                    }}
                >
                    <Container maxWidth="md">
                        <Stack
                            alignItems={"center"}
                            justifyContent={"center"}
                            direction={"column"}
                            flexWrap={"wrap"}
                        >
                            <Typography
                                variant="h2"
                                component="h1"
                                gutterBottom
                                bgcolor={"black"}
                                fontFamily={"Stick"}
                                width={"fit-content"}
                                textAlign={"center"}
                                padding={"2% 1%"}
                            >
                                -H<sub style={{ fontFamily: "inherit" }}>2</sub>
                                O
                            </Typography>
                            <Typography
                                variant="h6"
                                component="p"
                                gutterBottom
                                bgcolor={"black"}
                                width={"fit-content"}
                                padding={"1%"}
                            >
                                Discover the importance of water quality
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ mt: 3 }}
                            >
                                Get Started
                            </Button>
                        </Stack>
                    </Container>
                </Box>
            </ParallaxBannerLayer>
        </ParallaxBanner>
    );
};

export default Banner;
