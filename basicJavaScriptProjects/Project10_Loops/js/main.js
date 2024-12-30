function callLoop() {
    var i = 12;
    while (i > 0) {
        document.getElementById("Loop").innerHTML = i;
        i--;
    }
}

function instrumentLoop() {
    var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var content = "";   
    var i;
    for (i = 0; i < instruments.length; i++) {
        content += instruments[i] + "<br>";
    }
    document.getElementById("listOfInstruments").innerHTML = content;
}

function arrayFunction() {
    document.getElementById("arrayHeading").innerHTML = "These are some cats I have known.";
    var arrayOfCats = ["Luca", "Sufi", "Thumbs"];
    document.getElementById("Array").innerHTML = arrayOfCats.join(', ');
}

function constantFunction() {
    const orneriestCat = "Luca";
    document.getElementById("constantHeading").innerHTML = "Below is the name of who will always be the orneriest of cats.";
    document.getElementById("constant").innerHTML = orneriestCat;
}

{let x = 10}
var y = 8;

function wontLetMe() {
    document.getElementById("letMeNotHeading").innerHTML = "This is how a \"let\" declared variable looks, when you attempt to access outside of its scope.";
    document.getElementById("letMeNot").innerHTML = x;
}


function numbers(a, b) {
    document.getElementById("returnHeading").innerHTML = "This function is going to return the sum of two numbers.";

    var sum = a + b;
    return sum;
}
function returnNumbers() {
    var numOne = 7;
    var numTwo = 12;

    var numbersReturned = numbers(numOne, numTwo);
    document.getElementById("return").innerHTML = numbersReturned;
}

let car = {
    make: "Audi",
    model: "Q5",
    year: 2012, 
    color: "Black",
    start: function() {
        return "Engine is now running.  You better go catch it!";
    }
}

function startCar() {
    let heading = document.getElementById("carObjectHeading");
    let paragraph = document.getElementById("carObject");

    heading.innerHTML = "The below paragraph, will be a returned value, from the car.start() function.";
    paragraph.innerHTML = car.start();
}

function continuouslyBroken() {
    let heading = document.getElementById("breakAndContinue");
    let paragraph = document.getElementById("broken");
    let explanation = document.getElementById("brokenExplanation");
    var outputString = "";
    let secretTarget = 8;

    for (let I = 0; I < 12; I++) {
        if (I === 3) {
            continue;
        } else if (I === secretTarget) {
            break;
        } else {
            outputString += I + " ";
        }
    }

    heading.innerHTML = "This will be the output of a loop, affected by both a break and a continue statement.";
    paragraph.innerHTML = outputString;
    explanation.innerHTML = "Continue made the loop skip 3, and break out early at 8 vs 12.";
}