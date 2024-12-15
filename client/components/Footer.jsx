import css from "../styles/Footer.module.css"
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Logo from "../assets/1.png";

const Footer = () => {
  return (
    <div className={css.container}>
      <span>ALL RIGHTS RESERVED</span>

      <div className={css.social}>
        <FaFacebookSquare size = {35} />
        <BsTwitterX size={35} />
        <FaGithub size={35} />
      </div>

      <div className={css.logo}>
        <Image src = {Logo} alt="" width={100} height={100}/>
      </div>
    </div>
  )
}

export default Footer