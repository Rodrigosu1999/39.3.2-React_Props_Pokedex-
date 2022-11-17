import React from "react";
import "../styles/Pokecard.css"

// id.png will be added to the end
const apiUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

//Card that displays the pokemon's information
const Pokecard = ({name, type, id}) => {
    const pokemonImg = apiUrl + `${id}.png`
    return (
        <div className="Pokecard">
            <h3 className="Pokecard-title">{name}</h3>
            <img className="Pokecard-img" src={pokemonImg} />
            <p className="Pokecard-type">Type: {type}</p>
        </div>
    );
}

export default Pokecard;