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

    const humanImpact = [
        {
            title: 'Climate Change',
            items: [
                'Rising temperatures intensify evaporation, altering precipitation patterns and increasing the frequency of extreme events like droughts and floods.',
            ],
        },
        {
            title: 'Deforestation',
            items: [
                'Reduces transpiration, disrupts local rainfall, and increases surface runoff.',
            ],
        },
        {
            title: 'Overuse of Groundwater',
            items: [
                'Excessive extraction depletes aquifers, leading to land subsidence and reduced water availability.',
            ],
        },
        {
            title: 'Pollution',
            items: [
                'Contamination of rivers, lakes, and groundwater impacts ecosystems and water usability.',
            ],
        },
    ];

    const waterRole = [
        {
            title: 'Aquatic Ecosystems',
            items: [
                'Rivers, lakes, oceans, and wetlands are home to diverse plants, animals, and microorganisms.',
                'These ecosystems regulate global temperatures, carbon cycles, and oxygen levels.',
            ],
        },
        {
            title: 'Terrestrial Ecosystems',
            items: [
                'Water availability determines the health of forests, grasslands, and agricultural landscapes.',
                'Plants rely on soil moisture, and animals depend on natural water sources.',
            ],
        },
    ];
    
    const waterMiss = [
        {
            title: 'Water Scarcity and Overuse',
            items: [
                'Depletion of Aquifers: Excessive groundwater extraction lowers water tables, leading to land subsidence and reduced water availability for ecosystems.',
                'River Drying: Overuse for agriculture and industry can reduce river flow, harming aquatic species and dependent ecosystems.',
                'Biodiversity Loss: Water scarcity forces species to migrate or face extinction, disrupting ecological balance.',
            ],
        },
        {
            title: 'Water Pollution',
            items: [
                'Agricultural Runoff: Pesticides, fertilizers, and animal waste pollute water, causing algal blooms and oxygen depletion (eutrophication).',
                'Industrial Waste: Factories discharge toxic chemicals, heavy metals, and oils into water bodies.',
                'Plastic Pollution: Oceans are inundated with plastic debris, which entangles marine species and enters the food chain as microplastics.',
                'Sewage and Urban Runoff: Untreated sewage and pollutants from cities degrade water quality.',
            ],
        },
    ];

    const climate = [
        {
            title: 'Rising Temperatures',
            items: [
                'Increase evaporation rates, altering precipitation patterns and exacerbating droughts and floods.',
            ],
        },
        {
            title: 'Melting Glaciers',
            items: [
                'Glacial melt contributes to rising sea levels, threatening coastal ecosystems and freshwater supplies.',
            ],
        },
        {
            title: 'Extreme Weather Events',
            items: [
                'Climate change intensifies storms, hurricanes, and typhoons, leading to floods that devastate ecosystems and human communities.',
            ],
        },
    ];
    
    const drought = [
        {
            title: 'Vegetation Loss',
            items: [
                'Plants die without water, increasing desertification risks in arid regions.',
            ],
        },
        {
            title: 'Wildlife Migration',
            items: [
                'Animals migrate in search of water, leading to ecosystem imbalances.',
            ],
        },
        {
            title: 'Reduced Carbon Sequestration',
            items: [
                'Loss of vegetation decreases the Earth\'s capacity to absorb atmospheric carbon, worsening climate change.',
            ],
        },
    ];

    const flood = [
        {
            title: 'Loss of Habitat',
            items: [
                'Floodwaters can displace terrestrial and aquatic species, disrupting ecosystems.',
            ],
        },
        {
            title: 'Soil Degradation',
            items: [
                'Flooding washes away fertile topsoil, reducing agricultural productivity.',
            ],
        },
        {
            title: 'Water Contamination',
            items: [
                'Floods often carry pollutants, debris, and pathogens into water bodies.',
            ],
        },
    ];
    
    
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

                    <Stack id="hydrology">
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
                                Human Impact on Hydrology
                            </Typography>
                            <DynamicList content={humanImpact} />
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
                        <Divider sx={{ margin: "1% 0", borderWidth: '.5vh', borderColor: '#000' }} />
                    </Stack>

                    <Stack id="environmental">
                        <Stack gap={1} padding={"2% 0"}>
                            <Typography
                                variant={"h3"}
                                component={"h1"}
                                color="dark_ocean"
                                fontFamily={"Quintessential"}
                                textAlign={"start"}
                                gutterBottom
                            >
                                Environmental Impact
                            </Typography>
                            <Typography textAlign={"justify"}>
                                Water is fundamental to sustaining life, ecosystems, and the planet's overall balance. 
                                However, human activities, pollution, 
                                and mismanagement of water resources have caused significant environmental impacts. 
                                Below is a deeper dive into how water interacts with and influences the environment, 
                                both positively and negatively.
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
                                Water’s Role in Supporting Ecosystems
                            </Typography>
                            <Typography textAlign={"justify"}>
                                Water is the lifeblood of ecosystems, ensuring biodiversity and the survival of countless species.
                            </Typography>
                            <DynamicList content={waterRole} />
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
                                Water Mismanagement
                            </Typography>
                            <DynamicList content={waterMiss} />
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
                                Climate Change
                            </Typography>
                            <Typography textAlign={"justify"}>
                                The relationship between water and climate change is bidirectional: 
                                water is both a driver and a victim of climate shifts.
                            </Typography>
                            <DynamicList content={climate} />
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
                                Drought and Desertification
                            </Typography>
                            <Typography textAlign={"justify"}>
                                Prolonged droughts have severe consequences for the environment:
                            </Typography>
                            <DynamicList content={drought} />
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
                                Flood
                            </Typography>
                            <Typography textAlign={"justify"}>
                                While floods are natural events, 
                                their frequency and intensity have been aggravated by human activities:
                            </Typography>
                            <DynamicList content={flood} />
                        </Stack>
                        <Divider sx={{ margin: "1% 0", borderWidth: '.5vh', borderColor: '#000' }} />
                    </Stack>

                </Container>
            </div>
        </>
    );
};

export default Science;
