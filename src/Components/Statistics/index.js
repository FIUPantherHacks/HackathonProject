import React from 'react';
import Header from "../Header/Header";
import API from "../../Services/API"
import { LineChart, Line } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];



function Statistics() {

    return (
        <>
        <Header/>

            {const renderLineChart = (
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>}
        </>
    );
}

export default Statistics;
