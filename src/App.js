import React,{useEffect, useState} from 'react';
import Recipe from './Recipe'
import './App.css';
import { recipeIdGenerator } from './helpers/recipes';

const App = () => {
  const APP_ID = "9d6efabe";
  const APP_KEY = "aa89ecf1578aafaaebe3ef88e62dc566";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('Empanadas');



  useEffect(() =>{
   getRecipes();
   // eslint-disable-next-line
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return(
    <div className="app">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit"> UWU </button>                                                                      
      </form>
      <div className="recipes-container">
        {recipes.map((recipe, idx) =>(
          <Recipe
          key={"recipe-" + idx}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          id={recipeIdGenerator(recipe.recipe)}  
          
          />
        ))}
      </div>
    </div>
  );
};

export default App;
