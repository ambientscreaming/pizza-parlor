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
code: myPizza.calculatePrice("small ($10)", "pepperoni ($2.00)");
expected output: 12

describe: Topping()

test: it should create an object with name and price
code: const myTopping = new Topping("pepperoni", 1.5);
expected output: Topping {name: 'pepperoni', price: 1.5}

# _Cutie Pies Pizzeria_

#### By _**K.B. github: @ambientscreaming**_

#### _this app calculates the cost of a pizza for you!_

## Technologies Used

* _Javascript_
* _HTML_
* _CSS_

## Description

_This project gives you a set of topping options for a pizza and calcuates the price of the selected choices_

## Setup/Installation Requirements

* _Open any web browser and paste this link:_
* _https://ambientscreaming.github.io/pizza-parlor_

## Known Bugs

* _No known bugs! if you find any, please let me know asap!_

## License

_Any code contributions are welcome!_

Copyright (c) _12/10/23_ _K.B. ambientscreaming@gmail.com_
