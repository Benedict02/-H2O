import { Container, Divider, Stack, Typography, Button } from "@mui/material";
import { useState } from "react";

const Accordion = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    function handleClick() {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Container fixed data-aos="fade-up">
                <Stack gap={1} padding={"2% 0"}>
                    <Stack direction="row">
                        <Typography
                            variant={"h2"}
                            component={"h1"}
                            color="dark_ocean"
                            fontFamily={"Quintessential"}
                            textAlign={"start"}
                        >
                            {props.title}
                        </Typography>
                    </Stack>
                </Stack>
                <Typography textAlign={"justify"}>
                    {props.description}
                </Typography>
                <Stack sx={{ justifySelf: "end" }}>
                    <Button
                        component={Button}
                        onClick={handleClick}
                        sx={{ textTransform: "none" }}
                    >
                        More Information
                    </Button>
                </Stack>
                <Divider sx={{ margin: "1% 0" }} />
            </Container>
            {isOpen ? (
                <Stack data-aos="fade-up">{props.children}</Stack>
            ) : (
                <></>
            )}
        </>
    );
};

export default Accordion;
