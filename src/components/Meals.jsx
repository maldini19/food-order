import useHttp from "../hooks/useHttp";
import Error from "./Error";
import MealItem from "./MealItem";

const requestConfig = {}

export default function Meals() {
  const {
    data: loadMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  console.log(loadMeals);
  

  if (isLoading) {
    return <p className="center">Loading...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />
  }
  

  return (
    <ul id="meals">
      {loadMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
