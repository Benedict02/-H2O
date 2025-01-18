import { Container, Divider, Stack, Typography, Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const Accordion = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    function handleClick() {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Container
                fixed
                data-aos="fade-up"
                sx={{ backgroundColor: `${props.bgcolor}` }}
            >
                <Stack gap={1} padding={props.p}>
                    <Stack direction={"row"}>
                        <Button
                            onClick={handleClick}
                            sx={{
                                width: "100%",
                                textTransform: "none",
                                justifyContent: "space-between",
                                px: 0,
                            }}
                        >
                            <Typography
                                variant={"h4"}
                                component={"p"}
                                color="dark_ocean"
                                fontFamily={"Quintessential"}
                                textAlign={"start"}
                            >
                                {props.title}
                            </Typography>
                            {isOpen ? (
                                <KeyboardArrowDownIcon />
                            ) : (
                                <KeyboardArrowRightIcon />
                            )}
                        </Button>
                    </Stack>
                    <Typography textAlign={"justify"} fontSize="1rem">
                        {props.description}
                    </Typography>
                    {isOpen ? (
                        <Stack data-aos="fade-up">{props.children}</Stack>
                    ) : (
                        <></>
                    )}
                </Stack>
            </Container>
        </>
    );
};

export default Accordion;
