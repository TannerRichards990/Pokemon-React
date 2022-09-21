import React from 'react';

export default function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <h2>Name: {pokemon.pokemon}</h2>
      <h2>Type 1: {pokemon.type_1}</h2>
      <h2>Type 2: {pokemon.type_2}</h2>
      <h2>HP: {pokemon.hp}</h2>
      <img src={pokemon.url_image} alt={pokemon.pokemon} />
    </div>
  );
}

