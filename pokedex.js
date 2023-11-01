const fetchPokemon = require('./api')

class Pokedex {

    constructor() {
        this.list = []
    }

    catch(pokemon) {
        this.list.push(fetchPokemon(pokemon))
    }

    all() {
        return this.list
    }
}

module.exports = Pokedex