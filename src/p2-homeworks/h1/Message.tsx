import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.messageWithAvatarContainer}>
            <img className={s.avatar} src={props.avatar} alt={'avatar'}/>
            <div className={s.triangle}></div>
            <div className={s.messageFlexCont}>
                <div className={s.userName}>{props.name}</div>
                <div>
                    <span>{props.message}</span>
                    <span className={s.time}>{props.time}</span>
                </div>
            </div>
        </div>
    )
}

export default Message
