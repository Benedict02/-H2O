import { Box, Typography, Container, Stack } from "@mui/material";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const Banner = () => {
    return (
        <ParallaxBanner style={{ height: "100vh", aspectRatio: "2/1" }}>
            <ParallaxBannerLayer image="hokusai_mt_fuji.png" speed={20} />
            <ParallaxBannerLayer image="hokusai_wave_top.png" speed={-15} />
            <ParallaxBannerLayer image="hokusai_wave_right.png" speed={18} />
            <ParallaxBannerLayer translateY={-50}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
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
                                bgcolor={`rgba(0, 0, 0, 0.75)`}
                                fontFamily={"Montserrat !important"}
                                width={"fit-content"}
                                textAlign={"center"}
                                padding={"2% 1%"}
                                sx={{ fontWeight: "700" }}
                            >
                                -H<sub style={{ fontFamily: "inherit" }}>2</sub>
                                O
                            </Typography>
                            <Typography
                                variant="h6"
                                component="p"
                                gutterBottom
                                bgcolor={`rgba(0, 0, 0, 0.75)`}
                                width={"fit-content"}
                                padding={"1%"}
                                fontFamily={"Montserrat !important"}
                            >
                                Discover the importance of water quality
                            </Typography>
                        </Stack>
                    </Container>
                </Box>
            </ParallaxBannerLayer>
            <ParallaxBannerLayer image="hokusai_wave_bottom.png" speed={18} />
            <ParallaxBannerLayer
                image="hokusai_wave_bottom_right.png"
                speed={-10}
            />
        </ParallaxBanner>
    );
};

export default Banner;
