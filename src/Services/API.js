const axios = require('axios');
const key = '8126c90f-d8a6-4c30-b99c-c89b0cd490a7';

const instance = axios.create({
    baseURL: 'https://www.cyberpurge.com',
    timeout: 1000,
    headers: {'X-Authorization' : key}
});

const API = {
    getCountries: async function (token) {
        let response = await instance.get(`${URL}/api/covid/countries`);
        return response.data;
    },
    getcountryNameByCode: async (CODE) => {
        let response = await instance.get(`${URL}/tokens`);
        return response.data;
    },
    getShapeByRoute: async function (token, routeId) {
        let response = await instance.get(
            `${URL}/shapes/find?token=${token}&id=${routeId}`
        );
        return response.data;
    },
    getStopsByRoute: async function (routeId) {
        let response = await instance.get(`${URL}/stops/find?id=${routeId}`);
        return response.data;
    },
    registerUser: async function (username, password, email) {
        try {
            let response = await instance.post(`${URL}/register`, {
                user: username,
                pwd: password,
                email,
            });
            return response.data;
        } catch (e) {
            const { status } = e.response;
            if (status === 406) {
                return { message: "Account already in use" };
            }
            if (status === 500) {
                return { message: "There was an Error creating your account" };
            }
            return { message: "There was an Error creating your account" };
        }
    },
    getStations: async function () {
        try {
            let response = await instance.get(`${URL}/stations`);
            return response.data;
        } catch (e) {
            return { message: "There was an error getting the stations" };
        }
    },
    getTrainSchedule: async function (arrival, departure, date) {
        try {
            let response = await instance.get(
                `${URL}/trains/find?arrival=${arrival}&departure=${departure}&departure%20date=${date}`
            );
            return response.data;
        } catch (e) {
            return { message: "There was an error getting your schedule" };
        }
    },
    getAllTrirail: async function () {
        try {
            let response = await instance.get(`${URL}/trirail/find/all`);
            return response.data;
        } catch (e) {
            return { message: "There was an error getting the trirails" };
        }
    },
    getTrirailShape: async function (id) {
        try {
            let response = await instance.get(`${URL}/trishape/find?id=${id}`);
            return response.data;
        } catch (e) {
            return { message: "There was an error getting the trirails shape" };
        }
    },
    LoginUser: async function (username, password) {
        try {
            let base64encoded = btoa(`${username}:${password}`);
            let response = await instance.get(`${URL}/login`, {headers: {Authorization: `Basic ${base64encoded}`}});
            return response.data;
        } catch (e) {
            switch (e?.response?.status) {
                case 404:
                    return { message: e.response.data.Error };
                default:
                    return { message: "There was an error login in" };
            }
        }
    },
};


export default API;