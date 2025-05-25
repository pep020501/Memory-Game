
const cards = [  //stores card images as objects
  {
    name: "butterfly",
    image: "images/butterfly.png",
  },
  {
    name: "bee",
    image: "images/bee.png",
  },
  {
    name: "dragonfly",
    image: "images/dragonfly.png",
  },
  {
    name: "flower",
    image: "images/flower.png",
  },
  {
    name: "hive",
    image: "images/hive.png",
  },
  {
    name: "lilypad",
    image: "images/lilypad.png",
  },
  {
    name: "tree",
    image: "images/tree.png",
  },
  {
    name: "mushroom",
    image: "images/mushroom.png",
  },
  {
    name: "butterfly",
    image: "images/butterfly.png",
  },
  {
    name: "bee",
    image: "images/bee.png",
  },
  {
    name: "dragonfly",
    image: "images/dragonfly.png",
  },
  {
    name: "flower",
    image: "images/flower.png",
  },
  {
    name: "hive",
    image: "images/hive.png",
  },
  {
    name: "lilypad",
    image: "images/lilypad.png",
  },
  {
    name: "tree",
    image: "images/tree.png",
  },
  {
    name: "mushroom",
    image: "images/mushroom.png",
  },
  {
    name: "butterfly",
    image: "images/butterfly.png",
  },
  {
    name: "bee",
    image: "images/bee.png",
  },
  {
    name: "dragonfly",
    image: "images/dragonfly.png",
  },
  {
    name: "flower",
    image: "images/flower.png",
  },
  {
    name: "hive",
    image: "images/hive.png",
  },
  {
    name: "lilypad",
    image: "images/lilypad.png",
  },
  {
    name: "tree",
    image: "images/tree.png",
  },
  {
    name: "mushroom",
    image: "images/mushroom.png",
  }
];

cards.sort(() => 0.5 - Math.random()); //sorts the cards in a random order 
let chosenCards = []; //empty array where chosen cards will be pushed into 
let chosenCardsID = []; //empty array where the id of the cards from the previous array will be pushed into
const gridDisplay = document.getElementById("grid"); 
const matchDisplay = document.getElementById("matchDisplay");
const scoreDisplay = document.getElementById("score");
let displayScore = 0;
let displayMessage;



function gridBoard(){
  for(let i = 0; i < cards.length; i++){ 
    const card = document.createElement("img"); //creates a card for each object in the array
    card.setAttribute("src", "images/card-back.png"); //sets the default card image 
    card.setAttribute("data-id", i); //sets the card id
    card.addEventListener('click', flip); //adds event listener to the card that calls the "flip" function 
    gridDisplay.append(card); 
  }
}

gridBoard(); 

function Match(){
  const allCards = document.querySelectorAll("img"); //retrieves all the cards

  const option1 = chosenCardsID[0]; //three selected options
  const option2 = chosenCardsID[1];
  const option3 = chosenCardsID[2];

  //checks if selected cards are equal
  if (chosenCards[0] == chosenCards[1] && chosenCards[0] == chosenCards[2]) {
    displayMessage = "You got a match!";
    displayScore++; //increment score by 1 each time a match is found
    allCards[option1].setAttribute("src", "images/matched.png"); //checks off the card to indicate it's been matched
    allCards[option2].setAttribute("src", "images/matched.png");
    allCards[option3].setAttribute("src", "images/matched.png");
    allCards[option1].removeEventListener("click", flip); //removes event listener so card can't be selected again
    allCards[option2].removeEventListener("click", flip);
    allCards[option3].removeEventListener("click", flip);
  } else {
    displayMessage = "No match.";
    allCards[option1].setAttribute("src", "images/card-back.png"); //flips the card back over
    allCards[option2].setAttribute("src", "images/card-back.png");
    allCards[option3].setAttribute("src", "images/card-back.png");
  }

  chosenCardsID = []; //reset both selected card arrays to ensure they are empty prior to the next turn
  chosenCards = [];
  matchDisplay.innerHTML = displayMessage;
  scoreDisplay.innerHTML = displayScore;
}

function flip(){
const cardID = this.getAttribute("data-id"); //retrieve the id of the chosen card 
if(chosenCards.includes(cards[cardID].name)){ //checks if id of chosen card already exists in the chosenCard array
 alert("Card already clicked."); 
}
chosenCards.push(cards[cardID].name); //pushes the card into "chosenCards" array 
chosenCardsID.push(cardID); //pushes the card id into "chosenCardsID" array
this.setAttribute("src", cards[cardID].image); //flips the card over to reveal its image 
if(chosenCards.length === 3){
setTimeout(Match, 200); //delays execution of given function by 200 milliseconds once three cards are selected
}

}

