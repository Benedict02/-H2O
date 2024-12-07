import { useRef } from "react";
import { Stack, Typography } from "@mui/material";
const Tiles = (item) => {
  const ref = useRef();
  const handleMouseEnter = () => {
    if (ref.current && item.body) {
      ref.current.textContent = item.body;
    }
  }

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.textContent = item.header;
    }
  };

  return (
    <>
      <Stack className="col">
        <Stack
          sx={{
            transition:"all 0.3s ease-in-out",
            background: `${item.background}`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            '&:hover':{
              transform: {xs: "none", sm:'translate(-.8%, -.8%)'},
            },
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          width={"100%"}
          height={"40vh"}
          justifyContent={"flex-end"}
        >
          <Stack sx={{ backgroundColor: `rgba(0,0,0,0.6)` }} padding={"2% 3%"}>
            <Typography textAlign={"center"} color="white" ref={ref}>
              {item.header}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Tiles;
