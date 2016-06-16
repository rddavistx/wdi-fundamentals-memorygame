var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne === cardTwo) {
	alert('You found a match!');
} else if (cardOne !== cardThree || cardOne !== cardFour) {
	alert('Sorry, try again');
} else if (cardTwo !== cardThree || cardTwo !== cardFour) {
	alert('Sorry, try again');
} else (cardThree === cardFour) {
	alert(You found a match!);
}