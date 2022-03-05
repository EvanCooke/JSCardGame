// To run it as a module, it needs to run on a web server
// https://stackoverflow.com/questions/52139811/javascript-module-not-working-in-browser
import Deck from './deck.js'

const deck = new Deck()
deck.shuffle()
console.log(deck.cards)
