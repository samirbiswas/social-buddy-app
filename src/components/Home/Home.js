import React, { useState, useEffect } from 'react';
import PostInfo from '../PostInfo/PostInfo';

const AllPost = () => {
const [allPost, setPost] = useState([]);

useEffect(()=>{
    const url =`https://jsonplaceholder.typicode.com/posts`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setPost(data))

},[]);

    return (
        <div>
            
            {
                allPost.map(ps=> <PostInfo key={ps.id} post={ps}></PostInfo>)
            }
            
        </div>
    );
};

export default AllPost;