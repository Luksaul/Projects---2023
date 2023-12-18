import './Todo.css';
import { useState} from "react";

const Todo = (props) => {

    const [checked, setChecked] = useState(false);

    const checkedHandler = () => {
        setChecked(checked === false ? true : false);
      };

    return (
        <>
        <p
        onClick={checkedHandler}
        className={checked ? "checked" : ""}
        >{props.todoObj.text}</p>
        </>
    );
}

export default Todo;