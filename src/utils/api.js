import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    console.log({'func': 'fetchDataFromApi', url, params})
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        console.log({'res': 'fetchDataFromApi', url, params, data})
        return data;
    } catch (err) {
        console.log({'err': 'fetchDataFromApi', url, params, err})
        return err;
    }
};
