import { PureComponent } from 'react';
import { Tooltip, AreaChart, Area } from "recharts";

interface AreaChartProps {
    width: number;
    height: number;
    data: any;
}
export interface DataPoint {
    name: string;
    BTC: number;
    amt: number;
  }
  

export default class AreaChartComponent extends PureComponent<AreaChartProps> {
    render() {
        const { width, height, data } = this.props;
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
