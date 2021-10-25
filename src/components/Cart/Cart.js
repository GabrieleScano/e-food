import classes from './Cart.module.css'

export const Cart = (props) => {

    const cartItems = [
        {
            id: 'c1',
            name: 'sushi',
            amount: 2,
            price: 12.99
        }
    ]

    return (
        <>
            <ul className={classes['cart-items']}>
                {
                    cartItems.map(item => (
                        <li>{item.name}</li>
                    ))
                }
            </ul>

            <div>
                <span>Total Amount</span>
                <span>35.44</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </>
    )
}
