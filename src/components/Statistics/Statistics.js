import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis,CartesianGrid, Tooltip } from 'recharts';

import { statisticsContext } from '../Root/Root';

const Statistics = () => {
    const statisticsChart = useContext(statisticsContext);
    const data = statisticsChart.data;
    return (
        <div>
            <h1 className="text-center font-bold text-2xl text-red-500 my-3">Statistics</h1>
            <div className="flex justify-center w-3/4">
                <LineChart width={450} height={450} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                 type="monotone"
                 dataKey="total"
                 stroke="#8884d8"
                 activeDot={{ r: 8 }}
                 ></Line>
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;
