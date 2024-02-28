/* showing functionality of the addition operator */
function newAddition() {
    var result = 3 + 6 + 9;
    document.getElementById("Math").innerHTML = "3 + 6 + 9 = " + result;
}

/* showing functionality of the subtraction operator */
function nowSubtract() {
    var result = 9 - 6 - 3;
    document.getElementById("subtraction").innerHTML = "9 - 6 - 3 = " + result;
}

/* showing functionality of the multiplication operator */
function multiplicationStation() {
    var result = 18 * 12 * 6;
    document.getElementById("multiples").innerHTML = "18 * 12 * 6 = " + result;
}

/* showing functionality of the division operator */
function quickDivision() {
    var result = 1368 / 18 / 2;
    document.getElementById("divisadero").innerHTML = "1368 / 18 / 2 = " + result;
}

/* showing functionality of the all the basic operators */
function moreMath() {
    var result = (1 + 2) * 10 / 2 - 5;
    document.getElementById("conglomerate").innerHTML = "one plus two, multiplied by ten, divided in half, then subtract five, equals: " + result;
}

/* showing functionality of the modulator operator */
function modulationStation() {
    var modern = 432 / 20;
    document.getElementById("modernDivision").innerHTML = "Modern division defaults to the decimal, where 432 / 20  = " + modern;

    var classical = Math.floor(432 / 20), remainder = 432 % 20;
    document.getElementById("classicalDivision").innerHTML = "Classical divsion would say 432 / 20 = " + classical + " with a remainder of " + remainder;
}

/* showing functionality of the negation operator */
function negatoryGhostRider() {
    var positive = 1368;
    document.getElementById("negativeNancy").innerHTML = -positive;
}

/* showing functionality of the increment and decrement operators */
function incrementalProgress() {
    var original = 432;
    document.getElementById("original").innerHTML = original;
    original++;
    document.getElementById("incremented").innerHTML = original;
    original--;
    original--;
    document.getElementById("decremented").innerHTML = original;
}

/* showing functionality of the Math.random function */
function randomness() {
    var aFreshDigit = Math.floor(Math.random() * 900);
    window.alert("This cycles fresh digit is: " + aFreshDigit);
}

/* defining the Math object */
function definitiveMath() {
    document.getElementById("definition").style.visibility = "visible";
    var result = Math.pow(18, 3);
    document.getElementById("exponential").innerHTML = "18 to the power of 3 equals " + result;
}