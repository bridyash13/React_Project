import MealSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import { Fragment } from "react/cjs/react.production.min";

const Meals = () => {
  return (
    <Fragment>
      <MealSummary></MealSummary>
      <AvailableMeals></AvailableMeals>
    </Fragment>
  );
};

export default Meals;
