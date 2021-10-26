import { useContext } from 'react'
import { CartContext } from '../../store/cart-context'
import classes from './MealItem.module.css'
import { MealItemForm } from './MealItemForm'

export const MealItem = ({id, name, price, description}) => {
    
    const cartCtx = useContext(CartContext)
    const priceMeal = `$${price.toFixed(2)}`

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: id,
            name: name,
            amount: amount,
            price: price
        })

    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{priceMeal}</div>
            </div>
            <div>
                <MealItemForm id={id} onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}
