import { useState, useEffect } from 'react';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [type, setType] = useState('');
  const [sort, setSort] = useState('false');
  const [searchPokemon, setSearchPokemon] = useState('');
  const [loading , setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = () => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(data => setPokemon(data.results));
    };
    loadData();
  }, []);
  return { loading };
}