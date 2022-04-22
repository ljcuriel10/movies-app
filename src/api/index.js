import axios from "axios";

const options = {
    params: {
        api_key: 'e930416211a62b8129387627d925f834',
    }
};

export const getNowPlaying = async () => {
    const URL = 'https://api.themoviedb.org/3/movie/now_playing';

    
    try {
        const {data: results} = await axios.get(URL, options);
        return results;
    } catch (error) {
        console.error(error);
    };
}

export const getMovieDetailById = async (movie_id) => {
    const URL = `https://api.themoviedb.org/3/movie/${movie_id}`

    try {
        const {data} = await axios.get(URL, options);
        return data
    } catch (error) {
        console.log(error)
    }
    
}