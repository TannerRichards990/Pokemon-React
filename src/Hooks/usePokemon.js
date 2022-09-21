import { useState, useEffect } from 'react';
import { fetchFiltered, fetchTypes } from '../services/pokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState('');
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const getTypes = async () => {
      const allTypes = await fetchTypes();
      setTypes('all', ...allTypes);
    };
    getTypes();
  }, []);


  useEffect(() => {
    const getFiltered = async () => {
      const pokemon = await fetchFiltered({ types, query, });
      setPokemon(pokemon);
      setLoading(false);
    };
    getFiltered();
  }, [types, query]);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(search);
  }

  if (loading) return <h1>Loading...</h1>;

}







