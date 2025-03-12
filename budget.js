let income = 2500
let rent = 1000
let groceries = 300
let utilities = 500

let totalExpenses = rent + groceries + utilities
let remainingMoney = totalExpenses - income

let RentP = Math.max((rent / income) * 100,0)
let GroceriesP = Math.max((groceries / income) * 100,0)

console.log(RentP)
console.log(GroceriesP)
