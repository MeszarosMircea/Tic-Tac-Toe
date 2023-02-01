let player = 1, gameEnd = 0, elem = [0], countClicks = 0;

function Game(value) {
    if(gameEnd === 0) {
        ++countClicks;
        if(player === 1){
            document.getElementById(value).innerHTML = '👩‍⚖️';
            document.getElementById(value).onclick = null;
            player = 0;
            elem[value - 1] = 1; 
            checkWinner();
        } else {
            document.getElementById(value).innerHTML = '👨‍💻';
            document.getElementById(value).onclick = null;
            player = 1;
            elem[value - 1] = 2; 
            checkWinner();
        }
    }
}

function checkWinner() {
    if( areEqual(elem[0],elem[1], elem[2], 1) || 
        areEqual(elem[3],elem[4], elem[5], 1) || 
        areEqual(elem[6],elem[7], elem[8], 1) ||
        areEqual(elem[0],elem[3], elem[6], 1) ||
        areEqual(elem[1],elem[4], elem[7], 1) ||
        areEqual(elem[2],elem[5], elem[8], 1) ||
        areEqual(elem[0],elem[4], elem[8], 1) ||
        areEqual(elem[2],elem[4], elem[6], 1)) { 
            document.getElementById("bottom").innerHTML = "👩‍⚖️ Wins!";
            document.getElementById("bottom").style.color = "black";
            document.getElementById("bottombutton").innerHTML = "RestartGame";
            document.getElementById("bottombutton").setAttribute('onclick','RestartGame()');
            gameEnd = 1;
    }

    if(areEqual(elem[0],elem[1], elem[2], 2) || 
       areEqual(elem[3],elem[4], elem[5], 2) || 
       areEqual(elem[6],elem[7], elem[8], 2) ||
       areEqual(elem[0],elem[3], elem[6], 2) ||
       areEqual(elem[1],elem[4], elem[7], 2) ||
       areEqual(elem[2],elem[5], elem[8], 2) ||
       areEqual(elem[0],elem[4], elem[8], 2) ||
       areEqual(elem[2],elem[4], elem[6], 2)) { 
            document.getElementById("bottom").innerHTML = "👨‍💻 Wins!";
            document.getElementById("bottom").style.color = "black";
            document.getElementById("bottombutton").innerHTML = "RestartGame";
            document.getElementById("bottombutton").setAttribute('onclick','RestartGame()');
            gameEnd = 1;
    }

    if(countClicks === 9 && gameEnd === 0) {
        document.getElementById("bottom").innerHTML = "Tie Game!";
        document.getElementById("bottom").style.color = "black";
        document.getElementById("bottombutton").innerHTML = "RestartGame";
        document.getElementById("bottombutton").setAttribute('onclick','RestartGame()');
    }
}

function areEqual(elem1, elem2, elem3, value) {
    if(value === elem1 && elem1 === elem2 && elem2 === elem3) { 
        return true;
    }
    return false;
}

function RestartGame() {
    window.location.reload();
}
