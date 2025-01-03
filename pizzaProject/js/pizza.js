function getReceipt() {
    //initializes the string to be passed from function to function
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName('size');
    for (let i = 0; i < sizeArray.length; i++) {
        const element = sizeArray[i];
        if (element.checked) {
            var selectedSize = element.value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    const sizePriceDictionary = {"Pico Pizza": 4, "Personal Pizza": 6, "Small Pizza": 8, "Medium Pizza": 10, "Large Pizza": 14, "Extra Large Pizza": 16};
    sizeTotal = sizePriceDictionary[selectedSize];
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //These variables get passed to the other functions
    getTopping(runningTotal, text1);
};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (let j = 0; j < toppingArray.length; j++) {
        const element = toppingArray[j];
        if (element.checked) {
            selectedTopping.push(element.value);
            console.log("selected topping item: (" + element.value + ")");
            text1 = text1 + element.value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = $" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00</strong></h3>";
}