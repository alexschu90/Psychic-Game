
var wins = 0; 
var losses = 0; 
var guessCount = 9; 
var ypg = [];
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
function reset() {
    ypg = [];
};
var compGuess; 
function guessit() {
    compGuess = options[Math.floor(Math.random()*26)];
    console.log("I chose " + compGuess);
};


guessit(); 

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();   
    if (userGuess !== compGuess) {
        if (guessCount > 1) {
            ypg.push(userGuess);
            var tracker = ypg.toString(); 
            guessCount--;
            document.getElementById("guessesleft-text").textContent = "Guesses Left: " + guessCount;
            document.getElementById("ypg-text").textContent = "Your Past Guesses: " + tracker; 
        }
        else { 
            reset();
            document.getElementById("ypg-text").textContent = "Your Past Guesses: " + ypg;  
            guessCount = 9; 
            document.getElementById("guessesleft-text").textContent = "Guesses Left: " + guessCount;
            losses++; 
            document.getElementById("losses-text").textContent = "Losses: " + losses; 
            guessit(); 
        }
    } 
    else {
        reset();
        document.getElementById("ypg-text").textContent = "Your Past Guesses: ";  
        guessCount = 9; 
        document.getElementById("guessesleft-text").textContent = "Guesses Left: " + guessCount;
        wins++; 
        document.getElementById("wins-text").textContent = "Wins: " + wins; 
        guessit(); 
    };
};

function hintButton() {
    alert("Open your browser's console");
};

