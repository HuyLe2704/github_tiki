// Bộ đếm thời gian ngược

import { useState, useEffect } from 'react'

function Content() {
    let currentTime = new Date()
    currentTime.setHours(currentTime.getHours())
    const [countdown, setCountdown] = useState(currentTime)
    const [stop, setStop] = useState(false)

    useEffect(() => {
        const timerId = setInterval(() => {
            if (countdown > 0 && !stop) {
                setCountdown(prevState => new Date(prevState.getTime() + 1000))
            }
        }, 1000)

        return () => clearInterval(timerId)
    }, [countdown, stop])

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time
    }

    const formatCountdown = `${formatTime(countdown.getHours())} : 
    ${formatTime(countdown.getMinutes())} : ${formatTime(countdown.getSeconds())}`

    return (
        <div>
            <h1>{formatCountdown}</h1>
            <button onClick={() => setStop(true)}>Stop Count</button>
            <button onClick={() => setStop(false)}>Start Count</button>
        </div>
    )
}

export default Content;