import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Banner from "../components/RhoneBanner";
import DynamicList from "../components/DynamicList";

const Science = () => {
    const hydrologySrc = "./hydrology.gif"
    const waterCycleSteps = [
        {
            title: 'Evaporation',
            items: ['Water from oceans, rivers, lakes, and other surfaces turns into water vapor due to solar heat.'],
        },
        {
            title: 'Transpiration',
            items: ['Plants release water vapor into the atmosphere through their leaves, contributing to evaporation.'],
        },
        {
            title: 'Condensation',
            items: ['As water vapor rises, it cools and condenses into tiny droplets, forming clouds.'],
        },
        {
            title: 'Precipitation',
            items: ['When droplets in clouds combine and become heavy, they fall to the ground as rain, snow, sleet, or hail.'],
        },
        {
            title: 'Infiltration',
            items: ['Some precipitation infiltrates the soil and replenishes groundwater reserves.'],
        },
        {
            title: 'Runoff',
            items: ['Excess water flows over the surface into rivers, lakes, and oceans, completing the cycle.'],
        },
        {
            title: 'Storage',
            items: ['Water is stored temporarily in glaciers, polar ice caps, underground aquifers, and reservoirs.'],
        },
    ];

    const important = [
        {
            title: 'Water Resource Management',
            items: [
                'Hydrology helps predict water availability and manage supplies for agriculture, industry, and households.',
            ],
        },
        {
            title: 'Flood and Drought Mitigation',
            items: [
                'Understanding hydrological patterns aids in designing flood defenses and preparing for droughts.',
            ],
        },
        {
            title: 'Environmental Conservation',
            items: [
                'Protecting wetlands, rivers, and groundwater systems requires knowledge of hydrological processes.',
            ],
        },
        {
            title: 'Sustainable Development',
            items: [
                'Proper hydrological analysis ensures that development projects like dams, irrigation systems, and urban planning do not disrupt the water cycle.',
            ],
        },
    ]

    const factors = [
        {
            title: 'Climatic Factors',
            items: [
                'Temperature: Higher temperatures increase evaporation and transpiration rates.',
                'Rainfall: The amount, intensity, and duration of precipitation affect runoff and infiltration.',
                'Wind: Strong winds enhance evaporation by dispersing water vapor.',
            ],
        },
        {
            title: 'Geographical Factors',
            items: [
                'Topography: Steep slopes lead to more runoff, while flat areas encourage infiltration.',
                'Vegetation: Dense vegetation reduces runoff by absorbing and storing water.',
                'Soil Type: Sandy soils promote infiltration, while clayey soils lead to higher runoff.',
            ],
        },
        {
            title: 'Human Activities',
            items: [
                'Urbanization: Replacing natural surfaces with concrete increases runoff and reduces groundwater recharge.',
                'Agriculture: Irrigation and deforestation alter natural water movement.',
                'Dams and Reservoirs: Artificial structures change river flow and water storage patterns.',
            ],
        },
        {
            title: 'Geological Factors',
            items: [
                'Aquifers: The type and depth of aquifers determine groundwater storage and flow.',
                'Rock Permeability: Permeable rocks allow water to infiltrate, while impermeable ones cause surface flow.',
            ],
        },
    ]

    return (
        <>
            <Banner />
            <div margin={'2% 0'}>
                <Container fixed>
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
                            "If there is magic on this planet, it is contained in water"
                        </Typography>
                        <Typography
                            variant={"h5"}
                            component={"p"}
                            color="primary"
                            fontFamily={"Roboto"}
                            textAlign={"center"}
                        >
                            — Loren Eiseley
                        </Typography>
                    </Stack>
                    <Divider sx={{ margin: "1% 0" }} />

                    <Stack gap={1} padding={"2% 0"}>
                        <Typography
                            variant={"h3"}
                            component={"h1"}
                            color="dark_ocean"
                            fontFamily={"Quintessential"}
                            textAlign={"start"}
                            gutterBottom
                        >
                            Hydrology
                        </Typography>
                        <Typography textAlign={"justify"}>
                            Hydrology is the scientific study of water, focusing on its occurrence, distribution, movement, and properties on Earth and other planets. 
                            It examines the interaction between water and the environment, including its influence on ecosystems, weather, and human activities. 
                            The hydrological cycle applies to all water on earth, which covers an area of ​​approximately 1.386 billion km³.
                            Hydrology causes liquid water to be found in bodies of water, such as oceans, seas, lakes, rivers, streams, canals, ponds, or puddles. 
                        </Typography>
                    </Stack>
                    <Divider sx={{ margin: "1% 0" }} />
                    
                    <Stack gap={1} padding={"2% 0"}>
                        <Typography
                            variant={"h4"}
                            component={"p"}
                            color="dark_ocean"
                            fontFamily={"Quintessential"}
                            textAlign={"start"}
                            gutterBottom
                        >
                            Water Cycle
                        </Typography>
                        <Typography textAlign={"justify"}>
                            The water cycle is a continuous process in which water moves through different phases and environments. 
                            Here are the primary stages:
                        </Typography>
                        <DynamicList content={waterCycleSteps} />
                        <img src={hydrologySrc} alt="Hydrology GIF" />
                    </Stack>
                    <Divider sx={{ margin: "1% 0" }} />

                    <Stack gap={1} padding={"2% 0"}>
                        <Typography
                            variant={"h4"}
                            component={"p"}
                            color="dark_ocean"
                            fontFamily={"Quintessential"}
                            textAlign={"start"}
                        >
                            Factors Affecting Hydrology
                        </Typography>
                        <Typography textAlign={"justify"}>
                            Several factors influence the hydrological processes, including:
                        </Typography>
                        <DynamicList content={factors} />
                    </Stack>
                    <Divider sx={{ margin: "1% 0" }} />

                    <Stack gap={1} padding={"2% 0"}>
                        <Typography
                            variant={"h4"}
                            component={"p"}
                            color="dark_ocean"
                            fontFamily={"Quintessential"}
                            textAlign={"start"}
                        >
                            The Importance of Hydrology
                        </Typography>
                        <DynamicList content={important} />
                    </Stack>
                    <Divider sx={{ margin: "1% 0" }} />
                </Container>
            </div>
        </>
    );
};

export default Science;
