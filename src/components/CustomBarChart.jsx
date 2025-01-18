import { useState, useEffect } from 'react';
import { Stack, Divider, Typography } from '@mui/material';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label, unit }) => {
    const addThousandSeparator = (value) => {
        const parts = value.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    };

    if (active && payload && payload.length) {
        return (
            <Stack
                style={{
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    boxShadow: '0px 2px 5px rgba(0,0,0,0.2)',
                }}
                width={'30vh'}
            >
                <Stack direction={'column'} gap={1}>
                    <Stack direction={'column'}>
                        <Typography padding={'2% 3%'} fontWeight={'bold'}>{`${label}`}</Typography>
                        <Divider sx={{ margin: "1% 0" }} />
                    </Stack>
                    {payload.map((entry, index) => (
                        <Typography
                            key={index}
                            color={`${entry.color}`}
                            fontSize={'1em'}
                            padding={'2% 3%'}
                        >
                            {`${entry.name}: ${addThousandSeparator(entry.value)} ${unit || ''}`}
                        </Typography>
                    ))}
                </Stack>
            </Stack>
        );
    }

    return null;
};


const CustomYAxisTick = (props) => {
    const addThousandSeparator = (value) => {
        const parts = value.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    };
    
    const { x, y, payload } = props;
    return (
        <g transform={`translate(${x},${y})`}>
            <text
                x={-10}
                y={0}
                dy={5}
                textAnchor="end"
                fill="#333"
                fontSize="10"
            >
                {addThousandSeparator(payload.value)}
            </text>
        </g>
    );
};


const CustomXAxisTick = (props) => {
    const { x, y, payload } = props;
    const [showTicks, setShowTicks] = useState(true);
    
    useEffect(() => {
        const updateTickVisibility = () => {
            setShowTicks(window.innerWidth > 600);
        };
        
        updateTickVisibility();
        window.addEventListener("resize", updateTickVisibility);
        
        return () => {
            window.removeEventListener("resize", updateTickVisibility);
        };
    }, []);

    return showTicks ? (
        <g transform={`translate(${x},${y})`}>
            <text
                x={-10}
                y={0}
                dy={5}
                textAnchor="middle"
                fill="#333"
                fontSize="10"
                >
                {payload.value}
            </text>
        </g>
    ) : (
        <g>
            <text></text>
        </g>
    );
}

const CustomBarChart = (props) => {
    return (
        <ResponsiveContainer width="100%" height="100%" minHeight={'500px'}>
            <BarChart
                data={props.data}
                margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeOpacity={0} />
                <XAxis 
                    dataKey={props.x} 
                    tick={<CustomXAxisTick/>} 
                    label={{
                        value: props.xLabel ? `${props.xLabel}` : "",
                        position: "center",
                        dy: 10, 
                    }}
                />
                <YAxis
                    type="number"
                    scale={props.log?"log":"linear"}
                    min={props.log?1:0}
                    label={{
                        value: props.yLabel?`${props.yLabel}`:"",
                        angle: -90, 
                        position: "center",
                        dx: -30, 
                    }}
                    tick={<CustomYAxisTick/>}
                    domain={[1, "auto"]}
                />
                <Tooltip content={<CustomTooltip unit={props.unit} />} />
                <Legend />
                {props.y.map((element, index)=>(
                    <Bar
                        key={index}
                        dataKey={element} 
                        fill={index % 2 === 0 ? "#8884d8" : "#82ca9d"}
                        activeBar={<Rectangle stroke={index % 2 === 0 ? "#ff58c6" : "#ffc658"} fill={index % 2 === 0 ? "#8884d8" : "#82ca9d"} />}
                    />
                ))}
            </BarChart>
        </ResponsiveContainer>
    );
}

export default CustomBarChart;