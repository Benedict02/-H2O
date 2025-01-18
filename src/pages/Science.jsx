import { Container, Divider, Stack, Typography } from "@mui/material";
import Banner from "../components/RhoneBanner";
import DynamicList from "../components/DynamicList";
import Accordion from "../components/Accordion";

const rippleSrc = "./cloud.jpg";

const Science = () => {
    const hydrologySrc = "./hydrology.gif";

    const waterCycleSteps = [
        {
            title: "Evaporation",
            items: [
                "Water from oceans, rivers, lakes, and other surfaces turns into water vapor due to solar heat.",
            ],
        },
        {
            title: "Transpiration",
            items: [
                "Plants release water vapor into the atmosphere through their leaves, contributing to evaporation.",
            ],
        },
        {
            title: "Condensation",
            items: [
                "As water vapor rises, it cools and condenses into tiny droplets, forming clouds.",
            ],
        },
        {
            title: "Precipitation",
            items: [
                "When droplets in clouds combine and become heavy, they fall to the ground as rain, snow, sleet, or hail.",
            ],
        },
        {
            title: "Infiltration",
            items: [
                "Some precipitation infiltrates the soil and replenishes groundwater reserves.",
            ],
        },
        {
            title: "Runoff",
            items: [
                "Excess water flows over the surface into rivers, lakes, and oceans, completing the cycle.",
            ],
        },
        {
            title: "Storage",
            items: [
                "Water is stored temporarily in glaciers, polar ice caps, underground aquifers, and reservoirs.",
            ],
        },
    ];

    const important = [
        {
            title: "Water Resource Management",
            items: [
                "Hydrology helps predict water availability and manage supplies for agriculture, industry, and households.",
            ],
        },
        {
            title: "Flood and Drought Mitigation",
            items: [
                "Understanding hydrological patterns aids in designing flood defenses and preparing for droughts.",
            ],
        },
        {
            title: "Environmental Conservation",
            items: [
                "Protecting wetlands, rivers, and groundwater systems requires knowledge of hydrological processes.",
            ],
        },
        {
            title: "Sustainable Development",
            items: [
                "Proper hydrological analysis ensures that development projects like dams, irrigation systems, and urban planning do not disrupt the water cycle.",
            ],
        },
    ];

    const factors = [
        {
            title: "Climatic Factors",
            items: [
                "Temperature: Higher temperatures increase evaporation and transpiration rates.",
                "Rainfall: The amount, intensity, and duration of precipitation affect runoff and infiltration.",
                "Wind: Strong winds enhance evaporation by dispersing water vapor.",
            ],
        },
        {
            title: "Geographical Factors",
            items: [
                "Topography: Steep slopes lead to more runoff, while flat areas encourage infiltration.",
                "Vegetation: Dense vegetation reduces runoff by absorbing and storing water.",
                "Soil Type: Sandy soils promote infiltration, while clayey soils lead to higher runoff.",
            ],
        },
        {
            title: "Human Activities",
            items: [
                "Urbanization: Replacing natural surfaces with concrete increases runoff and reduces groundwater recharge.",
                "Agriculture: Irrigation and deforestation alter natural water movement.",
                "Dams and Reservoirs: Artificial structures change river flow and water storage patterns.",
            ],
        },
        {
            title: "Geological Factors",
            items: [
                "Aquifers: The type and depth of aquifers determine groundwater storage and flow.",
                "Rock Permeability: Permeable rocks allow water to infiltrate, while impermeable ones cause surface flow.",
            ],
        },
    ];

    const humanImpact = [
        {
            title: "Climate Change",
            items: [
                "Rising temperatures intensify evaporation, altering precipitation patterns and increasing the frequency of extreme events like droughts and floods.",
            ],
        },
        {
            title: "Deforestation",
            items: [
                "Reduces transpiration, disrupts local rainfall, and increases surface runoff.",
            ],
        },
        {
            title: "Overuse of Groundwater",
            items: [
                "Excessive extraction depletes aquifers, leading to land subsidence and reduced water availability.",
            ],
        },
        {
            title: "Pollution",
            items: [
                "Contamination of rivers, lakes, and groundwater impacts ecosystems and water usability.",
            ],
        },
    ];

    const waterRole = [
        {
            title: "Aquatic Ecosystems",
            items: [
                "Rivers, lakes, oceans, and wetlands are home to diverse plants, animals, and microorganisms.",
                "These ecosystems regulate global temperatures, carbon cycles, and oxygen levels.",
            ],
        },
        {
            title: "Terrestrial Ecosystems",
            items: [
                "Water availability determines the health of forests, grasslands, and agricultural landscapes.",
                "Plants rely on soil moisture, and animals depend on natural water sources.",
            ],
        },
    ];

    const waterMiss = [
        {
            title: "Water Scarcity and Overuse",
            items: [
                "Depletion of Aquifers: Excessive groundwater extraction lowers water tables, leading to land subsidence and reduced water availability for ecosystems.",
                "River Drying: Overuse for agriculture and industry can reduce river flow, harming aquatic species and dependent ecosystems.",
                "Biodiversity Loss: Water scarcity forces species to migrate or face extinction, disrupting ecological balance.",
            ],
        },
        {
            title: "Water Pollution",
            items: [
                "Agricultural Runoff: Pesticides, fertilizers, and animal waste pollute water, causing algal blooms and oxygen depletion (eutrophication).",
                "Industrial Waste: Factories discharge toxic chemicals, heavy metals, and oils into water bodies.",
                "Plastic Pollution: Oceans are inundated with plastic debris, which entangles marine species and enters the food chain as microplastics.",
                "Sewage and Urban Runoff: Untreated sewage and pollutants from cities degrade water quality.",
            ],
        },
    ];

    const climate = [
        {
            title: "Rising Temperatures",
            items: [
                "Increase evaporation rates, altering precipitation patterns and exacerbating droughts and floods.",
            ],
        },
        {
            title: "Melting Glaciers",
            items: [
                "Glacial melt contributes to rising sea levels, threatening coastal ecosystems and freshwater supplies.",
            ],
        },
        {
            title: "Extreme Weather Events",
            items: [
                "Climate change intensifies storms, hurricanes, and typhoons, leading to floods that devastate ecosystems and human communities.",
            ],
        },
    ];

    const drought = [
        {
            title: "Vegetation Loss",
            items: [
                "Plants die without water, increasing desertification risks in arid regions.",
            ],
        },
        {
            title: "Wildlife Migration",
            items: [
                "Animals migrate in search of water, leading to ecosystem imbalances.",
            ],
        },
        {
            title: "Reduced Carbon Sequestration",
            items: [
                "Loss of vegetation decreases the Earth's capacity to absorb atmospheric carbon, worsening climate change.",
            ],
        },
    ];

    const flood = [
        {
            title: "Loss of Habitat",
            items: [
                "Floodwaters can displace terrestrial and aquatic species, disrupting ecosystems.",
            ],
        },
        {
            title: "Soil Degradation",
            items: [
                "Flooding washes away fertile topsoil, reducing agricultural productivity.",
            ],
        },
        {
            title: "Water Contamination",
            items: [
                "Floods often carry pollutants, debris, and pathogens into water bodies.",
            ],
        },
    ];

    const waterToEnergy = [
        {
            title: "Hydropower",
            items: [
                "Hydropower is the most direct and significant form of water-driven energy. It harnesses the energy of flowing or falling water to generate electricity. Large reservoirs and dams store water, and as it flows through turbines, it generates power.",
                "Environmental Considerations: While hydropower is a renewable energy source, it can significantly impact ecosystems. The creation of reservoirs can flood large areas, disrupt aquatic habitats, and affect fish migration patterns.",
            ],
        },
        {
            title: "Thermal Power Plants",
            items: [
                "Cooling: Thermal power plants (coal, gas, and nuclear) rely heavily on water for cooling. Large amounts of water are required to absorb and dissipate the heat produced during energy generation. This often leads to the thermal pollution of local water bodies.",
                "Water Loss: In some plants, water is evaporated in cooling towers, resulting in significant water consumption and potentially affecting nearby ecosystems if the water source is not replenished.",
            ],
        },
        {
            title: "Nuclear Power",
            items: [
                "Cooling Requirements: Like thermal plants, nuclear reactors also require large amounts of water to cool the reactors and maintain safe operating temperatures. Nuclear power stations often draw water from nearby lakes, rivers, or oceans.",
                "Safety Concerns: In extreme cases, like a reactor malfunction, the cooling process can fail, potentially leading to catastrophic events.",
            ],
        },
    ];

    const energyToWater = [
        {
            title: "Water Extraction and Treatment",
            items: [
                "Pumping Water: To extract water from natural sources (rivers, lakes, or groundwater), energy is required to pump water. For deep groundwater sources, energy consumption can be significant.",
                "Water Treatment: Modern water treatment plants, which purify water for drinking and industrial use, rely on electricity to operate filtration systems, pumps, and chemical treatments. The energy required can be substantial, particularly in large urban areas.",
            ],
        },
        {
            title: "Water Distribution",
            items: [
                "Pipelines and Storage: Energy is needed to push water through pipelines to homes, farms, and industries. High-energy costs are often associated with distributing water to remote or elevated areas.",
                "Desalination: One of the most energy-intensive methods of water treatment is desalination, where saltwater is converted into freshwater. This process requires large amounts of energy, mainly electricity, and is often powered by fossil fuels or renewable sources.",
            ],
        },
        {
            title: "Irrigation Systems",
            items: [
                "Pumping and Delivery: In agriculture, water is essential for crop growth. Energy is used to pump water from rivers or groundwater into irrigation systems. In regions that rely on irrigated agriculture, this can result in high energy consumption.",
                "Energy-Water Tradeoff: The energy required for irrigation systems directly affects the cost and sustainability of food production, especially in areas with limited water resources.",
            ],
        },
    ];

    const waterNexus = [
        {
            title: "Water Scarcity and Energy Production",
            items: [
                "Limited Water Availability: In regions where water resources are limited, the demand for water-intensive energy production (such as thermoelectric and nuclear plants) becomes problematic. This is particularly concerning in arid and semi-arid regions, where the availability of water for cooling power plants may decrease, leading to energy shortages.",
                "Increased Competition: As water becomes scarcer, its competition between energy production, agriculture, and drinking water can create conflicts, particularly in densely populated or drought-prone areas.",
            ],
        },
        {
            title: "Energy Consumption in Water Scarcity Areas",
            items: [
                "In water-scarce regions, alternative water sources like desalination plants are often the solution. However, the high energy demands of desalination (which can consume large amounts of electricity or fossil fuels) can make this a costly and unsustainable solution if not paired with clean or renewable energy sources.",
            ],
        },
        {
            title: "Climate Change and Resource Availability",
            items: [
                "Changing Precipitation Patterns: Climate change is expected to cause shifts in rainfall patterns, increasing the frequency of floods and droughts. These changes can impact water availability for hydropower generation, which may reduce energy production or cause excessive flooding, impacting energy infrastructure.",
                "Water Stress: Increased water stress due to rising temperatures and reduced precipitation exacerbates the challenges of energy production in water-scarce areas.",
            ],
        },
    ];

    return (
        <>
            <Banner />
            <div style={{ margin: "2% 0" }}>
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
                            “If there is magic on this planet, it is contained
                            in water”
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
                </Container>

                <Stack id="hydrology">
                    <Container fixed data-aos="fade-up">
                        <Stack gap={1} padding={"2% 0"}>
                            <Stack direction="row">
                                <Typography
                                    variant={"h2"}
                                    component={"h1"}
                                    color="dark_ocean"
                                    fontFamily={"Quintessential"}
                                    textAlign={"start"}
                                >
                                    Hydrology
                                </Typography>
                            </Stack>
                        </Stack>
                        <Typography textAlign={"justify"}>
                            Hydrology is the scientific study of water, focusing
                            on its occurrence, distribution, movement, and
                            properties on Earth and other planets. It examines
                            the interaction between water and the environment,
                            including its influence on ecosystems, weather, and
                            human activities. The hydrological cycle applies to
                            all water on earth, which covers an area of
                            approximately 1.386 billion km³. Hydrology causes
                            liquid water to be found in bodies of water, such as
                            oceans, seas, lakes, rivers, streams, canals, ponds,
                            or puddles.
                        </Typography>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <Accordion
                        title="Water Cycle"
                        description="The water cycle is a continuous process in which
                                water moves through different phases and
                                environments. Here are the primary stages:"
                        p="2% 0"
                    >
                        <DynamicList content={waterCycleSteps} />
                        <img src={hydrologySrc} alt="Hydrology GIF" />
                    </Accordion>

                    <Container fixed>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <div
                        style={{
                            background: `url(${rippleSrc})`,
                            backgroundAttachment: "fixed",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            padding: "5% 0",
                            margin: "2% 0",
                        }}
                    >
                        <Accordion
                            title="Factors Affecting Hydrology"
                            description="Several factors influence the hydrological
                                    processes, including:"
                            p="2%"
                            bgcolor="rgba(240, 240, 240, 0.7)"
                        >
                            <DynamicList content={factors} />
                        </Accordion>
                    </div>

                    <Container fixed>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <Accordion title="Human Impact on Hydrology" p="2% 0">
                        <DynamicList content={humanImpact} />
                    </Accordion>

                    <Container fixed>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <Accordion title="The Importance of Hydrology" p="2% 0">
                        <DynamicList content={important} />
                    </Accordion>

                    <Container fixed>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <Accordion title="Conclusion" p="2% 0">
                        <Typography textAlign={"justify"}>
                            Hydrology is fundamental to understanding how water
                            supports life and ecosystems. Its study provides
                            insights into managing water resources, mitigating
                            disasters, and addressing global challenges like
                            water scarcity and climate change. By appreciating
                            the complexity of the water cycle and the factors
                            that affect it, we can work toward a more
                            sustainable and water-secure future.
                        </Typography>
                    </Accordion>

                    <Container fixed>
                        <Divider
                            sx={{
                                margin: "1% 0",
                                borderWidth: ".5vh",
                                borderColor: "#000",
                            }}
                        />
                    </Container>
                </Stack>

                <Stack id="environmental">
                    <Container fixed data-aos="fade-up">
                        <Stack gap={1} padding={"2% 0"}>
                            <Stack direction="row">
                                <Typography
                                    variant={"h2"}
                                    component={"h1"}
                                    color="dark_ocean"
                                    fontFamily={"Quintessential"}
                                    textAlign={"start"}
                                >
                                    Environmental Impact
                                </Typography>
                            </Stack>
                        </Stack>
                        <Typography textAlign={"justify"}>
                            Water is fundamental to sustaining life, ecosystems,
                            and the planet&apos;s overall balance. However,
                            human activities, pollution, and mismanagement of
                            water resources have caused significant
                            environmental impacts. Below is a deeper dive into
                            how water interacts with and influences the
                            environment, both positively and negatively.
                        </Typography>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <Accordion
                        title="Water's Role in Supporting Ecosystems"
                        description="Water is the lifeblood of ecosystems, ensuring
                                biodiversity and the survival of countless
                                species."
                        p="2% 0"
                    >
                        <DynamicList content={waterRole} />
                    </Accordion>

                    <Container fixed>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <Accordion
                        title="Water Mismanagement"
                        description="Water is the lifeblood of ecosystems, ensuring
                                biodiversity and the survival of countless
                                species."
                        p="2% 0"
                    >
                        <DynamicList content={waterMiss} />
                    </Accordion>

                    <Container fixed>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <Accordion
                        title="Climate Change"
                        description="The relationship between water and climate
                                change is bidirectional: water is both a driver
                                and a victim of climate shifts."
                        p="2% 0"
                    >
                        <DynamicList content={climate} />
                    </Accordion>

                    <Container fixed>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <Accordion
                        title="Drought and Desertification"
                        description="Prolonged droughts have severe consequences for
                                the environment:"
                        p="2% 0"
                    >
                        <DynamicList content={drought} />
                    </Accordion>

                    <Container fixed>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <Accordion
                        title="Flood"
                        description=" While floods are natural events, their frequency
                                and intensity have been aggravated by human
                                activities:"
                        p="2% 0"
                    >
                        <DynamicList content={flood} />
                    </Accordion>

                    <Container fixed>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <Accordion title="Conclusion" p="2% 0">
                        <Typography textAlign={"justify"}>
                            Water’s impact on the environment is profound,
                            influencing everything from local ecosystems to
                            global climate patterns. Mismanagement and pollution
                            disrupt this delicate balance, causing cascading
                            effects on biodiversity, food security, and human
                            health. By adopting sustainable practices and
                            acknowledging the interconnectedness of water and
                            the environment, we can ensure a thriving planet for
                            future generations.
                        </Typography>
                    </Accordion>

                    <Container fixed>
                        <Divider
                            sx={{
                                margin: "1% 0",
                                borderWidth: ".5vh",
                                borderColor: "#000",
                            }}
                        />
                    </Container>
                </Stack>

                <Stack id="energy">
                    <Container fixed data-aos="fade-up">
                        <Stack gap={1} padding={"2% 0"}>
                            <Stack direction="row">
                                <Typography
                                    variant={"h2"}
                                    component={"h1"}
                                    color="dark_ocean"
                                    fontFamily={"Quintessential"}
                                    textAlign={"start"}
                                >
                                    Energy
                                </Typography>
                            </Stack>
                        </Stack>
                        <Typography textAlign={"justify"}>
                            Water and energy are deeply interconnected resources
                            that are critical to the functioning of societies
                            and ecosystems worldwide. The relationship between
                            the two is complex and multi-faceted, influencing
                            everything from power generation to water treatment,
                            irrigation, and the overall sustainability of
                            resources. Below is an exploration of how water and
                            energy are linked and the challenges and
                            opportunities that arise from their interaction.
                        </Typography>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <Accordion
                        title="The Role of Water in Energy Production"
                        description="Water plays an essential role in energy
                                production across various sectors, particularly
                                in hydropower generation, fossil fuel-based
                                energy production, and nuclear energy."
                        p="2% 0"
                    >
                        <DynamicList content={waterToEnergy} />
                    </Accordion>

                    <Accordion
                        title="The Role of Energy in Water Management"
                        description="Energy is critical for all stages of the water
                                cycle, from the extraction and treatment of
                                water to its distribution and use. This creates
                                a water-energy nexus, where the availability and
                                cost of one resource impact the other."
                        p="2% 0"
                    >
                        <DynamicList content={energyToWater} />
                    </Accordion>

                    <Container fixed>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <Accordion
                        title="The Water-Energy Nexus"
                        description="The interdependence of water and energy presents
                                several challenges for sustainable development
                                and climate resilience. Below are some key
                                issues arising from this relationship:"
                        p="2% 0"
                    >
                        <DynamicList content={waterNexus} />
                    </Accordion>

                    <Container fixed>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <Accordion
                        title="
                        Future of Water-Nergy Nexus
                    "
                        p="2% 0"
                    >
                        <Typography textAlign={"justify"}>
                            In the future, balancing the water-energy nexus will
                            require a combination of innovation, policy, and
                            education to ensure that both water and energy
                            resources are managed in a sustainable way.
                            Solutions like integrating renewable energy sources,
                            advancing desalination technologies, water
                            recycling, and coordinating resource management will
                            become increasingly essential in a world facing both
                            water scarcity and energy challenges.
                        </Typography>
                        <Typography textAlign={"justify"}>
                            By understanding and addressing the links between
                            water and energy, societies can pave the way toward
                            more sustainable, resilient systems that support
                            both environmental health and human development.
                        </Typography>
                    </Accordion>
                </Stack>
            </div>
        </>
    );
};

export default Science;
