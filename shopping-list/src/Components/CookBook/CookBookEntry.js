import "./CookBookEntry.css";

const CookBookEntry = (props) => {
  const onButtonClickHandler = () => {
    props.shoppingList(props.entry);
  };
  return (
    <div className="cookbookentry">
      <h4>{props.entry.title}</h4>
      {props.entry.ingredients.map((ingredient) => (
        <p>
          {ingredient.ingredient} - {ingredient.amount} {ingredient.unit}
        </p>
      ))}
      <button onClick={onButtonClickHandler}>Add to List</button>
    </div>
  );
};

export default CookBookEntry;
