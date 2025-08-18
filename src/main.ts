import "./style.css";

// const app = document.getElementById('app')

function startGame(player: string, level: number) {
  console.log(`Starting game for ${player} at level ${level}`);
  // Game logic goes here
}

startGame("Player1", 1);
// Additional game setup can be added here

const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
]

// const cashInRegister = 100
// const orderQueue = []

/**
 * Challenge: Add a utility function "addNewPizza"
 * that takes a pizza object and adds it to the menu
 */

const addNewPizza = (pizzaObj: { name: string, price: number }) => { menu.push(pizzaObj) }

/*function addNewPizza(name: string, price: number) {
  menu.push({ name, price })
}*/

addNewPizza({ name: "Double Chesse", price: 8 })

console.log(menu)


