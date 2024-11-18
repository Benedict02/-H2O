import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import {
  ParallaxProvider,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";

const Banner = () => {
  return (
    <ParallaxProvider scrollAxis="vertical">
      <ParallaxBanner style={{ height: "100vh", aspectRatio: "2/1" }}>
        <ParallaxBannerLayer image="hokusai_mt_fuji.png" speed={20} />
        <ParallaxBannerLayer image="hokusai_wave_top.png" speed={15} />
        <ParallaxBannerLayer image="hokusai_wave_right.png" speed={18} />
        <ParallaxBannerLayer image="hokusai_wave_bottom.png" speed={10} />
        <ParallaxBannerLayer image="hokusai_wave_bottom_right.png" speed={10} />
        {/* <ParallaxBannerLayer image="hokusai_mt_fuji.png" speed={10} />
        <ParallaxBannerLayer image="hokusai_wave_top.png" speed={5} />
        <ParallaxBannerLayer image="hokusai_wave_right.png" speed={8} />
        <ParallaxBannerLayer image="hokusai_wave_bottom.png" speed={7} />
        <ParallaxBannerLayer image="hokusai_wave_bottom_right.png" speed={5} /> */}
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
          ></Box>
          <Container maxWidth="md">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              bgcolor={"black"}
            >
              Welcome to Our Platform
            </Typography>
            <Typography
              variant="h6"
              component="p"
              gutterBottom
              bgcolor={"black"}
            >
              Discover amazing features and improve your experience with us.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3 }}
            >
              Get Started
            </Button>
          </Container>
        </ParallaxBannerLayer>
      </ParallaxBanner>

      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundImage: `url(hokusai.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          textAlign: "center",
          padding: 4,

          backgroundAttachment: "fixed",
        }}
      >
        
      </Box> */}
    </ParallaxProvider>
  );
};

export default Banner;
