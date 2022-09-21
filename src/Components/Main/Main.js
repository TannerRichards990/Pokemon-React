import React from 'react';
import usePokemon from '../../Hooks/usePokemon';
import PokemonCard from '../PokemonCard/PokemonCard';

export default function Main() {
  const { pokemon } = usePokemon();
  return (
    <div className='main'>
      {pokemon.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
      ))}
    </div>
  );
}

