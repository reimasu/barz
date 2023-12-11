import axios from "axios";

const GENIUS_API = "https://api.genius.com";
export const API_KEY = process.env.REACT_APP_GENIUS_API_KEY;

export const getSong = async (songId) => {
    try {const response = await axios.get(
    `${GENIUS_API}/songs/${encodeURIComponent(songId)}&access_token=${API_KEY}`)
    return response.song.title;
    } catch (error) {
        console.error('Error in searchSong:', error);
    }
};