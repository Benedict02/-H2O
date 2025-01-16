import { createTheme, ThemeProvider } from "@mui/material";

export default function ColorPalette(props) {
    let black_primary = "#0E2E65";
    let dark_primary = "#133e87";
    let primary = "#608bc1";
    let secondary = "#cbdceb";
    let white = "#f3f3e0";

    let theme = createTheme({});
    theme = createTheme(theme, {
        palette: {
            black_ocean: theme.palette.augmentColor({
                color: {
                    main: black_primary,
                },
                name: "black_ocean",
            }),
            dark_ocean: theme.palette.augmentColor({
                color: {
                    main: dark_primary,
                },
                name: "dark_ocean",
            }),
            primary: theme.palette.augmentColor({
                color: {
                    main: primary,
                },
                name: "primary",
            }),
            secondary: theme.palette.augmentColor({
                color: {
                    main: secondary,
                    contrastText: white,
                },
                name: "secondary",
            }),
            white: theme.palette.augmentColor({
                color: {
                    main: white,
                },
                name: "white",
            }),
        },
    });
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
