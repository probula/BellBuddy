import {useEffect, useState} from "react";


const Clock = () => {
        const [time, setTime] = useState(new Date());

        useEffect(() => {
            const timer = setInterval(() => {
                setTime(new Date());
        }, 1000)

        return () => clearInterval(timer)
    }, []);

    return (
        <>
            <h2>Aktualny czas: </h2>
            <p>{time.toLocaleTimeString()}</p>
        </>
    );
};

export default Clock;