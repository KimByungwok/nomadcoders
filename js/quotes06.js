const quotes = [
    {
        quote:"명언1",
        author:"명언11",
    },
    {
        quote:"명언1",
        author:"명언11",
    },
    {
        quote:"명언2",
        author:"명언22",
    },
    {
        quote:"명언3",
        author:"명언33",
    },
    {
        quote:"명언4",
        author:"명언44",
    },
    {
        quote:"명언5",
        author:"명언55",
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;