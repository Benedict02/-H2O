import { Container, Divider, Stack, Typography } from "@mui/material";
import DynamicList from "../components/DynamicList";
import Banner from "../components/RoughBanner";
import Accordion from "../components/Accordion";

const rippleSrc = "./irrigation.jpg";

const Solution = () => {
    const prolog = [
        "Rainfall doesn’t just wash away but is collected and reused.",
        "Water that drains from your sink irrigates your garden.",
        "Irrigation systems learn when and how much water your plants need, preventing overuse.",
    ];

    const fixture = [
        {
            title: "Overview",
            items: [
                "Conventional faucets, showerheads, and toilets often use more water than necessary due to outdated designs or a lack of flow regulation.",
            ],
        },
        {
            title: "Impact",
            items: [
                "Leads to high water wastage in homes, offices, and public facilities.",
                "Increases the demand on municipal water supplies and energy used for water treatment and distribution.",
            ],
        },
        {
            title: "Problem Drivers",
            items: [
                "Lack of awareness about water-efficient technology.",
                "Resistance to replacing older fixtures due to cost or inconvenience.",
            ],
        },
    ];

    const grey = [
        {
            title: "Overview",
            items: [
                "Water used in sinks, washing machines, and showers (greywater) is often discarded as waste instead of being repurposed.",
            ],
        },
        {
            title: "Impact",
            items: [
                "Lost potential to reuse water for non-drinking purposes, such as irrigation or toilet flushing.",
                "Increased load on wastewater treatment plants, leading to higher energy consumption.",
            ],
        },
        {
            title: "Problem Drivers",
            items: [
                "Limited infrastructure for greywater separation and reuse.",
                "Perceived health risks or contamination fears, even though greywater recycling is safe when managed properly.",
            ],
        },
    ];

    const rainHarvest = [
        {
            title: "Overview",
            items: [
                "In many regions, rainwater is allowed to runoff unused, flowing into storm drains or contributing to flooding.",
            ],
        },
        {
            title: "Impact",
            items: [
                "Missed opportunities to supplement water supplies, especially in areas with irregular rainfall.",
                "Decreased groundwater recharge, leading to water table depletion.",
            ],
        },
        {
            title: "Problem Drivers",
            items: [
                "Lack of awareness or investment in rainwater harvesting systems.",
                "Poor urban planning and infrastructure that prioritize rapid runoff over water capture.",
            ],
        },
    ];

    const irrigation = [
        {
            title: "Overview",
            items: [
                "Traditional irrigation systems often apply excessive water to crops, regardless of actual soil moisture or weather conditions.",
            ],
        },
        {
            title: "Impact",
            items: [
                "Wastage of water in agriculture, the largest consumer of freshwater worldwide.",
                "Runoff from overwatering can lead to soil erosion and contamination of nearby water bodies with fertilizers or pesticides.",
            ],
        },
        {
            title: "Problem Drivers",
            items: [
                "High cost of advanced irrigation technologies.",
                "Limited access to data and tools for precision agriculture, especially in developing regions.",
            ],
        },
    ];

    const leak = [
        {
            title: "Overview",
            items: [
                "Leaks in plumbing systems, both at the municipal and household levels, often go undetected for long periods.",
            ],
        },
        {
            title: "Impact",
            items: [
                "Significant water loss (estimated to be 20-30% of urban water globally).",
                "Increased costs for households and utilities due to wasted water.",
                "Environmental strain from over-extraction of water to meet supply demands.",
            ],
        },
        {
            title: "Problem Drivers",
            items: [
                "Aging infrastructure and delayed maintenance in water distribution networks.",
                "Lack of affordable leak detection tools for residential use.",
            ],
        },
    ];

    const drought = [
        {
            title: "Overview",
            items: [
                "Traditional landscaping practices often rely on water-intensive plants and irrigation systems, particularly in arid or semi-arid regions.",
            ],
        },
        {
            title: "Impact",
            items: [
                "Excessive water consumption for maintaining lawns and ornamental plants.",
                "Increased vulnerability to drought conditions due to a lack of adaptable landscaping practices.",
            ],
        },
        {
            title: "Problem Drivers",
            items: [
                "Aesthetic preferences for water-demanding grass and plants.",
                "Lack of awareness about native, drought-resistant plants or xeriscaping techniques.",
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
                        data-aos="zoom-in"
                    >
                        <Typography
                            variant={"h4"}
                            component={"h1"}
                            color="dark_ocean"
                            fontFamily={"Petit Formal Script"}
                            textAlign={"center"}
                        >
                            “Everything is theoretically impossible, until it is
                            done.”
                        </Typography>
                        <Typography
                            variant={"h5"}
                            component={"p"}
                            color="primary"
                            fontFamily={"Roboto"}
                            textAlign={"center"}
                        >
                            — Robert A. Heinlein.
                        </Typography>
                    </Stack>
                </Container>

                <Container fixed>
                    <Divider sx={{ margin: "1% 0" }} />
                </Container>

                <Stack id="Introduction">
                    <Stack gap={1} padding={"2% 0"}>
                        <Container fixed data-aos="fade-up">
                            <Typography
                                variant={"h2"}
                                component={"h1"}
                                color="dark_ocean"
                                fontFamily={"Quintessential"}
                                textAlign={"start"}
                                gutterBottom
                            >
                                How Humanity Manage Water
                            </Typography>
                            <Typography textAlign={"justify"}>
                                Water is the essence of life, covering 71% of
                                the Earth’s surface and flowing through every
                                living organism. Yet, have you ever wondered
                                why, despite its abundance, water scarcity is
                                one of the most pressing global challenges of
                                our time?
                            </Typography>
                            <Typography textAlign={"justify"}>
                                Every drop counts, but how often do we let it
                                slip through our fingers—literally and
                                metaphorically? Consider this: the average
                                household wastes nearly 10,000 gallons of water
                                annually due to leaks alone. Meanwhile, in many
                                parts of the world, communities walk miles daily
                                just to fetch a fraction of that amount.
                            </Typography>
                            <Typography textAlign={"justify"}>
                                Why does this happen? It’s not just about
                                limited resources—it’s about how we manage what
                                we have. Outdated systems, inefficient
                                practices, and a lack of awareness create a
                                perfect storm where water waste becomes routine,
                                and conservation feels like an afterthought.
                            </Typography>
                        </Container>
                    </Stack>

                    <Container fixed>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <Accordion
                        title="
                            What can be done?
                        "
                        p="0% 0"
                    >
                        <Typography textAlign={"justify"}>
                            Solving these issues doesn’t require massive
                            sacrifices—it only demands smarter choices. Imagine
                            a world where:
                        </Typography>
                        <Stack component="ul" spacing={1} paddingLeft={2}>
                            {prolog.map((item, index) => (
                                <Typography
                                    key={index}
                                    component="li"
                                    variant="body1"
                                    color="textSecondary"
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Stack>
                        <Typography textAlign={"justify"}>
                            These aren’t dreams; they’re achievable realities.
                            The question is, are we ready to act? This page is
                            your gateway to understanding the key challenges we
                            face with water usage and the innovative solutions
                            that can help us change the narrative—from wasting
                            to conserving, from scarcity to sustainability.
                        </Typography>
                        <Typography textAlign={"justify"}>
                            Let’s dive deeper into the issues, uncover the
                            facts, and explore the solutions that can lead us
                            toward a water-secure future. Are you ready to take
                            the first step?
                        </Typography>
                    </Accordion>
                </Stack>

                <Container fixed>
                    <Divider
                        sx={{
                            margin: "1% 0",
                            borderWidth: ".5vh",
                            borderColor: "#000",
                        }}
                    />
                </Container>

                <Stack id="Solution">
                    <Container fixed>
                        <Stack gap={1} padding={"2% 0"} data-aos="fade-up">
                            <Typography
                                variant={"h3"}
                                component={"p"}
                                color="dark_ocean"
                                fontFamily={"Quintessential"}
                                textAlign={"start"}
                            >
                                Solution
                            </Typography>
                            <Typography textAlign={"justify"}>
                                Here&apos;re the smart solution that we can have
                                for the better earth&apos;s water distribution
                                and management in the future
                            </Typography>
                        </Stack>
                    </Container>

                    <Container fixed>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <Accordion
                        title="Water-Efficient Fixtures"
                        description="
                    Key Problem: Excessive Water Use in Daily Activities
                    "
                        p="2% 0"
                    >
                        <DynamicList content={fixture} />
                    </Accordion>

                    <Container fixed>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <Stack gap={1} padding={"2% 0"}>
                        <Container fixed data-aos="fade-up">
                            <Typography
                                variant={"h2"}
                                component={"h1"}
                                color="dark_ocean"
                                fontFamily={"Quintessential"}
                                textAlign={"start"}
                                gutterBottom
                            >
                                Greywater Recycling
                            </Typography>
                            <Typography
                                variant="p"
                                component={"b"}
                                textAlign={"justify"}
                            >
                                Key Problem: Wastewater Mismanagement
                            </Typography>
                            <DynamicList content={grey} />
                        </Container>
                    </Stack>

                    <Container fixed>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <Accordion
                        title="Rainwater Harvesting"
                        description="Key Problem: Underutilized Rainwater Resources"
                        p="2% 0"
                        boldDesc={true}
                    >
                        <DynamicList content={rainHarvest} />
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
                            title="Smart Irrigation Systems"
                            description="Key Problem: Inefficient Agricultural Water Use"
                            p="2%"
                            bgcolor="rgba(240, 240, 240, 0.7)"
                        >
                            <DynamicList content={irrigation} />
                        </Accordion>
                    </div>

                    <Container fixed>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <Accordion
                        title="
                        Leak Detection and Repair
                        "
                        description="
                        Key Problem: Unnoticed and Unaddressed Water Leaks
                        "
                        p="2% 0"
                    >
                        <DynamicList content={leak} />
                    </Accordion>

                    <Container fixed>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <Accordion
                        title="
                        Drought-Resistant Landscaping
                        "
                        description="
                        Key Problem: High Water Demand for Landscaping
                        "
                        p="2% 0"
                    >
                        <DynamicList content={drought} />
                    </Accordion>

                    <Container fixed>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>

                    <Accordion
                        title="
                        Conclusion
                        "
                        p="2% 0"
                    >
                        The recurring themes across these issues are water
                        wastage, inefficient use, and inadequate reuse of
                        resources. These problems are compounded by aging
                        infrastructure, lack of awareness, and resistance to
                        adopting new technologies. Tackling these issues with
                        the solutions you&apos;ve outlined will address both
                        individual and systemic inefficiencies in water use,
                        contributing to sustainable living and resource
                        conservation.
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
            </div>
        </>
    );
};

export default Solution;
