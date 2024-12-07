import React from 'react'
import css from '../styles/Header.module.css'
import Logo from "../assets/Logo.png";
import { UilShoppingBag } from '@iconscout/react-unicons'

const Header = () => {
  return (
    <div className={css.header}>

      {/* logo side */}
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50} />
        <span>Hima Florist</span>
      </div>

      {/* menu bar */}
      <ul className={css.menu}>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>

      {/*  cart side*/}
      <div className={css.cartSide}>
        <div className={css.cart}>
          <UilShoppingBag />
        </div>
      </div>
    </div>
  )
}

export default Header