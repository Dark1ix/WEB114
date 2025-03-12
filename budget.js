/*Somtochukwu Onyenagubo - 3/11/25*/
let income = 2500
let rent = 1000
let groceries = 300
let utilities = 500

let totalExpenses = rent + groceries + utilities
let remainingMoney = totalExpenses - income

let RentP = Math.max((rent / income) * 100,0)
let GroceriesP = Math.max((groceries / income) * 100,0)

console.log( "The total income was: " +   income.toLocaleString("en-US", {style: "currency", currency: "USD", }));
console.log( "The grocery total was: " +  groceries.toLocaleString("en-US", { style: "currency", currency:"USD" }));
console.log( "The rent amount was: " +   rent.toLocaleString("en-US", {style: "currency", currency: "USD", }));
console.log( "The percent spent on rent was: " +  rentP + "%"}));
console.log( "The percent spent on groceries was: " +  GroceriesP + "%"}));

