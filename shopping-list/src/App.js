import "./App.css";
import Header from "./Components/Header";
import RecipeForm from "./Components/RecipeForm";
import CookBook from "./Components/CookBook/CookBook";
import ShoppingList from "./Components/ShoppingList/ShoppingList";
import { useState, useEffect } from "react";
function App() {
  const [enteredRecipes, setEnteredRecipes] = useState([]);
  const [enteredShopList, setEnteredShopList] = useState([]);

  const saveRecipeHandler = (enteredRecipe) => {
    setEnteredRecipes((arr) => [...arr, enteredRecipe]);
  };

  const saveShopListHandler = (shoppingListItem) => {
    setEnteredShopList((arr) => [...arr, shoppingListItem]);
  };

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(enteredRecipes));
  }, [enteredRecipes]);

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem("recipes"));
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
