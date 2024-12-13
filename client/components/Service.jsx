import React from "react";
import css from "../styles/Service.module.css";
import ordering from "../assets/pic2.png";
import deliver from "../assets/pic1.png";
import bouquet from "../assets/pic4.png";

const Service = () => {
  return (
    <>
      <div className={css.heading}>
        <span> 24 HRS DELIVERY </span>
        <span>Divine Bouquets</span>
        <span>With Love</span>
      </div>

      <div className={css.features}>
        <div className={css.services}>
          <div className={css.imageContainer}>
            <Image src={ordering} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Just like that</span>
        </div>

        <div className={css.services}>
          <div className={css.imageContainer}>
            <Image src={deliver} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Fastest Delivery </span>
        </div>

        <div className={css.services}>
          <div className={css.imageContainer}>
            <Image src={bouquet} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <span>To Your Hands</span>
        </div>
        
      </div>
    </>
  );
};

export default Service;
