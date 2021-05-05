import s from "./Profile.module.css";
import React from "react";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    let profile =
        <div className={s.content}>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt='there is no text'/>
            </div>
            <div>
                ava + desk
            </div>
            <MyPosts/>
        </div>

    return profile
}

export default Profile