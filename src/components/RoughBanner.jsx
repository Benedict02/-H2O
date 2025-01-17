import { Box, Typography, Container, Stack } from "@mui/material";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const Banner = () => {
    return (
        <ParallaxBanner style={{ height: "100vh", aspectRatio: "2/1" }}>
            <ParallaxBannerLayer image="Rough_Water_1.png" speed={-20} />
            <ParallaxBannerLayer image="Rough_Water_2.png" speed={0} />
            <ParallaxBannerLayer image="Rough_Water_4.png" speed={20} />
            <ParallaxBannerLayer image="Rough_Water_3.png" speed={20} />
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
                                Solution
                            </Typography>
                        </Stack>
                    </Container>
                </Box>
            </ParallaxBannerLayer>
        </ParallaxBanner>
    );
};

export default Banner;
