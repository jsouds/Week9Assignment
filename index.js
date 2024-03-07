// Define the ranks and suits using arrays
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['♠', '♣', '♥', '♦'];

// Define a deck using an array
let deck = [];
for (let suit of suits) {
  for (let rank of ranks) {
    deck.push(rank + suit);
  }
}

// Used Fisher-Yates algorithm to shuffle deck
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// Shuffle the deck of cards
shuffleDeck(deck);
console.log(deck);

// Deal cards to both players
function dealCard() {
    return deck.pop();
  }
  
  // Define player 1 and player 2
  let player1 = [];
  let player2 = [];
  
  // Deal cards to players
  for (let i = 0; i < 26; i++) {
    player1.push(dealCard());
    player2.push(dealCard());
  }
  
  console.log(player1);
  console.log(player2);

  // Compare each players' cards and determine the winner
function compareCards(card1, card2) {
    const rank1 = ranks.indexOf(card1.slice(0, -1));
    const rank2 = ranks.indexOf(card2.slice(0, -1));
    if (rank1 > rank2) {
      return 'player1';
    } else if (rank1 < rank2) {
      return 'player2';
    } else {
      return 'tie';
    }
  }
  
  // Execute the game itself
  for (let i = 0; i < 26; i++) {
    const card1 = player1[i];
    const card2 = player2[i];
    console.log(`Player 1: ${card1} | Player 2: ${card2}`);
    const winner = compareCards(card1, card2);
    if (winner === 'player1') {
      console.log('Player 1 wins!');
    } else if (winner === 'player2') {
      console.log('Player 2 wins!');
    } else {
      console.log("It's a tie!");
    }
  }