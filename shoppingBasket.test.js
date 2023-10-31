const ShoppingBasket = require('./shoppingBasket')
const Candy = require('./candy')

jest.mock('./candy')

describe('ShoppingBasket', () => {
    it('constructs with items = []', () => {
        basket = new ShoppingBasket()
        expect(basket.items).toEqual([])
    })
})

describe('ShoppingBasket', () => {
    it('returns 0 with basket.getTotalPrice() when new ShoppingBasket() created', () => {
        basket = new ShoppingBasket()
        expect(basket.getTotalPrice()).toEqual(0)
    })
})

describe('ShoppingBasket', () => {
    it("returns 4 with basket.getTotalPrice() when items = [{name: 'Mars', price: 2}, {name: 'Skittle', price: 2}]", () => {
        basket = new ShoppingBasket()
        basket.items = [{name: 'Mars', price: 2}, {name: 'Skittle', price: 2}]
        expect(basket.getTotalPrice()).toEqual(4)
    })
})

describe('ShoppingBasket', () => {
    it("returns items = [{name: 'Mars', price: 2}] with basket.addItem({name: 'Mars', price: 2})", () => {
        basket = new ShoppingBasket()
        candy = {name: 'Mars', price: 2}
        basket.addItem(candy)
        expect(basket.items).toEqual([{name: 'Mars', price: 2}])
    })
})