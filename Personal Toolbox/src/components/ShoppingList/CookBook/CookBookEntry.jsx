import './CookBookEntry.css';

const CookBookEntry = (props) => {
  const onAddToListHandler = () => {
    props.shoppingList(props.entry);
  };
  const onRemoveFromCookbookHandler = () => {
    props.removeRecipe(props.entry.id)
  }
  return (
    <>
    <div className="cookbookentry">
      <h4>{props.entry.title}</h4>
      {props.entry.ingredients.map((ingredient) => (
        <p>
          {ingredient.ingredient} - {ingredient.amount} {ingredient.unit}
        </p>
      ))}
      <button onClick={onAddToListHandler}>Add to Shopping List</button>
      <button onClick={onRemoveFromCookbookHandler}>Remove from Cookbook</button>
    </div>
    </>
  );
};

export default CookBookEntry;
