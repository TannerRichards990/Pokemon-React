


export async function fetchPokemon(page, perpage) {
  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?page=${page}&perPage=${perpage}`);
  const data = await resp.json();
  return data.results;
}


export async function fetchTypes() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await resp.json();
  return data;
}
  
export async function fetchPokemonByType(type) {
  let fetch_url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
  if (type !== 'all') {
    const params = new URLSearchParams();
    params.set('type', type);
    fetch_url += `?${params.toString()}`;
  }
  const resp = await fetch(fetch_url);
  const data = await resp.json();
  return data.results;
}

