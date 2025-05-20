import {useEffect, useState} from "react";


const Clock = () => {
        const [time, setTime] = useState(new Date());
    const [secondsLeft, setSecondsLeft] = useState(45 *60);

        useEffect(() => {
            const timer = setInterval(() => {
                setTime(new Date());
            }, 1000)

            return () => clearInterval(timer)
        }, []);

            useEffect(() => {
                const timer = setInterval(() =>{
                    setSecondsLeft((prev) => {
                        if(prev <=1){
                            clearInterval(timer);
                            return 0;
                        }
                        return prev -1;
                    })
            }, 1000);
            return () => clearInterval(timer);
    }, []);

        const min = Math.floor(secondsLeft / 60);
        const sec = secondsLeft % 60
        const czas = `${min}:${sec}`

    return (
        <>
            <h2>Aktualny czas: </h2>
            <p>{time.toLocaleTimeString()}</p>
            <h3>Czas do końca lekcji: </h3>
            <p>{czas}</p>
        </>
    );
};

export default Clock;