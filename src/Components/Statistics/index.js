import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import API from "../../Services/API"
let dataD = [
    {
        "regionName": "United States",
        "casesCount": 3781985,
        "recoveredCount": 1108518,
        "deceasedCount": 142229,
        "regionFlagUrl": "//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png"
    }
];


function  Statistics() {
    const [data, setdata] = useState(dataD);


    useEffect(() => {
        async function getNewData() {
            let newdata = await API.globalData();
            console.log("NEW DATA", newdata)
            setdata(newdata);
        }

        getNewData();
    }, []);
    console.log(data);
    return (
        <>
        <Header/>

        </>
    );
}

export default Statistics;
