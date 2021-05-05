import React from 'react'
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.navbar_item}>
                <a href='/profile'>
                    Profile
                </a>
            </div>
            <div className={s.navbar_item}>
                <a href='/dialogs'>
                    Dialogs
                </a>
            </div>
            <div className={s.navbar_item}>
                <a href='/#'>
                    News
                </a>
            </div>
            <div className={s.navbar_item}>
                <a href='/#'>
                    Music
                </a>
            </div>
            <div className={s.navbar_item}>
                <a href='/#'>
                    Settings
                </a>
            </div>
        </nav>
    );
}

export default Navbar