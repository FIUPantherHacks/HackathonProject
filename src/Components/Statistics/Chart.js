import React from 'react';
import {Doughnut} from "react-chartjs-2";




function Chart() {

    return (
        <>



            <Doughnut width="0.1" height="0.1" data={{
                labels: ['USA', 'Jessica'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19],
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
