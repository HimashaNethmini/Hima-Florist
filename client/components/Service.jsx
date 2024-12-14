import css from "../styles/Service.module.css";
import ordering from "../assets/pic2.png";
import deliver from "../assets/pic4.png";
import bouquet from "../assets/pic1.png";
import Image from "next/image";

const Service = () => {
  return (
    <>
      <div className={css.heading}>
        <span> 24 HRS DELIVERY ISLANDWIDE</span>
        <span>Divine Bouquets</span>
        <span>With Love </span>
      </div>

      <div className={css.features}>
        <div className={css.services}>
          <div className={css.imageContainer}>
            <Image
              src={ordering}
              alt=""
              objectFit="cover"
              layout="intristic"
              width={300}
              height={300}
            />
          </div>
          <span>Just like that</span>
        </div>

        <div className={css.services}>
          <div className={css.imageContainer}>
            <Image
              src={deliver}
              alt=""
              objectFit="cover"
              layout="intristic"
              width={300}
              height={280}
            />
          </div>
          <span>Fastest Delivery </span>
        </div>

        <div className={css.services}>
          <div className={css.imageContainer}>
            <Image
              src={bouquet}
              alt=""
              objectFit="cover"
              layout="intristic"
              width={300}
              height={300}
            />
          </div>
          <span>To Your Hands</span>
        </div>
      </div>
    </>
  );
};

export default Service;
