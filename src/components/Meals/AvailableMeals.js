import { DUMMY_MEALS } from '../../data/dummy-meals'
import { Card } from '../UI/Card'
import classes from './AvailableMeals.module.css'
import { MealItem } from './MealItem'

export const AvailableMeals = () => {

  const mealsList = DUMMY_MEALS.map((meal) => (
  <MealItem
    id={meal.id}
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
  />
))
    return (
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    );
}
