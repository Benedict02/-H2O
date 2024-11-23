import React from "react";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
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
        <ParallaxBannerLayer>
          <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#fff',
                textAlign: 'center',
                padding: 4,
            }}
          >
            <Container maxWidth="md">
              <Stack alignItems={"center"} justifyContent={"center"} direction={"column"} flexWrap={'wrap'}>
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  bgcolor={"black"}
                  fontFamily={'Quintessential'}
                  width={'fit-content'}
                  textAlign={'center'}
                  padding={'2% 1%'}
                >
                  -H<sub style={{fontFamily: 'inherit'}}>2</sub>O
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  gutterBottom
                  bgcolor={"black"}
                  width={'fit-content'}
                  padding={'1%'}
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
    </ParallaxProvider>
  );
};

export default Banner;
