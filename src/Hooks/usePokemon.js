import { useState, useEffect } from 'react';
import { fetchPokemon } from '../services/pokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [type, setType] = useState('');
  const [sort, setSort] = useState('false');
  const [searchPokemon, setSearchPokemon] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPokemon();

        setPokemon(data);

        setLoading(false);
      }
      catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };
    loadData();
  }, []);
  return { pokemon };
}