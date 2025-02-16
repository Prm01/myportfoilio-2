const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteText = document.getElementById("quote");
    const quoteAuthor = document.getElementById("author");

    // Updating Quote and Author
    quoteText.textContent = `"${quotes[randomIndex].text}"`;
    quoteAuthor.textContent = `- ${quotes[randomIndex].author}`;

    // Adding Fade Animation
    quoteText.style.opacity = "0";
    quoteAuthor.style.opacity = "0";

    setTimeout(() => {
        quoteText.style.opacity = "1";
        quoteAuthor.style.opacity = "1";
    }, 200);
}
