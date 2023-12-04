import './ShoppingListHome.css'
import Header from './Header.jsx'
import RecipeForm from './RecipeForm.jsx'
import CookBook from './CookBook/CookBook.jsx'
import ShoppingList from './ShoppingList/ShoppingList.jsx'
import { useState, useEffect } from "react";
function ShoppingListHome() {
  const [enteredRecipes, setEnteredRecipes] = useState(JSON.parse(window.localStorage.getItem("recipes")) || []);
  const [enteredShopList, setEnteredShopList] = useState([]);

  const saveRecipeHandler = (enteredRecipe) => {
    setEnteredRecipes((arr) => [...arr, enteredRecipe]);
  };

  const saveShopListHandler = (shoppingListItem) => {
    setEnteredShopList((arr) => [...arr, shoppingListItem]);
  };

  const removeRecipeHandler = (id) => {
    const newRecipeList = enteredRecipes.filter((enteredRecipe) => enteredRecipe.id !== id);
    setEnteredRecipes(newRecipeList);
  }

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(enteredRecipes));
  }, [enteredRecipes]);

  useEffect(() => {
    const recipes = JSON.parse(window.localStorage.getItem("recipes"));
    if (recipes) {
      setEnteredRecipes(recipes);
    }
  }, []);

  return (
    <>
    <div className="ShoppingListHome">
      <Header></Header>
      <div className="container">
        <div className="main">
          <RecipeForm onSaveRecipe={saveRecipeHandler}></RecipeForm>
          <CookBook
            recipes={enteredRecipes}
            onSaveShoppingList={saveShopListHandler}
            onRemoveRecipe={removeRecipeHandler}
          ></CookBook>
        </div>
        <div className="sidebar">
          <ShoppingList list={enteredShopList}></ShoppingList>
        </div>
      </div>
    </div>
    </>
  );
}

export default ShoppingListHome;
