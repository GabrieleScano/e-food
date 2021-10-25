import React from 'react'

export const CartContext = React.createContext({
    items: [],
    totamAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
})