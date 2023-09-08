import { useState } from "react";
import IngredientsComponent from "./IngredientsComponent";

function RecipesComponent({label, image, calories, ingredients}) {

    const [showIngredients, setShowIngredients] = useState(false);

    const clickedIngredients = () => {
        setShowIngredients(!showIngredients);
    }

    return(
        
        <div className="card">
            <div className="container">
                <img className="image" src={image} alt="recipe" />
            </div>

            <div className="container">
                <h3>{label}</h3>
            </div>

            <div className="container">
                <h4>Calories: {calories.toFixed()}</h4>
                <h4>Ingredients: {ingredients.length}</h4>
            </div>

            <div className="container">
                <button onClick={clickedIngredients} className="btn">{showIngredients? 'HIDE INGREDIENTS' : 'SHOW INGREDIENTS'}</button>
            </div>

            <div>
                {showIngredients? <IngredientsComponent ingredients={ingredients}/> : null}
            </div>

        </div>
        )
}

export default RecipesComponent;