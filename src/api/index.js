import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/movie/";

const options = {
    params: {
        api_key: 'e930416211a62b8129387627d925f834',
    }
};

export const getNowPlaying = async () => {
    const URL = `${BASE_URL}now_playing`;

    
    try {
        const {data: results} = await axios.get(URL, options);
        return results;
    } catch (error) {
        console.log(error);
    };
};

export const getMovieDetailById = async (movie_id) => {
    const URL = `${BASE_URL}${movie_id}`

    try {
        const {data} = await axios.get(URL, options);
        return data
    } catch (error) {
        console.log(error)
    };  
};

export const getUpcoming = async () => {
    const URL = `${BASE_URL}upcoming`;

    try {
        const {data: results} = await axios.get(URL, options);
        return results;

    } catch (error) {
        console.log(error);
    };
};