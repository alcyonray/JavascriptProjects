var myString = "This is a string!"; //creating a string

window.alert(myString); //putting that string in an alert window

var anotherString = "Don't you agree?"; //making another string

document.write("They say programming is \"fun\". " + anotherString); //concatenating 'anotherString' in a larger string, written in the html

var myself = "Jeremiah", partner = "Mandey", childOne = "Sufi", childTwo = "Luca"; //creating multiple variables on the same line

document.write("The members of my lovely little family are: " + partner + ", " + myself + ", " + childOne + ", and " + childTwo + "."); //concatenating all of those into a statement

var myExpression = 2 + 3 + 1995; //making an expression

var Sent1 = "This is the beginning of the string", Sent2 = " and this is the end of the string." //creating the Sent1 and Sent2 variables

var secondExpression = Sent1 + Sent2; //concatenating them together in an expression

//creating a simple function to trigger with the onkeypress html event
function keyWasPressed() {
    window.alert("Are you trying to push my buttons?");
}