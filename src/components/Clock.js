import React, { useState } from 'react'

const Clock = () => {
    let t = new Date().toLocaleTimeString()

    let [time, setTime] = useState(t)

    setInterval(() => {
        time = new Date().toLocaleTimeString()
        setTime(time)
        // console.log(time)
    })
    return (
        <>
            <h1>
                Time is : {time}
            </h1>
        </>
    )
}

export default Clock
