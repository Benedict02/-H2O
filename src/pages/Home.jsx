import { Container, Stack, Typography, Divider } from "@mui/material";
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
    const rippleSrc = "./weathering.jpg";
    const flagSrc = "./flag.png";
    const rainWindowSrc = "./rain_window.jpg";

    const tips = [
        "Turning off the tap while brushing your teeth can save up to 200 gallons of water per month.",
        "Fixing a leaky faucet can prevent the wastage of up to 3,000 gallons annually.",
        "Opting for water-efficient appliances reduces household water use by up to 50%.",
    ];

    return (
        <>
            <Banner />
            <div
                style={{
                    padding: "2% 0",
                }}
            >
                <Container>
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
                            fontFamily={"Public Sans"}
                            textAlign={"center"}
                        >
                            &quot;Water is the driving force of all
                            nature.&quot;
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
                </Container>

                <Container>
                    <Stack gap={2} padding={"2% 0"}>
                        <Stack gap={4}>
                            <Typography
                                variant={"h3"}
                                component={"h1"}
                                color="dark_ocean"
                                fontFamily={"Montserrat !important"}
                                fontWeight={500}
                                textAlign={"start"}
                                data-aos="fade-up"
                            >
                                Did You Know?
                            </Typography>
                            <Stack direction={{xs:"column", sm:"row"}} gap={3}>
                                <Stack
                                    sx={{ p: 2, bgcolor: "#f0f0f0" }}
                                >
                                    <Typography>
                                        Having access to improved water
                                        sources means{" "}
                                        <Typography
                                            component={"mark"}
                                            sx={{
                                                backgroundColor:
                                                    "secondary.main",
                                            }}
                                        >
                                            having clean water for drinking
                                            and other necessities from
                                            sources like piped systems,
                                            protected wells, or rainwater
                                            collection that have been
                                            designed to minimize
                                            contamination.
                                        </Typography>{" "}
                                        It is a major objective of the
                                        Sustainable Development Goals (SDG
                                        6) of the UN and is essential for
                                        reducing waterborne illnesses like
                                        cholera. Despite advancements,
                                        dependable access is still lacking
                                        in many low-income and rural areas,
                                        necessitating investments in
                                        equitable policy and sustainable
                                        infrastructure.
                                    </Typography>
                                </Stack>
                                <Stack
                                    sx={{ backgroundColor: "#f0f0f0", p: 2 }}
                                >
                                    <Typography>
                                        An improved water source, as defined by
                                        the World Health Organization (WHO),
                                        refers to a{" "}
                                        <Typography
                                            component={"mark"}
                                            sx={{
                                                backgroundColor:
                                                    "secondary.main",
                                            }}
                                        >
                                            drinking water source that provides
                                            adequate and safe water for human
                                            consumption.
                                        </Typography>{" "}
                                        Examples of improved water sources
                                        include piped water connections,
                                        protected wells, boreholes with hand
                                        pumps, packaged or delivered water and
                                        rainwater collection systems with
                                        appropriate treatment.
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Typography
                                variant={"h4"}
                                component={"h1"}
                                color="dark_ocean"
                                fontFamily={"Montserrat !important"}
                                fontWeight={500}
                                textAlign={"center"}
                                data-aos="fade-up"
                            >
                                Access to Improved Water Source
                            </Typography>
                        </Stack>
                        <Stack data-aos="fade-up">
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
                </Container>
                <div
                    style={{
                        background: `url(${rippleSrc})`,
                        backgroundAttachment: "fixed",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        padding: "5% 0",
                    }}
                >
                    <Container>
                        <Stack
                            gap={3}
                            padding={"2% 3%"}
                            sx={{
                                backgroundColor:
                                    "rgba(240, 240, 240, 0.6) !important",
                            }}
                            data-aos="fade-up"
                        >
                            <Typography
                                variant={"h3"}
                                component={"h1"}
                                color="dark_ocean"
                                fontFamily={"Montserrat !important"}
                                fontWeight={500}
                                textAlign={"start"}
                            >
                                The Ripple Effect of Individual Actions
                            </Typography>
                            <Stack>
                                <Typography textAlign={"justify"}>
                                    <Typography
                                        component={"mark"}
                                        sx={{
                                            backgroundColor: "secondary.main",
                                        }}
                                    >
                                        Small changes in everyday habits
                                    </Typography>{" "}
                                    can lead to significant water savings when
                                    adopted on a larger scale. For instance:
                                </Typography>
                                <List
                                    component="ol"
                                    sx={{
                                        listStyleType: "decimal",
                                        pl: 4,
                                        pt: 0,
                                        mt: 0,
                                    }}
                                >
                                    {tips.map((tip, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{ display: "list-item", p: 0 }}
                                        >
                                            <ListItemText primary={tip} />
                                        </ListItem>
                                    ))}
                                </List>
                                <Typography>
                                    By adopting simple practices like these,
                                    individuals contribute to global water
                                    conservation efforts, ensuring sustainable
                                    access to clean water for everyone.
                                </Typography>
                            </Stack>
                        </Stack>
                        <Divider />
                    </Container>
                </div>
                <Container>
                    <Stack gap={2} padding={"2% 0"}>
                        <Stack gap={4} data-aos="fade-up">
                            <Typography
                                variant={"h3"}
                                component={"h1"}
                                color="dark_ocean"
                                fontFamily={"Montserrat !important"}
                                fontWeight={500}
                                textAlign={"start"}
                            >
                                The Importance of Water Conservation
                            </Typography>
                            <Typography textAlign={"justify"}>
                                Water is a fundamental resource for all living
                                beings, yet its availability is limited.
                                Freshwater makes up only around{" "}
                                <Typography
                                    component={"b"}
                                    color="primary.main"
                                    fontWeight="bold"
                                    display={"inline-block"}
                                >
                                    2.5% of the Earth&apos;s total water
                                </Typography>
                                , and most of it is locked in glaciers and ice
                                caps, leaving less than{" "}
                                <Typography
                                    component={"b"}
                                    color="primary.main"
                                    fontWeight="bold"
                                    display={"inline-block"}
                                >
                                    1% accessible for human use
                                </Typography>
                                . Rapid population growth, climate change, and
                                pollution are straining this finite resource.
                                Conserving water not only ensures its
                                availability for future generations but also
                                helps maintain healthy ecosystems, reduce energy
                                consumption, and mitigate the effects of
                                droughts and water scarcity.
                            </Typography>
                        </Stack>
                        <Stack data-aos="fade-up">
                            <Typography
                                variant={"h4"}
                                component={"h1"}
                                color="dark_ocean"
                                fontFamily={"Montserrat !important"}
                                fontWeight={500}
                                textAlign={"center"}
                            >
                                Water Distribution
                            </Typography>
                            <CustomBarChart
                                data={worldWater}
                                x={"Source"}
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
                </Container>
                <div
                    style={{
                        background: `url(${rainWindowSrc})`,
                        backgroundAttachment: "fixed",
                        backgroundSize: "cover",
                        padding: "5% 0",
                    }}
                >
                    <Container>
                        <Stack
                            gap={2}
                            padding={"2% 3%"}
                            sx={{
                                backgroundColor:
                                    "rgba(19, 62, 135, 0.925) !important",
                            }}
                            data-aos="fade-up"
                        >
                            <Typography
                                variant={"h3"}
                                component={"h1"}
                                color="rgba(240, 240, 240)"
                                fontFamily={"Montserrat !important"}
                                fontWeight={500}
                                textAlign={"start"}
                            >
                                Indonesian Water Sanitation
                            </Typography>

                            <table
                                style={{
                                    borderCollapse: "collapse",
                                    width: "80%",
                                    margin: "auto",
                                    backgroundColor: "white",
                                }}
                                border="black"
                            >
                                <thead>
                                    <tr>
                                        <td
                                            colSpan="2"
                                            style={{
                                                textAlign: "center",
                                                padding: "0.2em",
                                            }}
                                        >
                                            <img
                                                src={flagSrc}
                                                alt=""
                                                width="100"
                                                style={{
                                                    border: "1px solid black",
                                                }}
                                            />
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th colSpan="2">Data</th>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "0.2em" }}>
                                            Access to an at least basic water
                                            source
                                        </td>
                                        <td style={{ padding: "0.2em" }}>
                                            94% (2022)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "0.2em" }}>
                                            Access to at least basic sanitation
                                        </td>
                                        <td style={{ padding: "0.2em" }}>
                                            88% (2022)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "0.2em" }}>
                                            Average urban water use
                                            (L/person/day)
                                        </td>
                                        <td style={{ padding: "0.2em" }}>
                                            130 (2004)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "0.2em" }}>
                                            Average urban water and sanitation
                                            tariff (US$/m3)
                                        </td>
                                        <td style={{ padding: "0.2em" }}>
                                            0.77 (Jakarta, ca. 2008)
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "0.2em" }}>
                                            Annual investment in WSS
                                        </td>
                                        <td style={{ padding: "0.2em" }}>
                                            US$2 per capita (2005 estimate)
                                        </td>
                                    </tr>
                                    <tr>
                                        <th colSpan="2">Institutions</th>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "0.2em" }}>
                                            Decentralization to municipalities
                                        </td>
                                        <td style={{ padding: "0.2em" }}>
                                            Substantial
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "0.2em" }}>
                                            National water and sanitation
                                            company
                                        </td>
                                        <td style={{ padding: "0.2em" }}>
                                            None
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "0.2em" }}>
                                            Water and sanitation regulator
                                        </td>
                                        <td style={{ padding: "0.2em" }}>
                                            None
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "0.2em" }}>
                                            Responsibility for policy setting
                                        </td>
                                        <td style={{ padding: "0.2em" }}>
                                            Ministry of Health and Ministry of
                                            Home Affairs
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "0.2em" }}>
                                            Sector law
                                        </td>
                                        <td style={{ padding: "0.2em" }}>No</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "0.2em" }}>
                                            No. of urban service providers
                                        </td>
                                        <td style={{ padding: "0.2em" }}>
                                            319
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "0.2em" }}>
                                            No. of rural service providers
                                        </td>
                                        <td style={{ padding: "0.2em" }}>
                                            n/a
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <Stack>
                                <Typography color="rgba(240, 240, 240)">
                                    Source:
                                    <ol style={{ listStylePosition: "inside" }}>
                                        <li>
                                            &apos;JMP&apos;. washdata.org.
                                            Retrieved 2021-07-20.
                                        </li>
                                        <li>
                                            International Benchmarking Network
                                            for Water and Sanitation Utilities:
                                            Latest IBNET country indicators -
                                            Indonesia, retrieved on October 17,
                                            2010
                                        </li>
                                        <li>
                                            International Benchmarking Network
                                            for Water and Sanitation Utilities:
                                            World Tariffs Map:Jakarta, accessed
                                            on October 17, 2010
                                        </li>
                                    </ol>
                                </Typography>
                            </Stack>
                        </Stack>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Container>
                </div>
                <div>
                    <Container>
                        <Stack gap={2} padding={"2% 0"}>
                            <Stack>
                                <Typography
                                    variant={"h3"}
                                    component={"h1"}
                                    color="dark_ocean"
                                    fontFamily={"Montserrat !important"}
                                    fontWeight={500}
                                    textAlign={"start"}
                                    data-aos="fade-up"
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
                                data-aos="fade-up"
                                data-aos-duration="1000"
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
                        <Divider sx={{ p: "1% 0" }} />
                    </Container>
                    <Container>
                        <Stack gap={2} padding={"2% 0"}>
                            <Stack>
                                <Typography
                                    variant={"h3"}
                                    component={"h1"}
                                    color="dark_ocean"
                                    fontFamily={"Montserrat !important"}
                                    fontWeight={500}
                                    textAlign={"start"}
                                    data-aos="fade-up"
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
                                data-aos="fade-up"
                                data-aos-duration="1000"
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
                                data-aos="fade-up"
                                data-aos-duration="1500"
                            >
                                <Tiles
                                    header="Smart Irrigation Systems"
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
                        <Divider sx={{ p: "1% 0" }} />
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Home;
