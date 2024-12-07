import { Container, Stack, Typography } from "@mui/material";
import Banner from "../components/FixedBanner";
const Science = () => {
    const painting = "Starry_Night_Over_the_Rhone.jpg";
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

export default Science;
