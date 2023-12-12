import { Link,  useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Feed.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faUserCircle, faFire, faMessage, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as client from "../Search/client.js"

function Feed() {
    const { search } = useParams();
    const [searchTerm, setSearchTerm] = useState(search);
    const [results, setResults] = useState(null);
    const [posts, setPosts] = useState(null);

    const allPosts = async () => {
        const posts = await client.getAllPosts();
        setPosts(posts);
    }
    const fetchSongs = async () => {
        const results = await client.searchSong(searchTerm);
        setResults(results);
    }

    useEffect(() => {
        allPosts();
    }, []);
    const objPosts = JSON.parse(JSON.stringify(posts));

    return(
        <div className="container feed-grid ps-1">
            <div className='row pt-3'>
            <div className='col-9'>
                <h3 className='headings'>Your Feed</h3>
                <hr/>
                <ul>
                    {objPosts &&
                        objPosts.map((post, index) => (
                    <li className="list-group-item py-2" key={index}>
                        <div className='card feed-card'>
                            <div className='row'>            
                                <div className='col-2 pt-3'>
                                    <FontAwesomeIcon className="fa-2xl" icon={faUserCircle}>
                                    </FontAwesomeIcon>
                                </div>
                            <div className='col-8'>
                                <div className='row justify-content-between py-3'>
                                    <p className='col text-start'>@{post.username}</p>
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
                <p>{console.log(objPosts)}</p>
            </div>
            <div className='col pt-3'>
                <p>put trending songs here</p>
            </div>
            </div>
        </div>
    )
}

export default Feed;