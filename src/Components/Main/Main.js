import React from 'react';
import usePokemon from '../../Hooks/usePokemon';
import Filter from '../Filter/Filter';
import PokeList from '../Pokelist/Pokelist';


export default function Main() {
  const { pokemon, types, selectedType, setSelectedType } = usePokemon();
  console.log(types);
  return (
    <div className="main">
      <Filter types={types} selectedType={selectedType} setSelectedType={setSelectedType} />
      <pokeList pokeList={pokemon} />
    </div>
  );
}




