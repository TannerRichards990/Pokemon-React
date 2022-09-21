import { useState, useEffect } from 'react';
import { fetchFiltered, fetchTypes } from '../services/pokemon';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState('');
  const [type, setType] = useState('all');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('pokemon');


  useEffect(() => {
    const getTypes = async () => {
      const allTypes = await fetchTypes();
      setTypes('all', ...allTypes);
    };
    getTypes();
  }, []);


  useEffect(() => {
    const getFiltered = async () => {
      const pokemon = await fetchFiltered({ type, query, page, setPage, sortBy, sortOrder });
      setPokemon(pokemon);
      setLoading(false);
    };
    getFiltered();
  }, [type, query, page, setPage, sortBy, sortOrder]);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(search);
  }

  if (loading) return <h1>Loading...</h1>;

}







