import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Feed.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faUserCircle, faFire, faMessage, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as client from "./client.js"

function Feed() {

    const [results, setResults] = useState(null);

    const allPosts = async () => {
        const results = await client.getAllPosts();
        setResults(results);
    }

    useEffect(() => {
        allPosts();
    }, []);
    const obj = JSON.parse(JSON.stringify(results));

    return(
        <div className='d-flex flex-column feed-center-container'>
            <h3 className='headings'>Your Feed</h3>
            <hr/>
            <ul>
                {obj &&
                    obj.map((post) => (
                <li className="list-group-item">
                    <div className='card feed-card'>
                        <div className='row'>            
                            <div className='col-2 pt-3'>
                                <FontAwesomeIcon className="fa-2xl" icon={faUserCircle}>
                                </FontAwesomeIcon>
                            </div>
                        <div className='col-8'>
                            <div className='row justify-content-between py-3'>
                                <p className='col text-start'>@{post.userId}</p>
                                <h6 className='col text-end'>Posted on: {post.timestamp}</h6>
                            </div>
                            <div className='row text-start py-3'>
                                <p className='fw-normal'>“{post.lyric}”</p>
                            </div>
                            <div className='row-3 justify-content-end text-end pb-3'>
                                <FontAwesomeIcon className="fa-xl col-1 orange-icon" icon={faFire}></FontAwesomeIcon>
                                <FontAwesomeIcon className="fa-xl col-1 orange-icon" icon={faMessage}></FontAwesomeIcon>
                                <FontAwesomeIcon className="fa-xl col-1 orange-icon" icon={faPlus}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                    </div>   
                </li>   
                ))}       
            </ul>
        </div>
    )
}

export default Feed;