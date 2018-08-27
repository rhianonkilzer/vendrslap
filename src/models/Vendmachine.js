

export default class Vendmachine {
    constructor(data) {
        this.transactionTotal = data.transactionTotal = 0
        this.acceptableCurrency = data.acceptableCurrency = {
            quarter: .25,
            dime: .10,
            nickel: .05
        }
        this.foodItems = data.foodItems = [{
            id: 'Cheetos',
            img: 'cheetos-crunchy-cheese.png',
            price: 1.50,
            quantity: 10

        }, {
            id: 'Mountain Dew',
            img: 'mountain-dew-soda.jpg',
            price: .50,
            quantity: 30
        }, {
            id: 'KitKat',
            img: 'kitkat.jpg',
            price: 1.00,
            quantity: 10
        }]
        this.machineTotal = data.machineTotal = 10
    }
}

