import { useState, useEffect } from 'react';
import { fetchPokemon, fetchPokemonByType, fetchTypes } from '../services/pokemon';

export default function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [type, setType] = useState('all');
  const [types, setTypes] = useState([]);
  
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

  useEffect (() => {
    const loadData = async () => {
      try {
        const data = await fetchPokemonByType(type);
        setPokemon(data);
      }
      catch (e) {
        console.error(e);
      }
    };
    loadData();

  }, [type]);

  useEffect (() => {
    const loadData = async () => {
      try {
        const data = await fetchTypes();
        const typesArr = [];
        data.map(type => {
          typesArr.push(type.type);
        });


        setTypes(typesArr);
      }
      catch (e) {
        console.error(e);
      }
    };
    loadData();

  }, []);

  return { pokemon, setType, types };
}









