import modules from "./meals-grid.module.css";

const MealsGrid = ({ meals }) => {
  return (
    <ul className={modules.meals}>
      {meals.map((meal) => (
        <li key={meal.id}></li>
      ))}
    </ul>
  );
};

export default MealsGrid;
