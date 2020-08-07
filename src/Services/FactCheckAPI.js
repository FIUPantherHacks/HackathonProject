const axios = require('axios');
const key = 'AIzaSyCFvi2-XvixWUrvTCTQ7zYZ8Ww56IEDRP8';


const FactCheckAPI = {
    search: async function (searchText) {
        const config = {
            method: 'get',
            url: `https://factchecktools.googleapis.com/v1alpha1/claims:search?key=${key}&query=${searchText}&languageCode=en-US`,
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
