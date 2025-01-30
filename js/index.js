
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
];

cards.sort(() => 0.5 - Math.random()); //sorts the cards in a random order 
const chosenCards = []; //empty array that chosen cards will be pushed into 
const gridDisplay = document.getElementById("grid"); 

function gridBoard(){
  for(let i = 0; i < cards.length; i++){ 
    const card = document.createElement("img"); //creates a card for each object in the array
    card.setAttribute("src", "images/card-back.png"); //sets the default card image 
    card.setAttribute("data-id", i); //sets the card id
    card.addEventListener('click', flip); //adds event listener to the card that calls the "flip" function when clicked
    gridDisplay.append(card); 
  }
}

gridBoard(); 

function flip(){
const cardID = this.getAttribute("data-id"); //retrieve the id of the chosen card to get its name
console.log(cards[cardID].name); 
chosenCards.push(cards[cardID].name); //push the card into "chosenCards" array 
console.log(chosenCards);
this.setAttribute("src", cards[cardID].image); //'flips' the card over to reveal its image 

}

