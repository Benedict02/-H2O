import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function CustomPieChart({data}) {
    const colors = [
        "blue",
        "#AAAAff",
        "brown",
        "#00CEC8",
        "DodgerBlue",
        "DarkSlateGrey",
        "DarkCyan",
        "MediumSeaGreen",
    ];

    return (
        <PieChart
            series={[
                {
                    data: data.map((element, index) => ({
                        id: element.index,
                        value: element.value,
                        label: element.label,
                        color: colors[index % colors.length],
                    })),
                    innerRadius: 100,
                    outerRadius: 150,
                    paddingAngle: 2,
                },
            ]}
            height={400}
            sx={{width: { xs: 400, lg: 1000 },}}
        />
    );
}
