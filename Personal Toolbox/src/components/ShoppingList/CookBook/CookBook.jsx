import './CookBook.css';
import CookBookEntry from './CookBookEntry';
const CookBook = (props) => {
  return (
    <>
    <div className="cookbook">
      <h3>Cookbook</h3>
      <div className="cookbookentries">
        {props.recipes.map((recipe) => (
          <CookBookEntry
            entry={recipe}
            shoppingList={props.onSaveShoppingList}
            removeRecipe={props.onRemoveRecipe}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default CookBook;
