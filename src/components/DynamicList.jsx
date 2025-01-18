import { useState, useEffect } from "react";
import { Typography, Stack, Box } from "@mui/material";
const DynamicList = (props) => {
    const [fontColor, setFontColor] = useState("");
    useEffect(() => {
        if (props.color == "") {
            setFontColor();
        }
    }, []);
    return (
        <Box padding={2}>
            <Stack spacing={2}>
                {props.content.map((entry, index) => (
                    <Box key={index}>
                        <Typography
                            variant="h5"
                            color="primary"
                            sx={{ fontWeight: "bold", marginBottom: 1 }}
                        >
                            {entry.title}
                        </Typography>
                        {entry.items.length === 1 ? (
                            <Typography variant="body1" color="black">
                                {entry.items[0]}
                            </Typography>
                        ) : (
                            <Stack component="ul" spacing={1} paddingLeft={2}>
                                {entry.items.map((item, subIndex) => (
                                    <Typography
                                        key={subIndex}
                                        component="li"
                                        variant="body1"
                                        color="black"
                                        fontSize={"1rem"}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Stack>
                        )}
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};

export default DynamicList;
