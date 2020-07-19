import React from 'react';
import {Doughnut} from "react-chartjs-2";




function Chart(props) {

    return (
        <>



            <Doughnut width="0.1" height="0.1" data={{
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
                    borderWidth: 1
                }]
            }} />
        </>
    );
}

export default Chart;
