import React from 'react'
import s from './css/Navbar.module.css'

const Navbar = () => {
    let navbar =
        <nav className={s.nav}>
            <div className={s.navbarItem}>
                <a href='/#'>
                    Profile
                </a>
            </div>
            <div className={s.navbarItem}>
                <a href='/#'>
                    Messages
                </a>
            </div>
            <div className={s.navbarItem}>
                <a href='/#'>
                    News
                </a>
            </div>
            <div className={s.navbarItem}>
                <a href='/#'>
                    Music
                </a>
            </div>
            <div className={s.navbarItem}>
                <a href='/#'>
                    Settings
                </a>
            </div>
        </nav>

    return navbar
}

export default Navbar