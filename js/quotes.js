const quotes = [
  {
    quote: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
  },
  {
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    author: "Albert Einstein",
  },
  {
    quote: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
  },
  {
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
