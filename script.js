let pokemonContainer = document.getElementById('pokemon_container');
let pokemonsLimit = 899;

async function renderPokemons() {
  for (let i = 1; i < pokemonsLimit; i++) {
    await getPokemonsData(i);
  }
}

async function getPokemonsData(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const respone = await fetch(url);
  const pokemonAsJson = await respone.json();
  pokemon = pokemonAsJson;
  console.log(pokemon);
  genratePokemonCard(pokemon);
}


function genratePokemonCard(pokemon) {
  let pokemonID = pokemon['id'].toString().padStart(3, '0');
  let pokemonElement = document.createElement('div');
  pokemonElement.classList.add('pokemon');

  pokemonInnerHTML = /*html*/ `


 <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonID}.png' class ="pokemon-img" alt="">

    <span>${pokemon['name']}</span>
    <span>#${pokemonID}</span>
    `;

  pokemonElement.innerHTML = pokemonInnerHTML;
  pokemonContainer.appendChild(pokemonElement);
}
