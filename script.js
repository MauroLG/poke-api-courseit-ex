const fetchData = async (e) => {
  if (e.key === 'Enter') {
    const pokeName = document.getElementById('poke-search').value.toLowerCase();
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    const json = await data.json();

    document.getElementById('poke-name').innerText = json.name;
    document
      .getElementById('poke-image')
      .setAttribute(
        'src',
        json.sprites.other['official-artwork'].front_default
      );
    document.getElementById('poke-search').value = '';
    // console.log(json.name);
    // console.log(json.sprites.other['official-artwork'].front_default);
  }
};
