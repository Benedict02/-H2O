import { Box, Container, Stack, Typography, Divider } from "@mui/material";
import { List, ListItem, ListItemText } from "@mui/material";

import Banner from "../components/HokusaiBanner";
import Tiles from "../components/Tiles";
import CustomBarChart from "../components/CustomBarChart";

const Home = () => {
    const waterScarcity = [
        {
            Country: "Angola",
            Population: 33.0,
        },
        {
            Country: "CAR",
            Population: 37.1,
        },
        {
            Country: "Chad",
            Population: 35.5,
        },
        {
            Country: "DRC",
            Population: 40.9,
        },
        {
            Country: "Equatorial Guinea",
            Population: 32.38,
        },
        {
            Country: "Eritrea",
            Population: 30.55,
        },
        {
            Country: "Madagascar",
            Population: 42.0,
        },
        {
            Country: "Niger",
            Population: 31.5,
        },
        {
            Country: "Kenya",
            Population: 28.5,
        },
        {
            Country: "Papua New Guinea",
            Population: 47.4,
        },
    ];
    const worldWater = [
        {
            Source: "Oceans",
            Volume: 1_338_000_000,
            Fresh: 16_056_000,
        },
        {
            Source: "Ice and Snow",
            Volume: 24_364_000,
            Fresh: 16_957_344,
        },
        {
            Source: "Groundwater",
            Volume: 23_400_000,
            Fresh: 3_169_530 + 7.755,
        },
        {
            Source: "Lakes",
            Volume: 176_400,
            Fresh: 236.6,
        },
        {
            Source: "Atmosphere",
            Volume: 12_900,
            Fresh: 4.773,
        },
        {
            Source: "Swamps",
            Volume: 11_470,
            Fresh: 3.7851,
        },
        {
            Source: "Rivers",
            Volume: 2_120,
            Fresh: 0.12932,
        },
        {
            Source: "Biological Water",
            Volume: 1_120,
            Fresh: 0.03584,
        },
    ];

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
                                x={"Country"}
                                y={["Population"]}
                                unit={"%"}
                            />
                        </Stack>
                        <Stack>
                            <Typography variant="caption">
                                Source: World Health Organization (WHO)
                            </Typography>
                            <Typography variant="caption">
                                Last Updated: 2022
                            </Typography>
                            <Typography variant="caption">
                                Scale: Linear
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
                                Freshwater makes up only around 
                                <Typography component={'b'} color="primary.main" fontWeight="bold" display={'inline-block'}>2.5% of the Earth's total water</Typography>, 
                                and most of it is locked in glaciers and ice caps, 
                                leaving less than <Typography component={'b'} color="primary.main" fontWeight="bold" display={'inline-block'}>1% accessible for human use</Typography>. 
                                Rapid population growth, climate change, 
                                and pollution are straining this finite resource. 
                                Conserving water not only ensures its availability for future generations 
                                but also helps maintain healthy ecosystems, reduce energy consumption, 
                                and mitigate the effects of droughts and water scarcity.
                            </Typography>
                        </Stack>
                        <Stack>
                            <Typography
                                variant={"h4"}
                                component={"h1"}
                                color="dark_ocean"
                                fontFamily={"Quintessential"}
                                textAlign={"center"}
                            >
                                Water Distribution
                            </Typography>
                            <CustomBarChart 
                                data={worldWater} 
                                x={'Source'} 
                                y={["Volume", "Fresh"]} 
                                unit={"km³"} 
                                log
                            />
                            <Typography variant="caption">
                                Total Water: 1,386,000,000 km³
                            </Typography>
                            <Typography variant="caption">
                                Total Fresh Water: 36,183,127 km³
                            </Typography>
                            <Typography variant="caption">
                                Source: United States Geological Survey
                            </Typography>
                            <Typography variant="caption">
                                Scale: Logarithmic
                            </Typography>
                        </Stack>
                    </Stack>
                    <Divider sx={{ margin: "1% 0" }} />

                    <Stack gap={2} padding={'2% 0'}>
                        <Typography
                            variant={"h3"}
                            component={"h1"}
                            color="dark_ocean"
                            fontFamily={"Quintessential"}
                            textAlign={"start"}
                        >
                            Water supply and sanitation in Indonesia
                        </Typography>
                        <Typography textAlign={'justify'} variant={'p'}>
                            Water supply and sanitation in Indonesia is characterized by poor levels of access and service quality. More than 16 million people lack access to an at least basic water source and almost 33 million of the country's 275 million population has no access to at least basic sanitation.[4] Only about 2% of people have access to sewerage in urban areas; this is one of the lowest in the world among middle-income countries. Water pollution is widespread on Bali and Java. Women in Jakarta report spending US$11 per month on boiling water, implying a significant burden for the poor.
                        </Typography>
                        <Typography textAlign={'justify'} variant={'p'}>
                            The estimated level of public investment of only US$2 per capita a year in 2005 was insufficient to expand services significantly and to properly maintain assets. Furthermore, policy responsibilities are fragmented between different Ministries. Since decentralization was introduced in Indonesia in 2001 local governments (districts) have gained responsibility for water supply and sanitation. However, this has so far not translated into an improvement of access or service quality, mainly because devolution of responsibilities has not been followed by adequate fund channeling mechanisms to carry out this responsibility. Local utilities remain weak.
                        </Typography>
                        <Typography textAlign={'justify'} variant={'p'}>
                            The provision of clean drinking water has unfortunately not yet been taken up as a development priority, particularly at the provincial government level.[5] The lack of access to clean water and sanitation remains a serious challenge, especially in slums and rural areas. This is a major concern because lack of clean water reduces the level of hygiene in the communities and it also raises the probability of people contracting skin diseases or other waterborne diseases. A failure to aggressively promote behaviour change, particularly among low-income families and slum dwellers, has further worsened the health impact of Indonesia's water and sanitation situation.[5]
                        </Typography>
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
                                Solution 
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
