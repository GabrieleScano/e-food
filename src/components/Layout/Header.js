import mealsImage from '../../assets/meals.jpeg'
import classes from './Header.module.css'
import { HeaderCartButton } from './HeaderCartButton'

export const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>eFood</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src="https://media.istockphoto.com/photos/thanksgiving-party-table-setting-traditional-holiday-stuffed-turkey-picture-id1268544544?b=1&k=20&m=1268544544&s=170667a&w=0&h=J5F56fvQ8jeuUG4HRs3Ngj0g6JBooX0pCq8UVMMKMf4=" alt="Table of food" />
      </div>
    </>
  )
}
