import style from "./WhyBV.module.scss";

function WhyBV() {
  return (
    <div className={style.allContainer} >
      <h2 className={style.bigTitle} >WHY BUILDVISION<span>PAY</span></h2>
      <span className={style.smallSpan} >
        Our revolutionary payment and smart contract system for construction
        companies.
      </span>
      <div className={style.containCards} >
        <div className={style.cards}>
          <span className={style.titleCard}>Low Transaction Fees</span>
          <img src="/circle.png" alt="" />
          <span className={style.bodyText}>
            Construction Companies operate on deals worth millions of dollars
            and often need to pay expensive payment processing fees which can be
            as high as 5%.
          </span>
          <span className={style.bodyText}>
            Utilising Solana's powerful technology, we can allow these legacy
            companies to pay significantly lower fees while increasing
            transaction speed and security.
          </span>
        </div>
        <div className={style.cards}>
          <span className={style.titleCard}>
            Smart Contracts & Transparency
          </span>
          <img src="/circle.png" alt="" />
          <span className={style.bodyText}>
            Utilising the transparency and security of the blockchain we can
            streamline the building contract negotiation stage and increase
            security. for all parties involved.
          </span>
          <span className={style.bodyText}>
            With Build Pay everyone knows that they'll get paid what they're
            owed, when they're owed-
          </span>
        </div>
      </div>
      <div className={style.lastEle} ></div>
    </div>
  );
}

export default WhyBV;
