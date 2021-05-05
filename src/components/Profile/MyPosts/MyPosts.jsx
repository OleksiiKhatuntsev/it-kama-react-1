import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                my posts
                <Post message='post 1' likeCount="1"/>
                <Post message='post 2' likeCount="2"/>
                <Post message='post 3' likeCount="DNIWE EBANOE"/>
            </div>
    );
}

export default MyPosts