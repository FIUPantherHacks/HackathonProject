const axios = require('axios');
const key = process.env.GFactKey;


const FactCheckAPI = {
    search: async function (searchText) {
        const config = {
            method: 'get',
            url: `https://factchecktools.googleapis.com/v1alpha1/claims:search?key=${key}&query=${searchText}`,
            headers: {}
        };
    
        let data = axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};


export default FactCheckAPI;
