import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function CustomBarChart(props) {
    return (
        <BarChart
            xAxis={[
                {
                    data: props.data.map((element) => element.label),
                    label: props.xLabel,
                    scaleType: "band",
                    tickPlacement: "middle",
                },
            ]}
            yAxis={[
                {
                    label: props.yLabel,
                    scaleType: props.log?"sqrt":"linear",
                    min: 0,
                },
            ]}
            series={[
                {
                    data: props.data.map((element) => element.value),
                    label: props.label,
                    color: "#608bc1",
                },
            ]}
            sx={{ width: { xs: 400, lg: 1000 } }}
            height={400}
        />
    );
}
