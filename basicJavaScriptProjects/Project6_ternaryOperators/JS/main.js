/* function to determine whether or not the user is tall enough to ride */
function rideFunction() {
    var height, canRide;
    height = document.getElementById("height").value;
    canRide = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = canRide + " to ride.";
}


/* determining whether user is old enough to vote */
function voteFunction() {
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = (age >= 18) ? "You are old enough ":"You are too young ";
    document.getElementById("vote").innerHTML = canVote + "to vote.";
}


/* vehicle object */
function vehicle(Owner, Make, Model, Year, Color) {
    this.vehicleOwner = Owner;
    this.vehicleMake = Make;
    this.vehicleModel = Model;
    this.vehicleYear = Year;
    this.vehicleColor = Color;
}

function nameMyRide() {
    var currentUserName, currentMake, currentModel, currentYear, currentColor;
    currentUserName = document.getElementById("userName").value;
    currentMake = document.getElementById("vehicleMake").value;
    currentModel = document.getElementById("vehicleModel").value;
    currentYear = document.getElementById("vehicleYear").value;
    currentColor = document.getElementById("vehicleColor").value;
    var myCar = new vehicle(currentUserName, currentMake, currentModel, currentYear, currentColor);
    document.getElementById("myRide").innerHTML = 
    myCar.vehicleOwner + " drives a " + myCar.vehicleColor + " " + myCar.vehicleMake + " " + myCar.vehicleModel + ", made in " + myCar.vehicleYear + "."
}

/*
var new = "new";
console.log(new);
*/


/* A new object contructor */
function dog(Name, Breed, Age, favoriteHobby) {
    this.name = Name;
    this.breed = Breed;
    this.age = Age;
    this.hobby = favoriteHobby;
    this.summary = function() {
        var summaryStatement = this.name + " is a " + this.age + " year old " + this.breed + ", who's favorite hobby is " + this.hobby + ".";
        return summaryStatement;
    }
}
var Jed = new dog("Jed", "Redbone Coonhound", 9, "Sleeping");
console.log(Jed.summary());


/* A new, nested function */
function newFunction() {
    window.alert("I came from the parent function.");
    function nestedFunction() {
        document.getElementById("nestedFunction").innerHTML = "A nested function, is a function, wihtin a function.";
    }
    nestedFunction();
}