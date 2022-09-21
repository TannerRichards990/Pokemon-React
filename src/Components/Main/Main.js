import React from 'react';
import { usePokemon } from '../../Hooks/usePokemon';

export default function Main() {
  const { pokemon, } = usePokemon();
  return (
    <div>
      {pokemon.map((pokemon) => (
        <div key={pokemon.id}>
          <h2>{pokemon.pokemon}</h2>
          <h2>{pokemon.type_1}</h2>
          <img src={pokemon.url_image} alt={pokemon.pokemon} />
        </div>
      ))}
    </div>
  );
}

