const axios = require('axios');
const key = process.env.REACT_APP_GFactKey;


const FactCheckAPI = {
    search: async function (searchText) {
        const config = {
            method: 'get',
            url: `https://factchecktools.googleapis.com/v1alpha1/claims:search?key=${key}&query=${searchText}&languageCode=en-US&pageSize=30`,
            headers: {}
        };
    
        let data = axios(config)
            .then(function (response) {
                console.log("THIS IS THE DATA", response.data);
                return response.data.claims;
            })
            .catch(function (error) {
                console.log(error);
            });
        return data;
    }
};


export default FactCheckAPI;
