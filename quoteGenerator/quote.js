var quotes = [  "The best way to predict the future is to create it.",  "The only limit to our realization of tomorrow will be our doubts of today.",  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",  "The only way to do great work is to love what you do.",  "Believe you can and you're halfway there."];


function generateQuote() {
    // Generate a random index from the quotes array
    var index = Math.floor(Math.random() * quotes.length);
  
    // Get the quote at the generated index
    var quote = quotes[index];
  
    // Set the innerHTML of the quote element to the generated quote
    document.getElementById("quote").innerHTML = quote;
  }
  

