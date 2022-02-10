import axios from 'axios';
import React, {useEffect, useState } from 'react'
import PokeCard from './PokeCard';
import './PokemonList.css'
function PokemonsList() {
    const POKEMONS_URL = ' https://pokeapi.co/api/v2/pokemon?limit=50&offset=200';
    const [pokemonsList, setPokemonsList] = useState([]);

    useEffect(() => {
        const fetchPokemonsData = async() => {
            const data = await axios.get(POKEMONS_URL)
            console.log('val', data.data.results);  

            const ListOfPendingCalls = data.data.results.map(value => {
                return getPokemonData(value.name, value.url);
            })


            const resolvedData = await Promise.all(ListOfPendingCalls);
            console.log('val 2', resolvedData)
            setPokemonsList(resolvedData);


        }

        const getPokemonData = async (pokemonName, url) => {
            const pokemonData = await axios.get(url);
            return {
                name: pokemonName,
                data: pokemonData.data
            }

        }

        fetchPokemonsData();
    }, [])
    return (
        <div className="poke-list">
            {pokemonsList.length > 0 &&  pokemonsList.map( pokemonData => {
                return (
                    <PokeCard pokemonData={pokemonData}></PokeCard>
                )
            })
           
        }
        </div>
    )
}

export default PokemonsList
