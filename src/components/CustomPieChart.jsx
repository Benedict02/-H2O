import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { desktopOS, valueFormatter } from "./WorldStats";

export default function PieActiveArc() {
    return (
        <PieChart
            colors={[
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
            ]}
            series={[
                {
                    data: desktopOS,
                    highlightScope: { fade: "global", highlight: "item" },
                    faded: {
                        innerRadius: 30,
                        additionalRadius: -30,
                        color: "gray",
                    },
                    valueFormatter,
                },
            ]}
            height={340}
        />
    );
}
