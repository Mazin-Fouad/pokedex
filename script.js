let pokemonsLimit = 29;
let pokemon;
let allPokemons = [];
let pokemonContainer = document.getElementById('pokemon_container');
let colors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};
let mainTypes = Object.keys(colors);

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
  allPokemons.push(pokemon);
  //console.log(allPokemons);
  //console.log(pokemon);
  genratePokemonCard(pokemon, id);
}

function genratePokemonCard(pokemon, id) {
  let pokemonName = pokemon['name'].charAt(0).toUpperCase() + pokemon['name'].slice(1);
  let pokemonID = pokemon['id'].toString().padStart(3, '0'); //add 3x 0 to the ID
  let pokemonTypes = pokemon['types'].map((element) => element['type']['name']); // extract types and put it in new array
  let type = mainTypes.find((type) => pokemonTypes.indexOf(type) > -1);
  let backgroundColors = colors[type];
  pokemonElement = document.createElement('div');
  pokemonElement.classList.add('pokemon');
  pokemonElement.style.background = backgroundColors;
  pokemonInnerHTML = pokemonCardsHTML(pokemonID, pokemonName, type, id);
  pokemonElement.innerHTML = pokemonInnerHTML;
  pokemonContainer.appendChild(pokemonElement);
}

function openPopup(i) {
  pokemonContainer.style.display = 'none';
  document.getElementById('pokemon_popup').classList.remove('d-none');
  document.getElementById('header').classList.add('d-none');
  document.getElementById('pokemon_image').src = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${i}.svg`;
  document.getElementById('base_experience').innerHTML = `Experience: ${allPokemons[i]['base_experience']}`;
  document.getElementById('height').innerHTML = `Height: ${allPokemons[i]['height']} CM`;
  document.getElementById('weight').innerHTML = `Weight: ${allPokemons[i]['weight']} KG`;
}

function closePopup() {
  pokemonContainer.style.display = '';
  document.getElementById('header').classList.remove('d-none');
  document.getElementById('pokemon_popup').classList.add('d-none');
}


/*  todoS
function filterPokemons() {
  let query = document.getElementById('search_field').value;
  let filtedResults = allPokemons.filter(function (name) {
    return name.allPokemons.includes(query);
  });
  console.log(filtedResults);
} 
 */