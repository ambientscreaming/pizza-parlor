/*TESTS*/

describe: Pizza()

test: it should create an empty object
code: const myPizza = new Pizza();
expected output: Pizza {toppingList: Array(0), price: null, size: null}

describe Pizza.addTopping()
test: it should add topping to toppinglist
code: myPizza.addTopping(new Topping("pepperoni", 1.5));
expected output: {toppingList: [Topping {name: "pepperoni", price: 1.5}], price: null, size: null}

describe: Topping()

test: it should create an object with name and price
code: const myTopping = new Topping("pepperoni", 1.5);
expected output: Topping {name: 'pepperoni', price: 1.5}
