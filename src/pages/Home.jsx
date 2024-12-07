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
                                Access to Improved Water Source refers to the
                                availability of water for drinking and other
                                essential uses from sources that are more likely
                                to be safe and free from contamination. Improved
                                water sources typically include facilities or
                                infrastructure designed to protect the water
                                from outside contamination, particularly from
                                fecal matter. Examples include piped water
                                systems, boreholes or tube wells, protected dug
                                wells, protected springs, and rainwater
                                collection systems. Ensuring access to improved
                                water sources is a critical component of global
                                public health efforts, as it significantly
                                reduces the risk of waterborne diseases such as
                                cholera, diarrhea, and typhoid. It is also a key
                                target of the United Nations’ Sustainable
                                Development Goals (SDG 6), which aims to provide
                                clean water and sanitation for all by 2030.
                                Despite progress in recent decades, challenges
                                persist in many regions, particularly in rural
                                and low-income urban areas, where infrastructure
                                and maintenance are inadequate. Addressing these
                                challenges requires investment in sustainable
                                water supply systems, education on water
                                management, and policies that ensure equitable
                                access to safe drinking water for all
                                communities.
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
