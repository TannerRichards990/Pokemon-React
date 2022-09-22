import React from 'react';
import usePokemon from '../../Hooks/usePokemon';
import Filter from '../Filter/Filter';
import Pokelist from '../PokeList/Pokemonlist';


export default function Main() {
  const { pokemon, types, type, setType, } = usePokemon();
  return (
    <div className="main">
      <Filter types={types} type={type} setType={setType} />
      <Pokemonlist pokemon={pokemon} />
    </div>
  );
}




