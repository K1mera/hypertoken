import style from "./Roadmap.module.scss";

function Roadmap() {
  return (
    <div className={style.allContainer}>
      <h1 className={style.bigTitle}>Roadmap</h1>
      <div className={style.containColumns}>
        <div className={style.containerLeft}>
          <div className={style.containInLinemap}>
            <div className={style.containHeader}>
              <span className={style.title}>Product MVP</span>
              <span className={style.date}>Dec 2023 - May 2024</span>
            </div>
            <div className={style.content}>
              We developed an MVP for an AI powered construction management
              software. After becoming disillusioned with VCs in funny vests, we
              decided we're going to help the world bring our vision to life
              with the power of the blockchain.
            </div>
          </div>
          <span className={style.space}></span>
          <div className={style.containInLinemap}>
            <div className={style.containHeader}>
              <span className={style.title}>
                Payment Gateways Testing and Beta Deployment
              </span>
              <span className={style.date}>Q3 2024</span>
            </div>
            <div className={style.content}>
              After a successful launch, we will begin testing and deploying
              Solana based payment solutions for the construction industry. We
              will also continue developing our AI powered software.
            </div>
          </div>
          <div className={style.containInLinemap}>
            <div className={style.containHeader}>
              <span className={style.title}>Scaling</span>
              <span className={style.date}>2025 onwards</span>
            </div>
            <div className={style.content}>
              After a successful launch, we will begin testing and deploying
              Solana based payment solutions for the construction industry. We
              will also continue developing our AI powered software.
            </div>
          </div>
        </div>
        <div className={style.linerH}></div>
        <div className={style.containerRigth}>
          <div className={style.containInLinemap}>
            <div className={style.containHeader}>
              <span className={style.title}>BUILD Token Fair Launch</span>
              <span className={style.date}>June 7- 2024</span>
            </div>
            <div className={style.content}>
              Launching our Build Token with a FAIR LAUNCH on DEXs.
            </div>
          </div>
          <div className={style.containInLinemap}>
            <div className={style.containHeader}>
              <span className={style.title}>
                We revolutionise the construction industry.{" "}
              </span>
              <span className={style.date}>Q4 2024</span>
            </div>
            <div className={style.content}>
              Full commercial launch of our suite of our suite of tools. At this
              point we are going to launch both the AI powered takeoff and
              estimation tools but also allow construction companies to accept
              payments directly with crypto.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
