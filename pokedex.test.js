const Pokedex = require('./pokedex')
const fetchPokemon = require('./api')

describe('Pokedex', () => {
    it('constructs with empty list', () => {
        const pokedex = new Pokedex()
        expect(pokedex.list).toEqual([])
    })
})

describe('Pokedex', () => {
    it("returns [ {name: 'pikachu', id: 25, height: 4, weight: 60, types: [ { slot: 1, type: [Object] } ]}] with pokedex.all() and pikachu added to list", 
    () => {
        pokedex = new Pokedex()
        pokedex.list = [ {name: 'pikachu', id: 25, height: 4, weight: 60, types: [ { slot: 1, type: [Object] } ]}]
        expect(pokedex.all()).toEqual([ {name: 'pikachu', id: 25, height: 4, weight: 60, types: [ { slot: 1, type: [Object] } ]}])
    })
})

describe('Pokedex', () => {
    it("list = [ {name: 'pikachu', id: 25, height: 4, weight: 60, types: [ { slot: 1, type: [Object] } ]}] with pokedex.catch('pikatchu')", 
    async () => {
        pokedex = new Pokedex()
        await pokedex.catch('pikachu')
        const pokemonList = await Promise.all(pokedex.all());
        expect(pokemonList).toEqual([ {name: 'pikachu', id: 25, height: 4, weight: 60, types: "electric"}])
    })
})