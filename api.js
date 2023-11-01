const Pokemon = require('./pokemon')

function fetchPokemon(pokemon) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => {
            if (response.status === 404) {
                throw new Error(`Pokemon ${pokemon} not found.`);
            }
            return response.json()
        }).then((data) => {
            const pokemon = new Pokemon(data.name, data.id, data.height, data.weight, data.types[0]['type']['name'])
            return pokemon
        })
}

module.exports = fetchPokemon