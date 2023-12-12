import axios from "axios";
import * as cheerio from 'cheerio';
const GENIUS_API = "https://api.genius.com";
export const API_KEY = process.env.REACT_APP_GENIUS_API_KEY;
export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:4000";
export const USERS_API = `${BASE_API}/api/posts`;

export const searchSong = async (searchTerm) => {
    try {const response = await axios.get(
    `${GENIUS_API}/search?q=${encodeURIComponent(searchTerm)}&access_token=${API_KEY}`
    );
    return response.data.response.hits;
    } catch (error) {
        console.error('Error in searchSong:', error);
    }
};

export const getSongTitle = async (songResultId) => {
    try {const response = await axios.get(
    `${GENIUS_API}/songs/${encodeURIComponent(songResultId)}?access_token=${API_KEY}`
    );
    return response.data.response.song.title;
    } catch (error) {
        console.error('Error in searchSong:', error);
    }
};

export const getArtistName = async (artistResultId) => {
    try { const response = await axios.get(
        `${GENIUS_API}/artists/${encodeURIComponent(artistResultId)}?access_token=${API_KEY}`
    );
    return response.data.response.artist.name;
    } catch (error) {
        console.error("Error in searching:", error);
    }
}

export const getArtistCover = async (artistResultId) => {
    try { const response = await axios.get(
        `${GENIUS_API}/artists/${encodeURIComponent(artistResultId)}?access_token=${API_KEY}`
    );
    return response.data.response.artist.image_url;
    } catch (error) {
        console.error("Error in searching:", error);
    }
}

export const getSongCover = async (songResultId) => {
    try {const response = await axios.get(
    `${GENIUS_API}/songs/${encodeURIComponent(songResultId)}?access_token=${API_KEY}`
    );
    return response.data.response.song.song_art_image_url;
    } catch (error) {
        console.error('Error in searchSong:', error);
    }
};

export const getAlbumName = async (songResultId) => {
    try {const response = await axios.get(
    `${GENIUS_API}/songs/${encodeURIComponent(songResultId)}?access_token=${API_KEY}`
    );
    if (response.data.response.song.album.name) {
        return response.data.response.song.album.name;
    } else {
        return "No Album"
    }
    } catch (error) {
        console.error('Error in searchSong:', error);
    }
};

export const getAllPosts = async () => {
    const response = await axios.get(`${USERS_API}`);
    return response.data;
  };
    