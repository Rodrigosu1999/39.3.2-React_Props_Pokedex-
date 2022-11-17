import React from "react";
import Pokecard from "./Pokecard"
import defaultPokemons from "../helpers/defaultPokemons"
import "../styles/Pokedex.css"

const Pokedex = ({pokemon = defaultPokemons}) => {
    return (
        <div className="Pokedex">
            <h1 className="Pokedex-title">Pokedex</h1>
            <div className="Pokedex-cards">{pokemon.map(p => 
                <Pokecard id={p.id} name={p.name} type={p.type}/>)}
            </div>
        </div>
    );
}

export default Pokedex;