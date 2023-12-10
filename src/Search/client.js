import axios from "axios";

const GENIUS_API = "https://api.genius.com";
export const API_KEY = process.env.REACT_APP_GENIUS_API_KEY;

export const searchSong = async (searchTerm) => {
    try {const response = await axios.get(
    `${GENIUS_API}/search?q=${encodeURIComponent(searchTerm)}&access_token=${API_KEY}`
    );
    return response.data.response.hits;
} catch (error) {
    console.error('Error in searchSong:', error);
}
};