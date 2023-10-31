const Candy = require('./candy')

describe('Candy', () => {
    it("constructs as {name: 'Mars', price: 2} when new Candy('Mars', 2)", () => {
        expect(new Candy('Mars', 2)).toEqual({name: 'Mars', price: 2})
    })
})

describe('Candy', () => {
    it("returns 'Mars' whith candy.getName() and candy = {name: 'Mars', price: 2}", () => {
        candy = new Candy('Mars', 2)
        expect(candy.getName()).toEqual('Mars')
    })
})

describe('Candy', () => {
    it("returns 2' whith candy.getPrice() and candy = {name: 'Mars', price: 2}", () => {
        candy = new Candy('Mars', 2)
        expect(candy.getPrice()).toEqual(2)
    })
})