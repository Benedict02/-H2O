import Banner from "../components/Banner";
import { Container, Stack, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Banner/>
      <Container>
        <Typography variant={"h1"}>Home</Typography>
        <Stack>
          <Typography variant={"subtitle1"}>
            Focus on sustainable ways to reduce water usage and protect
            freshwater resources. This topic highlights simple and effective
            practices for conserving water in daily life, especially at home,
            and emphasizes the impact of individual actions on global water
            scarcity.
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
