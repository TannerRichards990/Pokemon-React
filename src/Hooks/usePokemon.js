import { useState, useEffect } from 'react';
import { fetchPokemon } from '../services/pokemon';

export default function usePokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPokemon();
        setPokemon(data);
      }
      catch (e) {
        console.error(e);
      }
    };
    loadData();
  }, []);
  return { pokemon };
}








