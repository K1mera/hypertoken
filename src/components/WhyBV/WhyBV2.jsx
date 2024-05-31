import React from "react";
import style from "./WhyBV2.module.scss";

const WhyBV2 = () => {
  return (
    <div className={style.allContainer}>
      <div className={style.rowTitle}>
        <h1>WHY BUILDVISIONAI</h1>
        <p>
          Unlike 99% of crypto projects today, we not only have a utility, we have a
          BUILT MVP with existing construction clients who love our solution.
        </p>
      </div>
      <div className={style.rowContent}>
        <div className={style.leftColum}>
          <img src="/screamPc.png" alt="Not found" />
        </div>
        <div className={style.rightColumn}>
          <div className={style.textTop}>
            <div className={style.lineBlue}></div>
            <div className={style.rightColumContent}>
              <p>We help construction companies</p>
              <h2>Send more quotes & win more jobs</h2>
              <p>BuildVision automates plan scanning for quick, accurate quotes and tenders, saving time and boosting job wins for our customers.</p>
              <div className={style.porcent}>
                <div className={style.porcentColumn}>
                  <h2>80%</h2>
                  <p>Reduction time in responding to a quote</p>
                </div>
                <div className={style.porcentColumn}>
                  <h2>200%</h2>
                  <p>Clients reply to 2 x as many quotes</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.textBottom}>
            <div className={style.lineBlue}></div>
            <div className={style.bottonContent}>
              <h2>AI Powered Automation</h2>
              <p>Implementing BuildVision AI enhances efficiency by shifting focus from manual quoting to higher-value activities. We believe manual, repetitive work should be done by robots, not humans. </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyBV2;