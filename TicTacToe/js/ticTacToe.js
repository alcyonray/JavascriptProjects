//this variable keeps track of who's turn it is
let activePlayer = 'X';
//this array stores an array of moves.  Used to determine win conditions
let selectedSquares = [];

//this function is for placing an x or o in a square
function placeXOrO(squareNumber) {
    //This condition ensures a square ahsn't been selected already
    //the .some() method is used to check each element of the selectSquare array
    //to see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the HTML element id that was clicked
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is
        if (activePlayer === 'X') {
            //If activePlayer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            //If activePlayer is 'O', the o.png is placed
            select.style.backgroundImage = 'url("images/o.png")';
        }        
        //squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions
        checkWinConditions();
        //This condition is for changing the active player
        if (activePlayer === 'X') {
            //if active player is 'X' change it to 'O'
            activePlayer = 'O';
        } else {
            //vice versa
            activePlayer = 'X';
        }

        //This function plays placement sound
        audio('./media/place.mp3');
        //This condition checks to see if it is the computers turn
        if (activePlayer === 'O') {
            //this function disables clicking for computers turn
            disableClick();
            //This function waits 1 second before the computer places an image and enables click
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //Returning tru is needed for our computersTurn() function to work
        return true;
    }
    //This function enables computer to select a random unoccupied square
    function computersTurn() {
        //This boolean is needed for our while loop
        let success = false;
        //This variable stores a random number 0 - 8
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already
        while (!success) {
            //random number 0 - 8 generated
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluated returns true, the square hasn't been selected yet
            if (placeXOrO(pickASquare)) {
                //this line calls the function
                placeXOrO(pickASquare);
                //this changes our boolean and ends the loop
                success = true;
            };
        }
    }
}

//this function parses the selectedSquares array to search for win conditions
//drawLine() function is called to draw a line on the screen if the condition is met
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { // X 0, 1, 2 condition
        drawWinLine(50, 100, 558, 100)
    } else if (arrayIncludes('3X', '4X', '5X')) { // X 3, 4, 5
        drawWinLine(50, 304, 558, 304);
    } else if (arrayIncludes('6X', '7X', '8X')) { // X 6, 7, 8
        drawWinLine(50, 508, 558, 508)
    } else if (arrayIncludes('0X', '3X', '6X')) { // X 0, 3, 6
        drawWinLine(100, 50, 100, 558)
    } else if (arrayIncludes('1X', '4X', '7X')) { // X 1, 4, 7
        drawWinLine(304, 50, 304, 558)
    } else if (arrayIncludes('2X', '5X', '8X')) { // X 2, 5, 8
        drawWinLine(508, 50, 508, 558)
    } else if (arrayIncludes('6X', '4X', '2X')) { // X 6, 4, 2
        drawWinLine(100, 508, 510, 90)
    } else if (arrayIncludes('0X', '4X', '8X')) { // X 0, 4, 8
        drawWinLine(100, 100, 520, 520)
    } else if (arrayIncludes('0O', '1O', '2O')) { // O 0, 1, 2
        drawWinLine(50, 100, 558, 100)
    } else if (arrayIncludes('3O', '4O', '5O')) { // O 3, 4, 5
        drawWinLine(50, 304, 558, 304)
    } else if (arrayIncludes('6O', '7O', '8O')) { // O 6, 7, 8
        drawWinLine(50, 508, 558, 508)
    } else if (arrayIncludes('0O', '3O', '6O')) { // O 0, 3, 6
        drawWinLine(100, 50, 100, 558)
    } else if (arrayIncludes('1O', '4O', '7O')) { // O 1, 4, 7
        drawWinLine(304, 50, 304, 558)
    } else if (arrayIncludes('2O', '5O', '8O')) { // O 2 5 8
        drawWinLine(508, 50, 508, 558)
    } else if (arrayIncludes('6O', '4O', '2O')) { // O 6, 4, 2
        drawWinLine(100, 508, 510, 90)
    } else if (arrayIncludes('0O', '4O', '8O')) { // O 0, 4, 8
        drawWinLine(100, 100, 520, 520)
    } else if (selectedSquares.length >= 9) { //checks for a tie
        //this function plays the tie game sound
        audio('./media/tie.mp3');
        //this function sets a .3 second timer before the resetGame is called
        setTimeout(function () { resetGame(); }, 500);
    }

    //this function checks if an array includes 3 strings.
    //it is used to check for each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //these three variables are used to check for three in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variables passed are all included in our array
        //then true is returned and our else if condition executes the drawLine() function
        if (a === true && b === true && c === true) {
            return true;
        }
    }
}

//makes body element temporarily unclickable
function disableClick() {
    body.style.pointerEvents = 'none';
    //makes clickable again after 1 second
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

//takes a string parameter of the audio url path
function audio(audioURL) {
    //create new audio object
    let audio = new Audio(audioURL);
    //plays the sound
    audio.play();
}

//utilizes HTML canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //accesses HTML canvas element
    const canvas = document.getElementById('win-lines');
    //gives access to methods and properties for canvas
    const c = canvas.getContext('2d');
    //this line indicates where the start of lines x axis is
    let x1 = coordX1,
        //start of line's y axis
        y1 = coordY1,
        //end of line's x axis
        x2 = coordX2,
        //end of line's y axis
        y2 = coordY2,
        //stores temporary x axis data
        x = x1,
        //temporary y axis data
        y = y1;
    //This function interacts with the canvas
    function animateLineDrawing() {
        //creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //this method clears content from the last loop
        c.clearRect( 0, 0, 608, 608);
        //starts a new path
        c.beginPath();
        //moves to a starting point in line
        c.moveTo(x1, y1);
        //indicates teh end point in line
        c.lineTo(x, y);
        //sets teh width of line
        c.lineWidth = 10;
        //sets color of line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //draws everything from above
        c.stroke();
        //checks if endpoints have been reached
        if (x1 <= x2 && y1 <= y2) {
            //adds 10 to previous x endpoint
            if (x < x2) { x += 10; }
            //add 10 to prebious y endpoint
            if (y < y2) { y += 10; }
            //neccessary for 6, 4, 2 win conditions
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //also neccessary for 6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y> y2) { y -= 10; }
            if (x >= x2 && y<= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    //clears canvas after win line is drawn
    function clear() {
        //starts animation loop
        const animationLoop = requestAnimationFrame(clear);
        //clears canvas
        c.clearRect(0, 0, 608, 608);
        //stops animation loop
        cancelAnimationFrame(animationLoop);
    }
    //disallows clicking while the win sound is playing
    disableClick();
    //plays win sound
    audio('./media/winGame.mp3');
    //calls main animation loop
    animateLineDrawing();
    //waits 1 second; then clears canvas, resets game, and allows clicking again
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//resets the game in the event of a tie or a win
function resetGame() {
    //interates through each HTML square element
    for (let i = 0; i < 9; i++) {
        //gets the HTML element i
        let square = document.getElementById(String(i));
        //removes elements backgroundImage
        square.style.backgroundImage = "";
    }
    //resets the array 
    selectedSquares = [];
}