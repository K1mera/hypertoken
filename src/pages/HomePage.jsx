import React, { useState, useCallback, useEffect } from "react";
import style from "./HomePage.module.scss";
import CalculateTimeLeft from "../components/CalculateTimeLeft/CalculateTimeLeft";
import Tokenomics from "../components/Tokenomics/Tokenomics";
import Roadmap from "../components/Roadmap/Roadmap";
import WhyBV from "../components/WhyBV/WhyBV";
import WhyBV2 from "../components/WhyBV/WhyBV2";
import Team from "../components/WhyBV/Team";

export const HomePage = () => {
  const navigateBv = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className={style.allContainer}>
      <section className={style.infoHome}>
        <section className={style.containFirstTexts}>
          <h3 className={style.firtText}>Empowering the $10 Trillion</h3>
          <h3 className={style.firtText}>Construction Industry with</h3>
          <h3 className={style.firtText}>Blockchain and AI</h3>
          <h3 className={style.secondText}>BUILD TOKEN</h3>
        </section>
        <section className={style.follow}>
          <ul>
            <li onClick={() => navigateBv("https://t.me/+cvLD5nvplJtiN2Vl")}>
              <img src="/telegram.png" alt="" />
            </li>
            <li onClick={() => navigateBv("https://x.com/BuildVisionAI")}>
              <img src="/discord.png" alt="" />
            </li>
            <li
              onClick={() =>
                navigateBv("https://www.instagram.com/buildvisionai/")
              }
            >
              <img src="/instagram.png" alt="" />
            </li>
          </ul>
        </section>
        <section className={style.image}>
          <img src="/tokenWithCloud.png" className={style.imagePng} alt="" />
        </section>
        <CalculateTimeLeft />
        <Tokenomics />
        <Roadmap/>
        <WhyBV/>
        <WhyBV2/>
        <Team/>
      </section>
    </div>
  );
};
