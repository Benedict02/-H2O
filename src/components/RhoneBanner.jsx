import { Box, Typography, Container, Stack } from "@mui/material";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

const Banner = () => {
    return (
        <ParallaxBanner style={{ height: "100vh", aspectRatio: "2/1" }}>
            <ParallaxBannerLayer image="The_Rhone_1.png" speed={20} />
            <ParallaxBannerLayer image="The_Rhone_2.png" speed={-15} />
            <ParallaxBannerLayer image="The_Rhone_3.png" speed={-18} />
            <ParallaxBannerLayer translateY={-50}>
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
                                bgcolor={`rgba(0, 0, 0, 0.75)`}
                                fontFamily={"Stick"}
                                width={"fit-content"}
                                textAlign={"center"}
                                padding={"2% 1%"}
                            >
                                Water Science
                            </Typography>
                            <Typography
                                variant="h6"
                                component="p"
                                gutterBottom
                                bgcolor={`rgba(0, 0, 0, 0.75)`}
                                width={"fit-content"}
                                padding={"1%"}
                            >
                                Science Concept Behind Water
                            </Typography>
                        </Stack>
                    </Container>
                </Box>
            </ParallaxBannerLayer>
            <ParallaxBannerLayer image="The_Rhone_4.png" speed={15.5} />
        </ParallaxBanner>
    );
};

export default Banner;
