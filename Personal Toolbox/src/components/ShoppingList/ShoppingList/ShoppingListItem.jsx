import './ShoppingListItem.css';

const ShoppingListItem = (props) => {
  return (
    <>
    <div className="item">
      <h4>{props.entry.title}</h4>
    </div>
    </>
  );
};

export default ShoppingListItem;
