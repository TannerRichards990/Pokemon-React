import PokemonCard from '../PokemonCard/PokemonCard';

export default function PokeList({ pokemonList }) {

  return (
    <div className="pokelist">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

