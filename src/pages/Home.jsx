import ColorPalette from "../components/ColorPalette";
import Banner from "../components/Banner";
import Tiles from "../components/Tiles";
import { Box, Container, Stack, Typography, Divider } from "@mui/material";
import CustomPieChart from "../components/CustomPieChart";

const Home = () => {
  const hydrologySrc = "./hydrology.jpg";
  return (
    <ColorPalette>
      <Banner />
      <div style={{ margin: "2% 0" }}>
        <Container>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            alignItems={"baseline"}
            justifyContent={"center"}
          >
            <Typography
              variant={"h4"}
              component={"h1"}
              color="dark_ocean"
              fontFamily={"Petit Formal Script"}
              textAlign={"center"}
            >
              "Water is the driving force of all nature."
            </Typography>
            <Typography
              variant={"h5"}
              component={"p"}
              color="primary"
              fontFamily={"Roboto"}
              textAlign={"center"}
            >
              — Leonardo da Vinci
            </Typography>
          </Stack>
          <Divider sx={{ margin: "1% 0" }} />

          <Stack gap={2}>
            <Stack>
              <Typography
                variant={"h3"}
                component={"h1"}
                color="dark_ocean"
                fontFamily={"Quintessential"}
                textAlign={"start"}
              >
                Did You Know?
              </Typography>
            </Stack>
            <Stack>
              <CustomPieChart />
            </Stack>
          </Stack>
          <Divider sx={{ margin: "1% 0" }} />
          <Stack gap={2}>
            <Stack>
              <Typography
                variant={"h3"}
                component={"h1"}
                color="dark_ocean"
                fontFamily={"Quintessential"}
                textAlign={"start"}
              >
                Overview
              </Typography>
            </Stack>
            <Stack
              flexDirection={"row"}
              justifyContent={"center"}
              gap={1}
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              <Tiles header="Hydrology" background={`url(${hydrologySrc})`} />
              <Tiles header="Environmental Impact" />
              <Tiles header="Energy Connection" />
            </Stack>
          </Stack>
          <Divider sx={{ margin: "1% 0" }} />
        </Container>
      </div>
    </ColorPalette>
  );
};

export default Home;
