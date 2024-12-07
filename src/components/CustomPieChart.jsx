import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { desktopOS, valueFormatter } from "./WorldStats";

export default function CustomBarChart() {
    const colors = [
        "red",
        "green",
        "blue",
        "cyan",
        "pink",
        "yellow",
        "purple",
        "orange",
        "brown",
        "teal",
        "grey",
    ];
    return (
        <BarChart
            xAxis={[
                {
                    data: desktopOS.map((os) => os.label),
                    label: "Countries",
                    scaleType: "band",
                    tickPlacement: "middle",
                },
            ]}
            yAxis={[
                {
                    label: "Percentage (%)",
                    series: valueFormatter,
                },
            ]}
            series={[
                {
                    data: desktopOS.map((os) => os.value),
                    label: "Population without access to clean water",
                    color:"#608bc1"
                },
            ]}
            sx={{ width: { xs: 400, lg: 1000 } }}
            height={400}
        />
    );
}
