import React from "react";
import './App.css';
import './helpers/recipes'
import { useEffect,useState } from "react";



var contador = 0

const Recipe = ({title, id, image, ingredients, }) => {
    const [likes,setLikes] = useState(null);
    const [detail, setDetail] = useState(false)
    useEffect(()=> {
        uwu()
    },[])
    const uwu = async () => {
        const response = await fetch(`http://localhost:4000/recipe/${id}`)
        const body = await response.json()
        console.log(body);
        setLikes(body.likes);
    }
    const lafuncion = async (value) => {
        fetch(`http://localhost:4000/recipe/${id}/like/${value}`)

        if (contador ===0) {
            setLikes(((likes + value)/2).toFixed([1]));
            

            
        }

    }
    return(
        <div className="recipes">
            <h1>{title }</h1>
            <img src={image} alt={title + " image"}  onClick={()=>setDetail(!detail)} />
            <ol className="lista" style={{ display: detail ? "block" : "none"}}>
            {ingredients.map(ingredient => (<li>{ingredient.text}</li>))}
            </ol>
                <div className="uwuclase">
                    <a className="s1" onClick={()=>lafuncion(5)}>★</a>
                    <a className="s2" onClick={()=>lafuncion(4)}>★</a>
                    <a className="s3" onClick={()=>lafuncion(3)}>★</a>
                    <a className="s4" onClick={()=>lafuncion(2)}>★</a>
                    <a className="s5" onClick={()=>lafuncion(1)}>★</a>
                    <a>{likes}</a>
                </div>
        </div>
    );
};

export default Recipe;