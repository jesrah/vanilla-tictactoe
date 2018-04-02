// console.log('your script tag worked! yay!')

var squares = document.getElementsByClassName("square");
var table = document.getElementById("table");
var rows = table.rows;
console.log ('rows are', table.rows)
var content = document.getElementsByClassName("content");
var makeX = document.createTextNode('x');
var div = document.createElement('div')
var playCounter = 0;

function findThreeInARow () {
  var result = rows.reduce(function(acc, row) {
  	
  })

  return result;
};

for (var i = 0; i < content.length; i++) {
  console.log('square is', content[i]);
  content[i].addEventListener("click", function () {
  	if (!this.innerHTML) {
	  playCounter++
	  if (playCounter % 2 === 1) {
	  	this.innerHTML = 'X';
	  } 
	  if (playCounter % 2 === 0) {
	  	this.innerHTML = 'O';
	  }
	  console.log('playCounter is: ', playCounter);
  	}
  })
}