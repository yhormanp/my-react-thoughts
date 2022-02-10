import React from "react";
import "./PokeCard.css";
function PokeCard({ pokemonData }) {
  return (
    <div  className={`poke-container ${pokemonData.data.types[0].type.name}`}>
      <section className="poke-img">
        <img
          src={pokemonData.data.sprites.front_shiny}
          alt={pokemonData.name}
        ></img>
      </section>
      <div className="poke-id">
        <span>#{pokemonData.data.id}</span>
      </div>
      <span className="poke-title">{pokemonData.name}</span>
      <span className="poke-type">
        type: {pokemonData.data.types[0].type.name}
      </span>
    </div>
  );
}

export default PokeCard;
