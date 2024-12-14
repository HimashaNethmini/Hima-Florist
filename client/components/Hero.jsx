import css from "../styles/Hero.module.css";
import Image from "next/image";
import xmas from "../assets/xmas.png";
import jingle from "../assets/jingle.png";
import HeroImage from "../assets/flowerimage.png";
import rose from "../assets/rose.jpg";

const Hero = () => {
  return (
    <div className={css.container}>
      <div className={css.left}>
        <div className={css.flower}>
          <span>Prettier than ever</span>
          <Image src={xmas} alt="" width={40} height={40} />
        </div>

        <div className={css.containerText}>
          <span> To Your</span>
          <span style={{ color: "var(--themeRed)" }}>Doorsteps </span>
          <Image src={jingle} alt="" height={80} width={55} />
          <Image src={jingle} alt="" height={60} width={45} />
          <Image src={jingle} alt="" height={60} width={45} />
        </div>

        <button className="btn">Get Started</button>
      </div>

      {/* right side */}
      <div className={css.right}>
        <div className={css.imageContainer}>
          <Image src={HeroImage} alt="hero image" objectFit="cover" layout="intrinsic" />
        </div>

        <div className={css.sideimage}>
          <div>
            <Image src={rose} alt="" style={{objectFit:"cover"}} layout="intrinsic" />
          </div>

          <div className={css.details}>
            <span>Divine Rose</span>
            <span>
              <span style={{color:"var(--themeRed)"}}>$</span> 29.99</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
