// console.log('your script tag worked! yay!')

var cells = document.getElementsByTagName("td");
var rows = document.getElementsByTagName("tr");
var content = document.getElementsByClassName("content");
var button = document.getElementById("button");
var winner = document.getElementById("winner");
var playCounter = 0;
var textx = document.createTextNode('X');
var texto = document.createTextNode('O');

function clearBoard () {
	for (let i = 0; i < content.length; i++) {
  	content[i].innerHTML = null;
	}
	playCounter = 0;
	winner.innerHTML = ('Winner: ');
}

function findWinner () {
	findThreeInARow();
	findThreeVertical();
	findThreeDiagonal();
	}

function winning (player, text) {
	var alertWin = function(player){alert(`${player} wins!`)};
	alertWin(player);
	winner.innerHTML = ('Winner: ');
	clearBoard();
	winner.appendChild(text)
}

function findThreeInARow () {	
	for (let i = 0; i < rows.length; i++) { //in this row
		var rowSquares = rows[i].getElementsByClassName('content');

		if (Array.from(rowSquares).every(ele => ele.innerHTML === 'X')) {
			winning('X', textx);
		}
		if (Array.from(rowSquares).every(ele => ele.innerHTML === 'O')) {
			winning('O', texto);
		}
	}
};

function findThreeVertical () {
	for (let i = 0; i < 3; i++) {
			if (rows[0].getElementsByClassName('content')[i].innerHTML === 'X' && rows[1].getElementsByClassName('content')[i].innerHTML === 'X' && rows[2].getElementsByClassName('content')[i].innerHTML === 'X') {
				  winning('X', textx);
			}
			if (rows[0].getElementsByClassName('content')[i].innerHTML === 'O' && rows[1].getElementsByClassName('content')[i].innerHTML === 'O' && rows[2].getElementsByClassName('content')[i].innerHTML === 'O') {
				  winning('O', texto);
			}
		// console.log (rows[1].getElementsByClassName('content')[0].innerHTML);
	};
}

function findThreeDiagonal () {
	if ((rows[0].getElementsByClassName('content')[0].innerHTML === 'X' && rows[1].getElementsByClassName('content')[1].innerHTML === 'X' && rows[2].getElementsByClassName('content')[2].innerHTML === 'X') || (rows[0].getElementsByClassName('content')[2].innerHTML === 'X' && rows[1].getElementsByClassName('content')[1].innerHTML === 'X' && rows[2].getElementsByClassName('content')[0].innerHTML === 'X')) {
		winning('X', textx);
	}
	if ((rows[0].getElementsByClassName('content')[0].innerHTML === 'O' && rows[1].getElementsByClassName('content')[1].innerHTML === 'O' && rows[2].getElementsByClassName('content')[2].innerHTML === 'O') || (rows[0].getElementsByClassName('content')[2].innerHTML === 'O' && rows[1].getElementsByClassName('content')[1].innerHTML === 'O' && rows[2].getElementsByClassName('content')[0].innerHTML === 'O')) {
		winning('O', texto);
	}
}

//Add X's and O's
for (let i = 0; i < content.length; i++) {
  // console.log('square is', content[i]);
  content[i].addEventListener("click", function () {
  	if (!this.innerHTML || this.innerHTML === null) {
	  	playCounter++
		  if (playCounter % 2 === 1) {
		  	this.innerHTML = 'X';
		  	findWinner();
		  } 
		  if (playCounter % 2 === 0 && playCounter !== 0) {
		  	this.innerHTML = 'O';
		  	findWinner();
		  }
		  console.log('playCounter is: ', playCounter);
		  if (playCounter === 9) {
		  	winner.innerHTML = ('Winner: Stalemate!');
		  } 
  	}
  })
};

//Button logistics
button.addEventListener("click", clearBoard);

