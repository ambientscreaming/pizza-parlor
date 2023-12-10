/*TESTS*/

describe: Pizza()

test: it should create an empty object
code: const myPizza = new Pizza();
expected output: Pizza {toppingList: Array(0), price: null, size: null}

describe: Topping()

test: it should create an object with name and price
code: const myTopping = new Topping("pepperoni", 1.5);
expected output: Topping {name: 'pepperoni', price: 1.5}
