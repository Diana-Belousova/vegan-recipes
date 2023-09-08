import { useState } from "react";
import IngredientsComponent from "./IngredientsComponent";
import icon from './link.png';

function RecipesComponent({label, image, calories, ingredients, link}) {

    const [showIngredients, setShowIngredients] = useState(false);

    const clickedIngredients = () => {
        setShowIngredients(!showIngredients);
    }

    return(
        
        <div className="card">
            <div className="container" >
                <img className="image" src={image} alt="recipe" />
            </div>

            <div className="container">
                <h3>{label}
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <img className="icon" src={icon} alt="link" title="Full Recipe" />
                    </a>
                </h3>
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

            <div>
            </div>

        </div>
        )
}

export default RecipesComponent;