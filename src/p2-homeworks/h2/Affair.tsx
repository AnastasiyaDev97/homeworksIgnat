import React from 'react'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.wrapper}>
            <span className={s.elemInSpan}>{props.affair.name}</span>
            <span className={s.elemInSpan}>{props.affair.priority}</span>
            <SuperButton className={s.button} onClick={deleteCallback}>X</SuperButton>
        </div>
    )
}

export default Affair
