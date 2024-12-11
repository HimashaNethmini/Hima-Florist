import css from "../styles/Hero.module.css";
import Image from "next/image";
import xmas from "../assets/xmas.png";
import jingle from "../assets/jingle.png";

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
          <Image src={jingle} alt="" height={40} width={40} />
        </div>

        <button className="btn" >Get Started</button>
      </div>

      {/* right side */}
      <div className={css.right}></div>
    </div>
  );
};

export default Hero;
