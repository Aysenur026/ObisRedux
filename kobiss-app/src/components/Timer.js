import React ,{ useEffect, useState }from "react";

const Timer= ({ onTimeout }) =>{
    const [secondsLeft, setSecondsLeft] = useState(30);

    useEffect(() => {
        var timer = setInterval(() => {
            setSecondsLeft(seconds => {
                if(seconds === 0) {
                    onTimeout();
                    return;
                }
                
                return --seconds
            
            });
        } , 1000);

        return () => clearInterval(timer);
    }, []);

    return(
        <div className="timer">
             <div className="container">
            <div className="timer-container">
              <br></br>
              <div>{ secondsLeft }</div>
        </div></div><br></br>
        </div>
         
    );
}
export default Timer;