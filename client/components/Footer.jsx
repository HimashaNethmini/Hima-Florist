import React from 'react'
import css from '../styles/Footer.module.css'
import { UilFacebook, UilGithub, UilX } from '@iconscout/react-unicons'
import Image from "next/image";

const Footer = () => {
  return (
    <div className={CSS.container}>
      <span>ALL RIGHTS RESERVED</span>
      <div className={css.social}>
        <UilFacebook size={35} />
        <UilX size={35} />
        <UilGithub size={35} />
      </div>

      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>Hima Florist</span>
      </div>
    </div>
  )
}

export default Footer