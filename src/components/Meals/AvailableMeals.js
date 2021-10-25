import { DUMMY_MEALS } from '../../data/dummy-meals'
import classes from './AvailableMeals.module.css'

export const AvailableMeals = () => {
    return (
        <section className={classes.meals}>
        <ul>
              {
                    DUMMY_MEALS.map(meal => (
                        <li>{meal.name}</li>
                    ))
                }
            </ul>
        </section>
    )
}
