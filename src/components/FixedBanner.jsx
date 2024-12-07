import { Container, Stack, Typography } from "@mui/material";

const Banner = ({ title, src }) => {
    return (
        <>
            <Stack
                sx={{
                    backgroundImage: `url(${src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    height: "100vh",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h1"
                    sx={{ bgcolor: "black", color: "primary.main", p: 1 }}
                >
                    {title}
                </Typography>
            </Stack>
        </>
    );
};

export default Banner;
