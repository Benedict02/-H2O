import ColorPalette from "../components/ColorPalette";
import Banner from "../components/Banner";
import Tiles from "../components/Tiles";
import { Box, Container, Stack, Typography, Divider } from "@mui/material";
import CustomPieChart from "../components/CustomPieChart";

const Home = () => {
    const hydrologySrc = "./hydrology.jpg";
    const environmentalSrc = "./environmental.jpg";
    const energySrc = "./Energy.webp";
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
                        padding={"2% 0"}
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

                    <Stack gap={2} padding={"2% 0"}>
                        <Stack gap={4}>
                            <Typography
                                variant={"h3"}
                                component={"h1"}
                                color="dark_ocean"
                                fontFamily={"Quintessential"}
                                textAlign={"start"}
                            >
                                Did You Know?
                            </Typography>
                            <Typography>
                                Having access to improved water sources means
                                having clean water for drinking and other
                                necessities from sources like piped systems,
                                protected wells, or rainwater collection that
                                have been designed to minimize contamination. It
                                is a major objective of the Sustainable
                                Development Goals (SDG 6) of the UN and is
                                essential for reducing waterborne illnesses like
                                cholera. Despite advancements, dependable access
                                is still lacking in many low-income and rural
                                areas, necessitating investments in equitable
                                policy and sustainable infrastructure.
                            </Typography>
                            <Typography
                                variant={"h4"}
                                component={"h1"}
                                color="dark_ocean"
                                fontFamily={"Quintessential"}
                                textAlign={"center"}
                            >
                                Access to improved water source
                            </Typography>
                        </Stack>
                        <Stack>
                            <CustomPieChart />
                        </Stack>
                    </Stack>
                    <Divider sx={{ margin: "1% 0" }} />
                    <Stack gap={2} padding={"2% 0"}>
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
                            <Tiles
                                header="Hydrology"
                                body="The study of water movement and distribution on Earth. Conserving water reduces strain on freshwater resources and helps maintain the natural water cycle."
                                background={`url(${hydrologySrc})`}
                            />
                            <Tiles
                                header="Environmental Impact"
                                body="Excessive water extraction can lead to depletion of rivers, lakes, and groundwater reserves, harming habitats and increasing drought vulnerability."
                                background={`url(${environmentalSrc})`}
                            />
                            <Tiles
                                header="Energy Connection"
                                body="Large amounts of energy are used to pump, heat, and treat water, so conserving water also helps reduce carbon emissions."
                                background={`url(${energySrc})`}
                            />
                        </Stack>
                    </Stack>
                    <Divider sx={{ margin: "1% 0" }} />
                </Container>
            </div>
        </ColorPalette>
    );
};

export default Home;
