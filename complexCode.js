// filename: complexCode.js
// Code: Simulate a restaurant ordering system

// Define an object to represent a dish
class Dish {
  constructor(name, price, ingredients) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
  }

  getDescription() {
    let ingredientList = this.ingredients.join(", ");
    return `${this.name}: ${ingredientList}`;
  }

  calculateTotalPrice(quantity) {
    return this.price * quantity;
  }
}

// Define an object to represent a customer
class Customer {
  constructor(name, tableNumber) {
    this.name = name;
    this.tableNumber = tableNumber;
  }

  getTableNumber() {
    return `Table ${this.tableNumber}`;
  }

  placeOrder(dish, quantity) {
    console.log(`${this.name} at ${this.getTableNumber()} ordered ${quantity}x ${dish.name}.`);
    let totalPrice = dish.calculateTotalPrice(quantity);
    console.log(`Total price: $${totalPrice.toFixed(2)}`);
  }
}

// Define an object to represent a waiter
class Waiter {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  takeOrder(customer, dish, quantity) {
    console.log(`${this.name} received order from ${customer.name}.`);
    customer.placeOrder(dish, quantity);
  }

  billCustomer(customer, amount) {
    console.log(`${this.name} billed ${customer.name} $${amount.toFixed(2)}.`);
  }
}

// Define an object to represent a restaurant
class Restaurant {
  constructor(name) {
    this.name = name;
    this.menu = [];
  }

  addDish(dish) {
    this.menu.push(dish);
    console.log(`${dish.name} added to the menu.`);
  }

  printMenu() {
    console.log(`--- ${this.name} Menu ---`);
    this.menu.forEach((dish) => {
      console.log(dish.getDescription());
      console.log(`Price: $${dish.price.toFixed(2)}`);
    });
  }
}

// Initialize the restaurant
let restaurant = new Restaurant("Fine Dining Restaurant");

// Create dishes and add them to the menu
let dish1 = new Dish("Spaghetti Bolognese", 12.99, ["Spaghetti", "Tomato Sauce", "Ground Beef"]);
let dish2 = new Dish("Chicken Parmesan", 14.99, ["Chicken", "Cheese", "Tomato Sauce"]);
restaurant.addDish(dish1);
restaurant.addDish(dish2);

// Print the menu
restaurant.printMenu();

// Initialize a customer and waiter
let customer1 = new Customer("John Doe", 1);
let waiter1 = new Waiter("Jane Smith", restaurant);

// Customer places an order
waiter1.takeOrder(customer1, dish1, 2);

// Waiter calculates the bill
let billAmount = dish1.calculateTotalPrice(2);
waiter1.billCustomer(customer1, billAmount);