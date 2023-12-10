// UI LOGIC //

document.addEventListener("DOMContentLoaded", () => {
    const myPizza = new Pizza();
    myPizza.calculatePrice();
    document.getElementById("orderTotal").innerText = myPizza.price;

    const pizzaOrderForm = document.getElementById("pizzaOrderForm");
    pizzaOrderForm.addEventListener("submit", (e) => {
        e.preventDefault();
        document.getElementById("orderTotalStyle").setAttribute("class", "hidden");
        document.getElementById("orderTotalStyle").removeAttribute("class", "hidden");

    });

    const selectSize = document.getElementById("selectSize");

    selectSize.addEventListener("change", (e) => {
        myPizza.selectSize(e.target.value);
        myPizza.calculatePrice();
        document.getElementById("orderTotal").innerText = myPizza.price;
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
            myPizza.calculatePrice();
            document.getElementById("orderTotal").innerText = myPizza.price;
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
    for (let i = 0; i < this.toppingList.length; i++) {
        if (this.toppingList[i].name === removedTopping) {
            this.toppingList.splice(i, 1);
        }
    }
}

Pizza.prototype.selectSize = function (size) {
    this.size = size
}

Pizza.prototype.calculatePrice = function () {
    if (this.size === null) {
        this.price = 0 + getToppingPrice(this);
    } else if (this.size === "small ($10)") {
        this.price = 10 + getToppingPrice(this);
    } else {
        this.price = 15 + getToppingPrice(this);
    }
}

function getToppingPrice(myPizza) {
    let price = 0;
    myPizza.toppingList.forEach((topping) => {
        price += parseFloat(topping.price, 10);
    });
    return price;
}

function Topping(toppingName, toppingPrice) {
    this.name = toppingName;
    this.price = toppingPrice;
}

