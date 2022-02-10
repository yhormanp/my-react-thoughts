import axios from "axios";
import React, { useEffect, useState } from "react";
import { unstable_batchedUpdates } from "react-dom";
import PokeCard from "./PokeCard";
import "./PokemonList.css";
function PokemonsList() {
  const POKEMONS_URL = " https://pokeapi.co/api/v2/pokemon?limit=50&offset=200";
  const [pokemonsList, setPokemonsList] = useState([]);
  const [filterValue, setFilterValue] = useState();
  const [pokemonsFiltered, setPokemonsFiltered] = useState([]);

  useEffect(() => {
    const fetchPokemonsData = async () => {
      const data = await axios.get(POKEMONS_URL);
      console.log("val", data.data.results);

      const ListOfPendingCalls = data.data.results.map((value) => {
        return getPokemonData(value.name, value.url);
      });

      const resolvedData = await Promise.all(ListOfPendingCalls);
      console.log("val 2", resolvedData);
      unstable_batchedUpdates(() => {
        setPokemonsList(resolvedData);
        setPokemonsFiltered(resolvedData);
      });
    };

    const getPokemonData = async (pokemonName, url) => {
      const pokemonData = await axios.get(url);
      return {
        name: pokemonName,
        data: pokemonData.data,
      };
    };

    fetchPokemonsData();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let filteredList = [];

      if (filterValue !== undefined) {
        filteredList = pokemonsList.filter((data) => {
          return data.name.includes(filterValue);
        });
        
        setPokemonsFiltered(filteredList);
        console.log("checking after keypressed results", filterValue, filteredList);
      }
    }, 800);

    // if this effect run again, because `value` changed, we remove the previous timeout
    return () => clearTimeout(timeout);
  }, [filterValue]);

  return (
    <>
      <div className="pokedex-title">
        <label>Filter</label>
        <input
          type="text"
          maxLength="15"
          placeholder="Pokemon name"
          onChange={(e) => setFilterValue(e.target.value)}
        ></input>
      </div>
      <div className="poke-list">
        {pokemonsFiltered.length > 0 &&
          pokemonsFiltered.map((pokemonData) => {
            return (
              <PokeCard
                key={pokemonData.name}
                pokemonData={pokemonData}
              ></PokeCard>
            );
          })}
      </div>
    </>
  );
}

export default PokemonsList;
