// UI LOGIC //

document.addEventListener("DOMContentLoaded", () => {
    const myPizza = new Pizza();
    const pizzaOrderForm = document.getElementById("pizzaOrderForm");
    pizzaOrderForm.addEventListener("submit", (e) => {
        e.preventDefault();


    });

    const checkboxArray = document.querySelectorAll(".checkbox");

    checkboxArray.forEach((checkbox) => {
        checkbox.addEventListener("click", (e) => {
            const type = e.target.value;
            const price = e.target.dataset.price;
            if (e.target.checked) {
                console.log(type);
                console.log(price);
                // add item to topping array
                const thisTopping = new Topping(name, price);
                // myPizza.addTopping(thisTopping);
            } else {
                // remove item from topping array.
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

function Topping(toppingName, toppingPrice) {
    this.name = toppingName;
    this.price = toppingPrice;
}