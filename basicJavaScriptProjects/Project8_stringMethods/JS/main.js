
/* utilizing the concat method */
var stringOne = "This is a string, ";
var stringTwo = "and so is this.";

var joined = stringOne.concat(stringTwo);

console.log(joined);
document.getElementById("target").innerHTML = joined;



/* utilizng the slice method */
var loaf = "This is the string to be sliced, like a loaf of bread.";
var first = loaf.slice(11, 22);
var second = loaf.slice(22, 33);
var third = loaf.slice(33, 44);

function sliceMe() {
    document.getElementById("loafPan").innerHTML = loaf;
    document.getElementById("sliceOne").innerHTML = first;
    document.getElementById("sliceTwo").innerHTML = second;
    document.getElementById("sliceThree").innerHTML = third;
}


/* demonstrating the toUpperCase() method */
function capitalize() {
    document.getElementById("capitalizeSection").style.visibility = "visible";
}
function displayUpper() {
    var userInput = document.getElementById("capitalizeInput").value;
    var capitalized = userInput.toUpperCase();
    document.getElementById("capitalizeOutput").innerHTML = capitalized;
}


/* demonstrating the search method */
function comenceSearch() {
    document.getElementById("searchSection").style.visibility = "visible";
}
function searching() {
    var searchPhrase = document.getElementById("searchPhrase").textContent;
    var userInput = document.getElementById("searchInput").value;
    var index = searchPhrase.search(userInput);
    var locationPhrase, character = index + 1;
    var searchWordPhrase = "The word you entered was '" + userInput +"'";
    if (index > 0) {
        locationPhrase = "This word begins at character " + character + " of the line above";
    } else {
        locationPhrase = "The word you entered was not found in the line above.";
    }

    document.getElementById("searchWord").innerHTML = searchWordPhrase;
    document.getElementById("location").innerHTML = locationPhrase;    
}


/* demonstration of the toString() method */
function revealStringer() {
    document.getElementById("numbString").style.visibility = "visible";
}
function numberStringer() {
    var favNumb = document.getElementById("numbInput").value;
    var numberString = favNumb.toString();
    var numberInAString = "You entered the number " + numberString + ", and now it has been converted to a string type.";
    document.getElementById("theNumberString").innerHTML = numberInAString;
}


/* demonstration of the toPrecision() method */
function revealPrecision() {
    document.getElementById("precise").style.visibility = "visible";
}
function slicer() {
    const pi = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679;
    var userDigits = document.getElementById("piDigits").value;
    var returnStatement = "", modifiedPi;
    if (userDigits > 100 || userDigits < 3) {
        returnStatement = "Please try again";
    } else {
        modifiedPi = pi.toPrecision(userDigits);
        returnStatement = "Pi with " + userDigits + " digits is " + modifiedPi;
    }
    document.getElementById("sliceOfPi").innerHTML = returnStatement;
}


/* demonstration of toFixed() method */
function revealFixer() {
    document.getElementById("fixed").style.visibility = "visible";
    fixer();
}
function fixer() {
    var original = 3.14159;
    var fixed = original.toFixed(8);
    var returnStatement = "The result of n.toFixed(8) equals " + fixed;
    document.getElementById("fixerOutput").innerHTML = returnStatement;
}


/* valueOf() demonstration */
function revealValue() {
    document.getElementById("valued").style.visibility = "visible";
    var sentence = "This is a sentence";
    var statement = sentence.valueOf();
    var returnStatement = "Then sentence.valueOf() is equal to '" + statement + "'"; 
    document.getElementById("valueRevealed").innerHTML = returnStatement;
}