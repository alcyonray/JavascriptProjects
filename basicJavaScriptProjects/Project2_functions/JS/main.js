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