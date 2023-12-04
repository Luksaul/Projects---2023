import './IngredientSelect.css';

const IngredientSelect = () => {

    return (
        <>
        <select>
            <option value="pinch(es)">pinch(es)</option>
            <option value="teaspoon(s)">teaspoon(s)</option>
            <option value="tablespoon(s)">tablespoon(s)</option>
            <option value="cup(s)">cup(s)</option>
            <option value="pound(s)">pound(s)</option>
            <option value="gram(s)">gram(s)</option>
            <option value="ounce(s)">ounce(s)</option>
            <option value="can(s)">can(s)</option>
            <option value="unit(s)">unit(s)</option>
        </select>
        </>
    );
}

export default IngredientSelect;