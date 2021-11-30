import React, {useEffect, useState} from 'react'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function AlternativeClock() {
    const [date, setDate] = useState<Date>(new Date())
    useEffect(() => {
        window.setInterval(() => {
            setDate(new Date())
        }, 1000)
    },[])

    function getToString(num: number) {
        return num < 10 ? '0' + num : num
    }

    const stringTime =getToString(date.getHours())+':'+getToString(date.getMinutes())+':'+getToString(date.getSeconds())

    return (
        <div>
            {stringTime}
            <SuperButton >start</SuperButton>
        </div>
    )
}

export default AlternativeClock
