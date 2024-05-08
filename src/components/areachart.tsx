import React, { PureComponent } from 'react';
import { Tooltip, AreaChart, Area } from "recharts";

const data = [
    { name: "Page A", BTC: 4000 , amt: 2400 },
    { name: "Page B", BTC: 3000, amt: 2210 },
    { name: "Page C", BTC: 2000, amt: 2290 },
    { name: "Page D", BTC: 2780, amt: 2000 },
    { name: "Page E", BTC: 1890, amt: 2181 },
    { name: "Page F", BTC: 2390, amt: 2500 },
    { name: "Page G", BTC: 3490, amt: 2100 }
];

interface AreaChartProps {
    width: number;
    height: number;
}

export default class AreaChartComponent extends PureComponent<AreaChartProps> {
    render() {
        const { width, height } = this.props;
        return (
            <AreaChart
                width={width}
                height={height}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                </defs>
                
                <Tooltip />
                <Area type="monotone" dataKey="BTC" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
        );
    }
}
