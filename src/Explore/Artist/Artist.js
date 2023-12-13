import { useParams, Link } from "react-router-dom";
import React, {useState, useEffect} from "react";
import * as client from "../../Search/client";
import Card from 'react-bootstrap/Card';
import './Artist.css';
  
function Artist() {  
    const {artistResultId} = useParams();
    const [artistName, setArtistName] = useState([]);
    const [artistCover, setArtistCover] = useState([]);
    const [results, setResults] = useState([]);


    const fetchArtistName = async () => {
        const artistName = await client.getArtistName(artistResultId);
        setArtistName(artistName)
    }

    const fetchArtistCover = async () => {
        const artistCover = await client.getArtistCover(artistResultId);
        setArtistCover(artistCover)
    }
    
    const fetchSongs = async () => {
        const r = await client.searchSong(artistName);
        setResults(r);
    }

    useEffect(() => { 
        fetchArtistName(artistResultId);
        fetchArtistCover(artistResultId);
        fetchSongs(artistName);
    }, [results]);
    
    const obj = JSON.parse(JSON.stringify(results));

    return (
    <div className='d-flex flex-column explore-container ps-5'>
            <h3 className='headings pt-3'>{artistName}</h3>
            <hr/> 
            <div className="grid ps-4 pt-3">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src={artistCover}
                                className="artist-cover col p-0"></img>
                            <h3 className="text-start col">{artistName}</h3>
                        </div>
                    </div>
                    <div className="col">
                        <h4 className="text-start">Popular Songs by {artistName}</h4>
                        <ul className="list-group align-items-start pt-3">
                            {obj &&
                             obj.map((song, index) => (
                                <li key={index} className="list-group-item">
                                    <div className="card song-card">
                                        <div className="d-inline-flex">
                                            <img className="song-album-covers" src={song.result.song_art_image_url}></img>
                                                <Link className="song-link" to={`/Barz/Explore/Song/${song.result.id}`}>
                                                    <h4 className="px-3 pt-2 text-start">{song.result.full_title}</h4>
                                                    <p className="text-start px-3">{song.result.release_date_with_abbreviated_month_for_display}</p>
                                                </Link>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div> 
                </div>
            </div>
        </div>
    );
}


export default Artist;
