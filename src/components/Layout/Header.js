import mealsImage from '../../assets/meals.jpeg'
import classes from './Header.module.css'
import { HeaderCartButton } from './HeaderCartButton'

export const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>React App</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table of food" />
      </div>
    </>
  )
}
