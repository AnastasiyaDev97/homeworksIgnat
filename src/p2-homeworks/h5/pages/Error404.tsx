import React from 'react'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.flexContainer}>
            <div className={s.modal}>
                <div>404</div>
                <div>Page not found!</div>
                <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            </div>
        </div>
    )
}

export default Error404
