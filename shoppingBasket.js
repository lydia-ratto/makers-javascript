class ShoppingBasket {

    constructor() {
        this.items = []
    }

    getTotalPrice() {
        let sum = 0
        for (let i = 0; i < this.items.length; i ++) {
            sum += this.items[i].price
        }
        return sum
    }

    addItem(candy) {
        this.items.push(candy)
    }

}

module.exports = ShoppingBasket