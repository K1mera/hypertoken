import style from "./Tokenomics.module.scss";

function Tokenomics(params) {
  return (
    <div className={style.container}>
      <h1>Tokenomics</h1>
      <h2 className={style.inBigScreenText} >Build Token will be launched with a fair launch - no pre sales.</h2>
      <h2 className={style.inSmallScreenText} >Build Token.</h2>
      <div className={style.containerData}>
        <div className={style.labelData}>
          <div>Total Suppy:</div>
          <div className={style.data}>
            <span>88,888,888 BUILD</span>
            <span></span>
          </div>
        </div>
        <hr className={style.liner} />
        <div className={style.labelData}>
          <div>Public Sale:</div>
          <div className={style.data}>
            <span>{"90% (79,999,999 BUILD)"}</span>
            <span></span>
          </div>
        </div>
        <hr className={style.liner} />
        <div className={style.labelData}>
          <div>Development Fund</div>
          <div className={style.data}>
            <span>{"5% (4,444,444 BUILD) "}</span>
            <span></span>
          </div>
        </div>
        <hr className={style.liner} />
        <div className={style.labelData}>
          <div>Marketing Fund</div>
          <div className={style.data}>
            <span>{"5% (4,444,444 BUILD)"}</span> <span></span>
          </div>
        </div>
        <hr className={style.liner} />
        <div className={style.labelData}>
          <div>Deflationary Mechanism</div>
          <div className={style.data}>
            {
              "50% of Build Software as a Service (SAAS) profits will be used to repurchase tokens monthly and burn them creating deflationary token mechanics."
            }
          </div>
        </div>
        <hr className={style.liner} />
        <div style={{height:50}} ></div>
      </div>
    </div>
  );
}

export default Tokenomics;
