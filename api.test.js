const fetchPokemon = require('./api')


describe('fetchPokemon', () => {
    it('can fetch the data for pikachu', (done) => {
        fetchPokemon('pikachu').then((pokemon) => {
        expect(pokemon.name).toBe('pikachu')
        done()
    })
    })
})