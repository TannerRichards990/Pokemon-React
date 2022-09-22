import './Pokemonlist.css';
import PokemonCard from '../PokemonCard/PokemonCard';

export default function Pokemonlist({ pokemon }) {
  return (
    <div className="pokelist">
      {pokemon.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}