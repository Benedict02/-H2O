import { Container, Stack, Typography } from "@mui/material";
import Banner from "../components/FixedBanner";
const Solution = () => {
    const rain = "./rainy.gif"
    return (
        <>
            <Banner title="lorem" src={rain} />
            <Container fixed>
                <Stack>
                    <Typography>abc</Typography>
                </Stack>
            </Container>
        </>
    );
};

export default Solution;
