import { useParams } from "react-router-dom";
import React, {useState, useEffect} from "react";
import * as client from "../../Search/client";
import './Song.css'
function Song() {
    const {songResultId} = useParams();
    const [results, setResults] = useState(null);
    const [title, setTitle] = useState([]);
    const [albumCover, setAlbumCover] = useState([]);
    const [albumName, setAlbumName] = useState([]);

    const fetchSongTitle = async () => {
        const title = await client.getSongTitle(songResultId);
        setTitle(title);
    }

    const fetchSongCover = async () => {
        const albumCover = await client.getSongCover(songResultId);
        setAlbumCover(albumCover)
    }

    const fetchAlbumName = async () => {
        const albumName = await client.getAlbumName(songResultId);
        setAlbumName(albumName)
    }
    useEffect(() => {
        fetchSongTitle(songResultId);
        fetchSongCover(songResultId);
        fetchAlbumName(songResultId)
    }, []);


    return(
        <div className='d-flex flex-column explore-container ps-5'>
        <h3 className='headings'>Explore BARZs</h3>
        <hr/>
        <div className="grid">
            <div className="row">
                <img 
                    className="col album-song-page"
                    src={albumCover}></img>
                    <div className="col">
                        <h3 className="text-start">{title}</h3>
                        <h4 className="text-start">On album {albumName}</h4>
                    </div>

            </div>

        </div>
    </div>
    )
};

export default Song;