import React, { useState, useEffect } from 'react';
import PostInfo from '../PostInfo/PostInfo';


const AllPost = () => {

const [allPost, setPost] = useState([]);

useEffect(()=>{
    const url =`https://jsonplaceholder.typicode.com/posts`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setPost(data))
},[])

    return (
        <div>
            
            {
                allPost.slice(0,100).map(ps=> <PostInfo post={ps}></PostInfo>)
            }
            
        </div>
    );
};

export default AllPost;