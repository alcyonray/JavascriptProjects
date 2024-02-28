function thisFunction () {
    var first = "We hit";
    var second = " the target";
    var myElement = document.getElementById("target");
    myElement.textContent = first + second;
}

function thatFunction () {
    var pieceOne = "This string, ", pieceTwo = "was concatenated, ", pieceThree = "in the JavaScript file!";
    var myStatement = pieceOne;
    myStatement += pieceTwo;
    myStatement += pieceThree;
    document.getElementById("targetTwo").textContent = myStatement;
}

function anotherFunction () {
    var paragraph = document.getElementById("targetTwo");
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    paragraph.style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
}