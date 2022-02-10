import React from 'react'
import PokemonsList from './PokemonsList'

function PokedexContainer() {
    return (
        <div>
            <h1 className="pokedex-title">Pokemon List</h1>
            <PokemonsList ></PokemonsList>
        </div>
    )
}

export default PokedexContainer
