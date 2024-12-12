import { Box, Container, Stack, Typography, Divider } from "@mui/material";
import { List, ListItem, ListItemText } from "@mui/material";

import Banner from "../components/HokusaiBanner";
import Tiles from "../components/Tiles";

import CustomBarChart from "../components/CustomBarChart";
import CustomPieChart from "../components/CustomPieChart";

const Home = () => {
    const waterScarcity = [
        {
            label: "Angola",
            value: 33.0,
        },
        {
            label: "CAR",
            value: 37.1,
        },
        {
            label: "Chad",
            value: 35.5,
        },
        {
            label: "DRC",
            value: 40.9,
        },
        {
            label: "Equatorial Guinea",
            value: 32.38,
        },
        {
            label: "Eritrea",
            value: 30.55,
        },
        {
            label: "Madagascar",
            value: 42.0,
        },
        {
            label: "Niger",
            value: 31.5,
        },
        {
            label: "Kenya",
            value: 28.5,
        },
        {
            label: "Papua New Guinea",
            value: 47.4,
        },
    ];
    const worldWater = [
        {
            label: "Oceans",
            value: 1_338_000_000,
        },
        {
            label: "Ice and Snow",
            value: 24_364_000,
        },
        {
            label: "Groundwater",
            value: 23_400_000,
        },
        {
            label: "Lakes",
            value: 176_400,
        },
        {
            label: "Atmosphere",
            value: 12_900,
        },
        {
            label: "Swamps",
            value: 11_470,
        },
        {
            label: "Rivers",
            value: 2_120,
        },
        {
            label: "Biological Water",
            value: 1_120,
        },
    ];

    const freshWater = [
        {
            label: 'Ice and Snow',
            value: 16_957_344,
        },
        {
            label: 'Fresh Groundwater',
            value: 3_169_530,
        },
        {
            label: 'Fresh Water Lakes',
            value: 236.6,
        },
        {
            label: 'Soil Moisture',
            value: 7.755,
        },
        {
            label: 'Atmosphere',
            value: 4.773,
        },
        {
            label: 'Swamps',
            value: 3.7851,
        },
        {
            label: 'Rivers',
            value: 0.12932,
        },
        {
            label: 'Biological Water',
            value: 1.448384,
        },
    ]

    const hydrologySrc = "./hydrology.jpg";
    const environmentalSrc = "./environmental.jpg";
    const energySrc = "./Energy.webp";

    const fixtureSrc = "./water-efficient-fixture.jpg";
    const greywaterSrc = "./greywater.jpg";
    const rainwaterSrc = "./rainwater.jpeg";
    const irigationSrc = "./irigation.png";
    const leakSrc = "./water-leak.jpg";
    const droughtSrc = "./drought.jpg";

    const tips = [
        "Turning off the tap while brushing your teeth can save up to 200 gallons of water per month.",
        "Fixing a leaky faucet can prevent the wastage of up to 3,000 gallons annually.",
        "Opting for water-efficient appliances reduces household water use by up to 50%.",
    ];

    return (
        <>
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
                            <Typography>
                                An improved water source, 
                                as defined by the World Health Organization (WHO), 
                                refers to a drinking water source that 
                                provides adequate and safe water for human consumption. 
                                Examples of improved water sources include 
                                piped water connections, protected wells, boreholes with hand pumps, 
                                packaged or delivered water and rainwater collection systems 
                                with appropriate treatment.
                            </Typography>
                            <Typography
                                variant={"h4"}
                                component={"h1"}
                                color="dark_ocean"
                                fontFamily={"Quintessential"}
                                textAlign={"center"}
                            >
                                Access to Improved Water Source
                            </Typography>
                        </Stack>
                        <Stack>
                            <CustomBarChart 
                                data={waterScarcity} 
                                label={"Population without access to clean water"}
                                xLabel={"Countries"}
                                yLabel={"Population (%)"}
                            />
                        </Stack>
                        <Stack>
                            <Typography variant="caption">
                                Source: World Health Organization (WHO)
                            </Typography>
                            <Typography variant="caption">
                                Last Updated: 2022
                            </Typography>
                        </Stack>
                    </Stack>
                    <Divider sx={{ margin: "1% 0" }} />

                    <Stack gap={3} padding={"2% 0"}>
                        <Typography
                            variant={"h3"}
                            component={"h1"}
                            color="dark_ocean"
                            fontFamily={"Quintessential"}
                            textAlign={"start"}
                        >
                            The Ripple Effect of Individual Actions
                        </Typography>
                        <Stack>
                            <Typography textAlign={'justify'}>
                                Small changes in everyday habits can lead to significant water savings 
                                when adopted on a larger scale. For instance:
                            </Typography>
                            <List component="ol" sx={{ listStyleType: "decimal", pl: 4, pt:0, mt:0 }}>
                                {tips.map((tip, index) => (
                                    <ListItem key={index} sx={{ display: "list-item", p:0 }}>
                                        <ListItemText primary={tip} />
                                    </ListItem>
                                ))}
                            </List>
                            <Typography>
                                By adopting simple practices like these, 
                                individuals contribute to global water conservation efforts, 
                                ensuring sustainable access to clean water for everyone.
                            </Typography>
                        </Stack>
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
                                The Importance of Water Conservation
                            </Typography>
                            <Typography textAlign={'justify'}>
                                Water is a fundamental resource for all living beings, 
                                yet its availability is limited. 
                                Freshwater makes up only <Typography color="primary.main" fontWeight="bold" display={'inline-block'}>2.5% of the Earth's total water</Typography>, 
                                and most of it is locked in glaciers and ice caps, 
                                leaving less than <Typography color="primary.main" fontWeight="bold" display={'inline-block'}>1% accessible for human use</Typography>. 
                                Rapid population growth, climate change, 
                                and pollution are straining this finite resource. 
                                Conserving water not only ensures its availability for future generations 
                                but also helps maintain healthy ecosystems, reduce energy consumption, 
                                and mitigate the effects of droughts and water scarcity.
                            </Typography>
                        </Stack>
                        <Stack>
                            <CustomBarChart 
                                data={worldWater} 
                                label={"Volume of Water"}
                                xLabel={"Sources"}
                                yLabel={"Amount (%)"}
                                log
                            />
                            <Typography variant="caption">
                                Total: 1,386,000,000 km^3
                            </Typography>
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
                                Science Concept
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

                    <Stack gap={2} padding={"2% 0"}>
                        <Stack>
                            <Typography
                                variant={"h3"}
                                component={"h1"}
                                color="dark_ocean"
                                fontFamily={"Quintessential"}
                                textAlign={"start"}
                            >
                                Solution Overview
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
                                header="Water-Efficient Fixtures"
                                background={`url(${fixtureSrc})`}
                            />
                            <Tiles
                                header="Greywater Recycling"
                                background={`url(${greywaterSrc})`}
                            />
                            <Tiles
                                header="Rainwater Harvesting"
                                background={`url(${rainwaterSrc})`}
                            />
                        </Stack>
                        <Stack
                            flexDirection={"row"}
                            justifyContent={"center"}
                            gap={1}
                            alignItems={"center"}
                            flexWrap={"wrap"}
                        >
                            <Tiles
                                header="Smart Irigation Systems"
                                background={`url(${irigationSrc})`}
                            />
                            <Tiles
                                header="Leak Detection and Repair"
                                background={`url(${leakSrc})`}
                            />
                            <Tiles
                                header="Drought-Resistant Landscaping"
                                background={`url(${droughtSrc})`}
                            />
                        </Stack>
                    </Stack>
                    <Divider sx={{ margin: "1% 0" }} />

                </Container>
            </div>
        </>
    );
};

export default Home;
