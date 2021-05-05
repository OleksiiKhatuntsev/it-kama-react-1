import React from 'react'
import s from './css/Profile.module.css'

const Profile = () => {

    let profile =
        <div className={s.content}>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt='there is no text'/>
            </div>
            <div>
                ava + desk
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>

    return profile
}

export default Profile