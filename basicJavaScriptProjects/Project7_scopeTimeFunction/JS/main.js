var globalVariable = "I am accesible anywhere in this Javascript file.";

function localsOnly() {
    var localVariable = "I am only locally accessible, within the localsOnly() function.";
    return localVariable;
}


/* locality experiment function */
function localityExperiment() {
    document.getElementById("global").innerHTML = globalVariable;
    document.getElementById("local").innerHTML = localsOnly();
    document.getElementById("error").innerHTML = "Check the console, to see the error when trying to access a local variable, outside of its domain.";
    console.log(localVariable);
}



/* Using if to determine the appropriate statement */
function dateNight() {
    const today = new Date();
    let currentHour = today.getHours();
    if (currentHour < 1800) {
        question = "Are you free yet?";
    } else {
        question = "Would you like to go out?";
    }
    document.getElementById("relevantQuestion").innerHTML = question;
}


/* my own if */
function inputReveal() {
    document.getElementById("someValue").style.visibility = "visible";
    document.getElementById("dontHideMe").style.visibility = "visible";
}

function eValueator() {
    var statement, userInput = document.getElementById("someValue").value;
    if (userInput == "Blackberry" || userInput == "blackberry") {
        statement = "You read my mind...";
    } else {
        statement = "Close, but no cigar.";
    }
    document.getElementById("isPsychic").innerHTML = statement;
}


/* Else assignment */
function revealElse() {
    const elses = document.getElementsByClassName("revealElse");
    for (const item of elses) {
        item.style.visibility = "visible";
    }
}

function everythingElse() {
    const userInput = document.getElementById("elseInput").value;
    var statement = "";
    if (userInput.length > 8) {
        statement = "You have a long name!";
    } else {
        statement = "Greetings, " + userInput;
    }
    document.getElementById("everythingElse").innerHTML = statement;
}


/* writing a statement, based on the current time */
function revealTime() {
    const currentTime = new Date().getHours();
    var reply;
    if (currentTime < 12 == currentTime > 0) {
        reply = "Good morning!";
    } else if (currentTime >= 12 == currentTime < 18) {
        reply = "Good afternoon!";
    } else {
        reply = "Good evening!";
    }
    document.getElementById("timeGreeting").innerHTML = reply;
}