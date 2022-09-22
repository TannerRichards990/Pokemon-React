import './Pokemonlist.css';
import PokemonCard from '../PokemonCard/PokemonCard';

export default function Pokelist({ pokemonList }) {
  return (
    <div className="pokelist">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
}