import React from "react";
import style from "./Team.module.scss";

const Team = () => {
  return (
    <div className={style.container}>
      <h2>Team</h2>
      <p>Fully doxxed, transparent team building a real, long term project. </p>
      <div className={style.pictures}>
        <div className={style.bosses}>
          <div>
            <img src="/PictureVic.png" alt="" />
            <p>Victor</p>
            <p>Co-Founder - CTO</p>
          </div>
          <div>
            <img src="/PictureTy.png" alt="" />
            <p>Tyler</p>
            <p>Co-Founder - CFO</p>
          </div>

        </div>
        <div className={style.developers}>

          <div className={style.pictureTop}>
            <div className={style.dev}>
              <img src="PictureLe.png" alt="" />
              <div><p>Leandro</p>
                <p>Blockchain Developer</p></div>

            </div>
            <div className={style.dev}>
              <img src="PictureCa.png" alt="" />
              <div><p>Carlos</p>
                <p>Front-End Developer</p></div>

            </div>

          </div>
          <div className={style.pictureBotton}>
            <div className={style.dev}>
              <img src="PictureJ.png" alt="" />
              <div><p>Julian</p>
                <p>Back-End Developer</p></div>

            </div>
            <div className={style.dev}>
              <img src="PictureS.png" alt="" />
              <div><p>Santiago Designer</p>
              </div>

            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;