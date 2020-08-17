import React from "react";
import './App.css';

const Recipe = ({title, image, ingredients}) => {
    return(
        <div className="recipes">
            <h1>{title}</h1>
            <img src={image} alt=""/>
            <ol>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
        </div>
    );
};

export default Recipe;