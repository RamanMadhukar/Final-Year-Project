import axios from "axios";
import { BASE_URL } from './BaseURL'
axios.defaults.baseURL = BASE_URL;

export const getAllPoints = async () => {
    try {
        const res = await axios.get(`/patient`);
        return { res };
    } catch (error) {
        return { error };
    }
};


// export const getSearchRecordByPageNumber = async (id, page) => {
//     console.log("page : ",page)
//     try {
//         const res = await axios.get(`/getSearchRecord_NonArcheived/${id}/0/0/0/0/${parseInt(page)}`);
//         // console.log(res);
//         return { res }
//     } catch (error) {
//         return { error };
//     }
// };

export const sendFormData = async (data) => {
    try {
        const resp = await axios.post(`/patient`, data);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};