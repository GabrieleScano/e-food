import React from 'react'
import classes from './Input.module.css'

export const Input = React.forwardRef(({input, label}, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={input.id}>{label}</label>
            <input ref={ref} {...input} />
        </div>
    )  
})
 