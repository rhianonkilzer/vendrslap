

export default class Vendmachine {
    constructor(data) {
        this.name = data.name
        this.transactionTotal = 0
        this.acceptableCurrency  = {
            quarter: .25,
            dime: .10,
            nickel: .05
        }
        this.foodItems = data.foodItems 
        this.machineTotal = data.machineTotal = 10
    }
}

