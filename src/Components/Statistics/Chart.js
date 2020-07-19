import React from 'react';
import {Doughnut} from "react-chartjs-2";


const data = {
    
}

function Chart(props) {

    return (
        <>
            <Doughnut 
              data={{
                labels: [props.country1Name, props.country2Name],
                datasets: [{
                    label: '# of Votes',
                    data: [props.country1, props.country2],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1,
                    hoverBorderWidth: 2,
                }]
            }} 
            options={{maintainAspectRatio: false, responsive: true, maintainAspectRatio: false }}/>
        </>
    );
}

export default Chart;
