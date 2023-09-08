import { useEffect, useState } from 'react';
import './App.css';
import search from './search.png'
import RecipesComponent from './RecipesComponent';

function App() {

  const MY_ID = "2a412a4c";
  const MY_KEY = "51d562095855d3b8cf556378d862e982";

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [submitted, setSumbitted] = useState('');

  useEffect(() => {
    const getRecipe = async () => {
      const responce = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${submitted}&app_id=${MY_ID}&app_key=${MY_KEY}&health=vegan`);
      const data = await responce.json();
      setMyRecipes(data.hits);
    }
    getRecipe();
  }, [submitted])

  const recipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setSumbitted(mySearch);
  }

  return (
    <div >
      <div className='container'>
        <h1>Vegan Recipes</h1>
      </div>

      <form className='container' onSubmit={finalSearch}>
        <input type="text" placeholder='Search...' onChange={recipeSearch} value={mySearch}/>
        <button className='btn' onClick={finalSearch}>
          <img className='search' src={search} alt="search" />
        </button>
      </form>

      <div className="box">
        {myRecipes.map((element, index) => (
          <RecipesComponent 
          key={index} 
          label={element.recipe.label} 
          image={element.recipe.image}
          calories={element.recipe.calories} 
          ingredients={element.recipe.ingredientLines}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
