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

    const getUsernameFromId = async (userId) => {
        const user = await client.getUserFromId(userId);
        return user.username;
    }

    useEffect(() => {
        allPosts();
    }, []);
    const objPosts = JSON.parse(JSON.stringify(posts));

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
                                <p className='col text-start'>
                                    {console.log(getUsernameFromId(post.userId))};
                                    {/* @{getUsernameFromId(post.userId)} */}
                                </p>
                                <h6 className='col text-end'>Posted on: {post.timestamp}</h6>
                            </div>
                            <div className='row text-start py-3'>
                                <p className='fw-normal'>“{post.lyric}”</p>
                            </div>
                            <div className='row-3 justify-content-end text-end pb-3'>
                                <Link >
                                    <FontAwesomeIcon className="fa-xl col-1 orange-icon" icon={faFire}></FontAwesomeIcon>
                                </Link>
                                <Link>
                                    <FontAwesomeIcon className="fa-xl col-1 orange-icon" icon={faMessage}></FontAwesomeIcon>
                                </Link> 
                                <Link>
                                    <FontAwesomeIcon className="fa-xl col-1 orange-icon" icon={faPlus}></FontAwesomeIcon>
                                </Link>
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