import React,{useState,useRef,useEffect} from 'react'

function Timer() {
    const Ref = useRef(null);

    // The state for our timer
    const [timer, setTimer] = useState("00:00:00");
  
    const getTimeRemaining = (e) => {
      const total = Date.parse(e) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / 1000 / 60 / 60) % 24);
      return {
        total,
        hours,
        minutes,
        seconds,
      };
    };
  
    const startTimer = (e) => {
      let { total, hours, minutes, seconds } = getTimeRemaining(e);
      if (total >= 0) {
        // update the timer
        // check if less than 10 then we need to
        // add '0' at the beginning of the variable
        setTimer(
          (hours > 9 ? hours : "0" + hours) +
            ":" +
            (minutes > 9 ? minutes : "0" + minutes) +
            ":" +
            (seconds > 9 ? seconds : "0" + seconds)
        );
      }
    };
  
    const clearTimer = (e) => {
      setTimer("00:00:60");
  
      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
        startTimer(e);
      }, 1000);
      Ref.current = id;
    };
  
    const getDeadTime = () => {
      let deadline = new Date();
  
      deadline.setSeconds(deadline.getSeconds() + 60);
      return deadline;
    };
  
    useEffect(() => {
      clearTimer(getDeadTime());
    }, []);
  
    const onClickReset = () => {
      clearTimer(getDeadTime());
    };
  
  return (
    <div>
    <h3>Remaining Time: {timer}</h3>
    </div>
  )
}

export default Timer