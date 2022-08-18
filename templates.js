function pokemonCardsHTML(pokemonID, pokemonName, type, i){
    return /*html*/ `
    <div class ="pokemon-img-container" onclick ="openPopup(${i})">
      <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonID}.png' class ="pokemon-img">
    </div>
    
    <div class="pokemon-info-container" >
    <span class="pokemon-id">#${pokemonID}</span>
    <h3 class="pokemon-name">${pokemonName}</h3>
    <span class= pokemon-type>Type: ${type}</span>
    </div>
     `;
}