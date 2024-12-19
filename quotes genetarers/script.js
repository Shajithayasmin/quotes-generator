
const quotes = [
  `"You have to believe in yourself when no one else does" `,
  `"When you have a dream, you have got to grab it and never let go"`,
   `"Spread love everywhere you go"`,
   `"Be yourself; everyone else is already taken."` 
];
function Quotes() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('output').innerHTML = randomQuote;
}
document.getElementById('quotesbtn').addEventListener('click', Quotes);
