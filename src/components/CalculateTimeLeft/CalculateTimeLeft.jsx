import { useState,useEffect } from "react";
import style from '../../pages/HomePage.module.scss'

function CalculateTimeLeft(params) {
    const finalDate = "2024-06-07T13:00:00";
    const code = '8dGbgNTz67yqQMwuxGMxMhMRBcGrkFJHs2GnxZwN79xD'
    const calculateTimeLeft = () => {
        const difference = +new Date(finalDate) - +new Date();
    
        if (difference > 0) {
          return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
        return {};
      };
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);
    return(
        <div className={style.bigContainDate} >
        <section className={style.time}>
        <div className={style.containNumbers}>
          <div className={style.contletterNumber}>
            <div>{timeLeft?.days.toString().padStart(2, "0")}</div>
            <div className={style.letterCount}>D</div>
          </div>
          <div>:</div>
          <div className={style.contletterNumber}>
            <div> {timeLeft?.hours.toString().padStart(2, "0")} </div>
            <div className={style.letterCount}>H</div>
          </div>
          <div>:</div>
          <div className={style.contletterNumber}>
            <div> {timeLeft?.minutes.toString().padStart(2, "0")} </div>
            <div className={style.letterCount}>M</div>
          </div>
          <div>:</div>
          <div className={style.contletterNumber}>
            <div>{timeLeft?.seconds.toString().padStart(2, "0")} </div>
            <div className={style.letterCount}>S</div>
          </div>
        </div>
        <div className={style.finalDate} >
        Friday 7 June - 1pm CST
        </div>
      </section>    
      <section className={style.codePath} >
        {code}
        </section>        
        </div>

    )
}

export default CalculateTimeLeft;