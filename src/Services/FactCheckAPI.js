const axios = require('axios');
const key = '8126c90f-d8a6-4c30-b99c-c89b0cd490a7';

const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://content-factchecktools.googleapis.com/v1alpha1/claims:search?query=',
    timeout: 1000,
    headers: {
        'authority': 'content-factchecktools.googleapis.com',
        'x-goog-encode-response-if-executable': 'base64',
        'x-origin': 'https://explorer.apis.google.com',
        'x-clientdetails': 'appVersion=5.0^%^20(Windows^%^20NT^%^2010.0^%^3B^%^20Win64^%^3B^%^20x64)^%^20AppleWebKit^%^2F537.36^%^20(KHTML^%^2C^%^20like^%^20Gecko)^%^20Chrome^%^2F79.0.3945.130^%^20Safari^%^2F537.36^&platform=Win32^&userAgent=Mozilla^%^2F5.0^%^20(Windows^%^20NT^%^2010.0^%^3B^%^20Win64^%^3B^%^20x64)^%^20AppleWebKit^%^2F537.36^%^20(KHTML^%^2C^%^20like^%^20Gecko)^%^20Chrome^%^2F79.0.3945.130^%^20Safari^%^2F537.36',
        // 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
        'x-javascript-user-agent': 'apix/3.0.0 google-api-javascript-client/1.1.0',
        'x-referer': 'https://explorer.apis.google.com',
        // 'dnt': '1',
        'accept': '*/*',
        'x-client-data': 'CIW2yQEIo7bJAQjBtskBCKmdygEIvLDKAQj3tMoBCJe1ygEI7bXKAQiOusoB',
        // 'sec-fetch-site': 'same-origin',
        // 'sec-fetch-mode': 'cors',
        // 'referer': 'https://content-factchecktools.googleapis.com/static/proxy.html?usegapi=1^&jsh=m^%^3B^%^2F_^%^2Fscs^%^2Fapps-static^%^2F_^%^2Fjs^%^2Fk^%^3Doz.gapi.en.yyhByYeMTAc.O^%^2Fam^%^3DwQc^%^2Fd^%^3D1^%^2Fct^%^3Dzgms^%^2Frs^%^3DAGLTcCN9qAMm_5_ztFCxaPySR5cb8QjKkw^%^2Fm^%^3D__features__',
        // 'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9'}
});

const FactCheckAPI = {
    search: async function (searchText) {
        try {
            let response = await instance.get(`${searchText}^&access_token=AIzaSyA8U5NjbdmHgqHvO4KLpuCqrI5npOU8s_Y^&key=AIzaSyAa8yy0GdcGPHdtD083HiGGx_S0vMPScDM`);
            console.log('WorldDataAPI SERVICED', response);
            return response.data;
        } catch (e) {
            return { message: "There was an Error getting the global Data info" };
        }
    }
};


export default FactCheckAPI;