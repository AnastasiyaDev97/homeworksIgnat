import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    return (
        <div>
            <div className={s.animation}></div>
            <div className={s.linksBlock}>
                <NavLink to={'/pre-junior'}>-junior</NavLink>
                <NavLink to={'/junior'}>junior</NavLink>
                <NavLink to={'/junior-plus'}>junior+</NavLink>
            </div>
        </div>
    )
}

export default Header
