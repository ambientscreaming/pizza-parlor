// UI LOGIC //

document.addEventListener("DOMContentLoaded", () => {
    const myPizza = new Pizza();
    const pizzaOrderForm = document.getElementById("pizzaOrderForm");
    pizzaOrderForm.addEventListener("submit", (e) => {
        e.preventDefault();


    });

    const selectSize = document.getElementById("selectSize");

    selectSize.addEventListener("change", (e) => {
        myPizza.selectSize(e.target.value);
    })

    const checkboxArray = document.querySelectorAll(".checkbox");

    checkboxArray.forEach((checkbox) => {
        checkbox.addEventListener("click", (e) => {
            const name = e.target.value;
            const price = e.target.dataset.price;
            if (e.target.checked) {
                const thisTopping = new Topping(name, price);
                myPizza.addTopping(thisTopping);
            } else {
                myPizza.removeTopping(name);
            }
        });
    });


});

// BUSINESS LOGIC //

function Pizza() {
    this.toppingList = [];
    this.price = null;
    this.size = null;
}

Pizza.prototype.addTopping = function (newTopping) {
    this.toppingList.push(newTopping);
}

Pizza.prototype.removeTopping = function (removedTopping) {
    const index = this.toppingList.indexOf(removedTopping);
    this.toppingList.splice(index, 1);
}

Pizza.prototype.selectSize = function (size) {
    this.size = size
}

function Topping(toppingName, toppingPrice) {
    this.name = toppingName;
    this.price = toppingPrice;
}

