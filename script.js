let quotes = [];
let currentIndex = 0;

async function fetchQuotes() {
    try {
        const response = await fetch('RikyuDouka.json');
        const data = await response.json();
        quotes = data.quotes;
    } catch (error) {
        console.error('Error fetching quotes:', error);
    }
}

function displayQuote(index) {
    if (quotes.length === 0) return;
    
    const quote = quotes[index];
    
    document.getElementById('no').textContent = quote.No;
    document.getElementById('original').textContent = quote.Original;
    document.getElementById('furigana').textContent = quote.Furigana;
}

function displayRandomQuote() {
    if (quotes.length === 0) return;
    
    currentIndex = Math.floor(Math.random() * quotes.length);
    displayQuote(currentIndex);
}

function displayPreviousQuote() {
    if (quotes.length === 0) return;
    
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
    displayQuote(currentIndex);
}

function displayNextQuote() {
    if (quotes.length === 0) return;
    
    currentIndex = (currentIndex + 1) % quotes.length;
    displayQuote(currentIndex);
}

document.getElementById('refresh-btn').addEventListener('click', displayRandomQuote);
document.getElementById('prev-btn').addEventListener('click', displayPreviousQuote);
document.getElementById('next-btn').addEventListener('click', displayNextQuote);

// 初期化
(async function init() {
    await fetchQuotes();
    displayRandomQuote();
})();