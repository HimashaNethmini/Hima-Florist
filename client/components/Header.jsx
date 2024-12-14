import css from '../styles/Header.module.css'
import Logo from "../assets/1.png"
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Image from 'next/image'

const Header = () => {
  return (
    <div className={css.header}>

      {/* logo side */}
      <div className={css.logo}>
        <Image src={Logo} alt="" width={150} height={150} />
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
          <MdOutlineAddShoppingCart size={45} />
          <div className={css.badge}>2</div>
        </div>
      </div>
    </div>
  )
}

export default Header