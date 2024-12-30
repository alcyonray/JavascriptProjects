/* creating a dictionary, about my favorite motorcycle */
var currentFavoriteMotorcycle = {
    Make: "BMW", 
    Model: "F900GS Adventure", 
    Price: 18372,
    Displacement: 899
};


/* a playful consideration, to see how many massages it would take to buy this motorcycle */
var massageProfit  = 110;
function howCloseAmI() {
    document.getElementById("favoriteBike").innerHTML = "My current favorite bike is the " + currentFavoriteMotorcycle.Make
    + " " + currentFavoriteMotorcycle.Model;
    document.getElementById("price").innerHTML = "The current retail price is $" + currentFavoriteMotorcycle.Price;
    var brokenDown = Math.round(currentFavoriteMotorcycle.Price / massageProfit);
    document.getElementById("massageBreakdown").innerHTML = "If I get $110 per massage, it would only take " + brokenDown + " massages to purchase this machine.";
}


/* removing the displacement key from the dictionary */
function displacement() {
    document.getElementById("displacement").innerHTML = currentFavoriteMotorcycle.Displacement;
    delete currentFavoriteMotorcycle.displacement;
    document.getElementById("displaced").innerHTML = currentFavoriteMotorcycle.Displacement;
}