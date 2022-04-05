import React from 'react';
import{PieChart,pie,Tooltip, Pie} from'recharts'
import{LineChart} from'recharts'

const data=[
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
]

const Dashboard = () => {
    return (
        <div>
            <h1>Line Chart</h1>
            <PieChart width={400} height={400}>
                <Pie
                dataKey='value'
                isAnimationActive={false}
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
                fill='blue'
                lable
                />
                <Tooltip/>

            </PieChart>
        </div>
    );
};

export default Dashboard;