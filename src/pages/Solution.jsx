import { Container, Stack, Typography } from "@mui/material";
import Banner from "../components/FixedBanner";
const Solution = () => {
    const painting = ""
    return (
        <>
            <Banner title="lorem" src={painting} />
            <Container fixed>
                <Stack>
                    <Typography>abc</Typography>
                </Stack>
            </Container>
        </>
    );
};

export default Solution;
