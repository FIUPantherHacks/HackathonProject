const axios = require('axios');
const key = '8126c90f-d8a6-4c30-b99c-c89b0cd490a7';

const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/cyberpurge.com',
    timeout: 1000,
    headers: {'X-Authorization' : key}
});

const API = {
    countries: async function (token) {
        let response = await instance.get(`/api/covid/countries`);
        return response.data;
    },
    countryNameByCode: async (CODE) => {
        let response = await instance.get(`/api/covid/countryNameByCode/${CODE}`);
        return response.data;
    },
    dailyTotals: async function (CODE) {
        let response = await instance.get(
            `/api/covid/dailyTotals/${CODE}`
        );
        return response.data;
    },
    globalCases: async function (routeId) {
        let response = await instance.get(`/api/covid/globalCases`);
        return response.data;
    },
    globalData: async function () {
        try {
            let response = await instance.get(`/api/covid/globalData`);
            console.log('API SERVICED', response);
            return response.data;
        } catch (e) {
            return { message: "There was an Error getting the global Data info" };
        }
    },
    weeklyRegionalTotalCases: async function (CODE) {
        try {
            let response = await instance.get(`/api/covid/weeklyRegionalTotalCases/${CODE}`);
            return response.data;
        } catch (e) {
            return { message: "There was an Error getting the weekly Regional Total  Info" };
        }
    },
    weeklyRegionalRecoverdCases: async function (CODE) {
        try {
            let response = await instance.get(`/api/covid/weeklyRegionalRecoverdCases/${CODE}`);
            return response.data;
        } catch (e) {
            return { message: "There was an Error getting the weekly Regional recovered cases  Info" };
        }
    },
    weeklyRegionalDeceasedCases: async function (CODE) {
        try {
            let response = await instance.get(`/api/covid/weeklyRegionalDeceasedCases/${CODE}`);
            return response.data;
        } catch (e) {
            return { message: "There was an Error getting the weekly Regional deceased cases  Info" };
        }
    },
    regionalDataByCountry: async function (CODE) {
        try {
            let response = await instance.get(`/api/covid/regionalDataByCountry/${CODE}`);
            return response.data;
        } catch (e) {
            return { message: "There was an Error getting the weekly Regional data by Country  Info" };
        }
    },

};


export default API;