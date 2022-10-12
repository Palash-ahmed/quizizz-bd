import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

import { QuizContext } from '../Root/Root';

const Statistics = () => {
    const quizChart = useContext(QuizContext);
    const data = quizChart.data;
    return (
        <div>
            <h1 className="text-center font-bold text-2xl text-red-500 my-3">Statistics</h1>
            <div className="flex justify-center w-3/4">
                <BarChart width={450} height={450} data={data}>
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey="total" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
            </div>
        </div>
    );
};

export default Statistics;
