/*TESTS*/

describe: Pizza()

test: it should create an empty object
code: const myPizza = new Pizza();
expected output: Pizza {toppingList: Array(0), price: null, size: null}

describe: Pizza.addTopping()

test: it should add topping to toppinglist
code: myPizza.addTopping(new Topping("pepperoni", 1.5));
expected output: {toppingList: [Topping {name: "pepperoni", price: 1.5}], price: null, size: null}

describe: Pizza.selectSize()

test: it should set the size on pizza
code: myPizza.selectSize("small");
expected output: Pizza {toppingList: Array(0), price: null, size: 'small'}

describe: Pizza.removeTopping()

test: it should remove a topping from toppingList
code: myPizza.removeTopping("pepperoni");
expected output: Pizza {toppingList: Array(0), price: null, size: null}

describe: Pizza.calculatePrice()

test: it should calculate price based on size and topping choice
code: myPizza.calculatePrice("small ($10)", "pepperoni ($2.50)");
expected output: 12.5




describe: Topping()

test: it should create an object with name and price
code: const myTopping = new Topping("pepperoni", 1.5);
expected output: Topping {name: 'pepperoni', price: 1.5}
