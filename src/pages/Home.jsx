import ColorPalette from "../components/ColorPalette";
import Banner from "../components/Banner";
import { Box, Container, Stack, Typography, Divider } from "@mui/material";

const Home = () => {
  return (
    <ColorPalette>
      <Banner />
      <div style={{margin: '2% 0'}}>
        <Container>
          <Stack direction={'row'} flexWrap={'wrap'} alignItems={'baseline'} justifyContent={'center'}>
            <Typography variant={"h2"} component={"h1"} color="dark_ocean" fontFamily={'Imperial Script'} textAlign={"center"}>"Water is the driving force of all nature."</Typography>
            <Typography variant={"h5"} component={"p"} color="primary" fontFamily={'Roboto'} textAlign={"center"}>— Leonardo da Vinci</Typography>
          </Stack>
          <Divider sx={{margin:'1% 0'}}/>
          <Stack gap={2}>
            <Stack flexDirection={'row'} justifyContent={'center'} gap={1} alignItems={'center'} flexWrap={'wrap'}>
              <Stack className="col">
                <Stack bgcolor={'primary.main'} width={'100%'} height={'40vh'} justifyContent={'flex-end'}>
                  <Stack sx={{backgroundColor:`rgba(0,0,0,0.4)`}} padding={'2% 3%'}>
                    <Typography textAlign={'center'} color="white">lorem ipsum 1</Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack className="col">
                <Stack bgcolor={'primary.main'} width={'100%'} height={'40vh'} justifyContent={'flex-end'}>
                  <Stack sx={{backgroundColor:`rgba(0,0,0,0.4)`}} padding={'2% 3%'}>
                    <Typography textAlign={'center'} color="white">lorem ipsum 2</Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack className="col">
                <Stack bgcolor={'primary.main'} width={'100%'} height={'40vh'} justifyContent={'flex-end'}>
                  <Stack sx={{backgroundColor:`rgba(0,0,0,0.4)`}} padding={'2% 3%'}>
                    <Typography textAlign={'center'} color="white">lorem ipsum 3</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack flexDirection={'row'} justifyContent={'center'} gap={1} alignItems={'center'} flexWrap={'wrap'}>
              <Stack className="col">
                <Stack bgcolor={'primary.main'} width={'100%'} height={'40vh'} justifyContent={'flex-end'}>
                  <Stack sx={{backgroundColor:`rgba(0,0,0,0.4)`}} padding={'2% 3%'}>
                    <Typography textAlign={'center'} color="white">lorem ipsum 4</Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack className="col">
                <Stack bgcolor={'primary.main'} width={'100%'} height={'40vh'} justifyContent={'flex-end'}>
                  <Stack sx={{backgroundColor:`rgba(0,0,0,0.4)`}} padding={'2% 3%'}>
                    <Typography textAlign={'center'} color="white">lorem ipsum 5</Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack className="col">
                <Stack bgcolor={'primary.main'} width={'100%'} height={'40vh'} justifyContent={'flex-end'}>
                  <Stack sx={{backgroundColor:`rgba(0,0,0,0.4)`}} padding={'2% 3%'}>
                    <Typography textAlign={'center'} color="white">lorem ipsum 6</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Divider sx={{margin:'1% 0'}}/>
          
        </Container>
      </div>
    </ColorPalette>
  );
};

export default Home;
