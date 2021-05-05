import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    let Post =
        <div className={s.post_item}>
            <img src="https://res.cloudinary.com/heroespatches/image/upload/v1483416717/hero/kaelthas.jpg"
            alt="ava"/>
            {props.message}
            <div>
                <span>like - {props.likeCount}</span>
            </div>
        </div>

    return Post
}

export default Post