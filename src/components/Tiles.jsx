import { Stack, Typography } from "@mui/material";
const Tiles = (item) => {
  return (
    <>
      <Stack className="col">
        <Stack
          sx={{
            background: `${item.background}`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          width={"100%"}
          height={"40vh"}
          justifyContent={"flex-end"}
        >
          <Stack sx={{ backgroundColor: `rgba(0,0,0,0.4)` }} padding={"2% 3%"}>
            <Typography textAlign={"center"} color="white">
              {item.header}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Tiles;
