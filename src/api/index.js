import axios from "axios";

export const getNowPlaying = async () => {
    const URL = 'https://api.themoviedb.org/3/movie/now_playing';

    const options = {
        params: {
            api_key: 'e930416211a62b8129387627d925f834',
        }
    };
    try {
        const {data: results} = await axios.get(URL, options);
        return results;
    } catch (error) {
        console.error(error);
    };
}