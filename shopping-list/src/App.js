import "./App.css";
import Header from "./Components/Header";
import RecipeForm from "./Components/RecipeForm";
import CookBook from "./Components/CookBook/CookBook";
import ShoppingList from "./Components/ShoppingList/ShoppingList";
import { useState, useEffect } from "react";
function App() {
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
    <div className="App">
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
  );
}

export default App;
