/* creating a string with a coerced variable */
var coercedString = "10" + 5;
function theFunction() {
    document.getElementById("targetOne").innerHTML = "When '10' is treated as a string, '10' + 5 = " + coercedString;
}

/* demonstrating Not a Number functionality */
function notANumber() {
    var nonNumber = "This is not a number";
    var number = 1368;
    document.getElementById("not").style.visibility = "visible";
    document.getElementById("a").innerHTML = "isNaN(" + nonNumber + ") = " + isNaN(nonNumber);
    document.getElementById("number").innerHTML = "isNaN(" + number + ") = " + isNaN(number);
}

/* demonstrating infinity, within JavaScript */
function infinityAndBeyond() {
    var positiveInfinity = 3.24E309;
    var negativeInfinity = -4.32E310;
    document.getElementById("infinity").innerHTML = "In JavaScript, numbers with a large enough absolute value, simply register as infinity.";
    document.getElementById("and").innerHTML = "3.24 x 10^309 => " + positiveInfinity;
    document.getElementById("beyond").innerHTML = "-4.32 x 10^310 => " + negativeInfinity;
}

/* demonstrating true and false logic */
function truthOrDare() {
    var richtig = 10 > 6, falsch = 18 < 12;
    document.getElementById("truth").style.visibility = "visible";
    document.getElementById("or").innerHTML = "10 > 6 equals " + richtig;
    document.getElementById("dare").innerHTML = "18 < 12 equals " + falsch;
}

/* logging equation results to console */
function consoleLogger() {
    var logMe = (7 + 12) * 14 - 1243;
    document.getElementById("equation").style.visibility = "visible";
    console.log(logMe);
    console.log("The honesty of 10 > 12 is:");
    console.log(10 > 12);
}

/* using the == operator, to test equivalency */
function equalizer() {
    document.getElementById("equalizerIntro").style.visibility = "visible";
    var richtig = 12 == 12, falsch = 18 == 14;
    document.getElementById("equalizerTrue").innerHTML = "12 == 12 is " + richtig;
    document.getElementById("equalizerFalse").innerHTML = "18 == 14 is " + falsch;
}

/* using the === operator */
function tripleCheck() {
    document.getElementById("tripleCheckIntro").style.visibility = "visible";
    var valOne = 18, valTwo = 18, valThree = "eighteen", valFour = "18", valFive = 36;
    var caseOne = valOne === valTwo;
    document.getElementById("caseA").innerHTML = "18 === 18 is " + caseOne;
    var caseTwo = valOne === valThree;
    document.getElementById("caseB").innerHTML = "18 === 'eighteen' is " + caseTwo;
    var caseThree = valOne === valFour;
    document.getElementById("caseC").innerHTML = "18 === '18' is " + caseThree;
    var caseFour = valOne === valFive;
    document.getElementById("caseD").innerHTML = "18 === 36 is " + caseFour;
}


/* demonstrating the && and || operators */
function andOr() {
    document.getElementById("andOrIntro").style.visibility = "visible";
    var trueAND = 10 > 8 && 10 > 4;
    document.getElementById("andTrue").innerHTML = "10 > 8 && 10 > 4 returns " + trueAND;
    var falseAND = 10 > 8 && 10 > 12;
    document.getElementById("andFalse").innerHTML = "10 > 8 && 10 > 12 returns " + falseAND;
    var trueOR = 10 > 8 || 10 > 12;
    document.getElementById("orTrue").innerHTML = "10 > 8 || 10 > 12 returns " + trueOR;
    var falseOR = 10 > 12 || 10 > 16;
    document.getElementById("orFalse").innerHTML = "10 > 12 || 10 > 16 returns " + falseOR;
}


/* demonstrating functionality of the NOT operator */
function notAgain() {
    document.getElementById("notAgainIntro").style.visibility = "visible";
    var truthNOT = !false;
    document.getElementById("NOTtrue").innerHTML = "!false returns " + truthNOT;
    var lieNOT = !true;
    document.getElementById("NOTfalse").innerHTML = "!true return " + lieNOT;
}