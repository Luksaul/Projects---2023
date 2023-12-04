import { useState } from "react";
import "./ShoppingList.css";
import ShoppingListItem from "./ShoppingListItem";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ShoppingList = (props) => {
  const [shoppingList, setShoppingList] = useState("");
  const onButtonClickHandler = () => {
    const map = new Map();
    let i = 0;
    while (i < props.list.length) {
      let j = 0;
      while (j < props.list[i].ingredients.length) {
        var total = 0;
        if (map.has(props.list[i].ingredients[j].ingredient)) {
          total =
            parseInt(map.get(props.list[i].ingredients[j].ingredient)) +
            parseInt(props.list[i].ingredients[j].amount);
        } else {
          total = parseInt(props.list[i].ingredients[j].amount);
        }
        if (total > 0) {
          map.set(
            props.list[i].ingredients[j].ingredient,
            total + " " + props.list[i].ingredients[j].unit
          );
        }
        j++;
      }
      i++;
    }

    var shoppingList = "";
    map.forEach(function (value, key) {
      shoppingList += key + " " + value + "\n";
    });
    setShoppingList(shoppingList);
  };

  return (
    <div className="shoppinglist">
      <h3>Shopping List</h3>
      {props.list.map((item) => (
        <ShoppingListItem entry={item} />
      ))}

      <CopyToClipboard
        text={shoppingList}
        onCopy={() => alert("Copied!")}
        onClick={onButtonClickHandler}
      >
        <button>Print List</button>
      </CopyToClipboard>
    </div>
  );
};

export default ShoppingList;
