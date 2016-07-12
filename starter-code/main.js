var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];


function createBoard() {

var board = document.getElementById('game-board');

for (var i=0; i<cards.length; i++) {
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	

	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards);
}
}
function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
     cardElement.innerHTML = "<img src='https://drive.google.com/file/d/0B2_J-1zoxJQiZjh3bi1seFBBczQ/view?usp=sharing'>";
  } else {
  	cardElement.innerHTML = "<img src='https://drive.google.com/file/d/0B2_J-1zoxJQiNE0xOWxWaWp6Rjg/view?usp=sharing'>";

  }

	
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
function isMatch() {
	if (card[0] === card[1]) {
	alert("You found a match!");
} else if (card[0] !== card[2] || card[0] !== Card[3]) {
	alert("Sorry, try again.");
} else if (card[1] !== card[2] || card[1] !== card[3]) {
	alert("Sorry, try again.");
} else if (card[2] === card[3]) {
	alert("You found a match!");
}
}
createBoard();



