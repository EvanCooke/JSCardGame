const SUITS = ["♣", "♦", "♥", "♠"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

export default class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards
  }

  get numberOfCards() {
    return this.cards.length
  }

  shuffle() {
    for(let i = this.numberOfCards - 1; i > 0; i--){
      const newIndex = Math.floor(Math.random() * (i + 1)) // Math.random return a number between 0 and 1
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
  }
}

class Card {
  constructor(suit, value){
    this.suit = suit
    this.value = value
  }
}

// -----EXAMPLE OF MAP FUNCTION------
//
// const array1 = [1, 4, 9, 16];
//
// // pass a function to map
// const map1 = array1.map(x => x * 2);
//
// console.log(map1);
// // expected output: Array [2, 8, 18, 32]


// -----EXAMPLE OF FLAT FUNCTION------
//
// const arr1 = [0, 1, 2, [3, 4]];
//
// console.log(arr1.flat());
// // expected output: [0, 1, 2, 3, 4]
//
// const arr2 = [0, 1, 2, [[[3, 4]]]];
//
// console.log(arr2.flat(2));
// // expected output: [0, 1, 2, [3, 4]]


// 7:00
function freshDeck() {
  return SUITS.flatMap(suit => {
    return VALUES.map(value => {
      return new Card(suit, value)
    })
  })
}
