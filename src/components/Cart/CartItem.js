import classes from './CartItem.module.css'

export const CartItem = ({amount, name, onAdd, onRemove, price}) => {
  const priceItem = `$${price.toFixed(2)}`

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{priceItem}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onAdd}>+</button>
        <button onClick={onRemove}>−</button>
      </div>
    </li>
  )
}