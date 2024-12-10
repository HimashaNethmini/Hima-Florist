import css from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <div className={css.container}>

        <div className={css.left}>
            <span>Prettier than ever</span>
        </div>

        <div className={css.right}></div>
    </div>
  )
}

export default Hero