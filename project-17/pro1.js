var quote = document.getElementById('quote');
var randomQuotes = ["\"It does not mater how slowly you go as long as you do not stop.\"", 
                    "\"Life is really simple, but we insist on making it complicated.\"", 
                    "\"Only the wisest and stupidest of men never change.\"", 
                    "\"Wherever you go, go with all your heart.\"", 
                    "\"Choose a job you love, and you will never have to work a day in your life.\"", 
                    "\"The will to win, the desire to succeed, the urge to reach your full potential.\"", 
                    "\"Our greatest glory is not in never falling, but in rising every time we fall.\"", 
                    "\"Everything has beauty, but not everyone sees it.\"", 
                    "\"Silence is a true friend who never betrays.\""];

function changeQuotes() {
  
  var i = Math.floor((Math.random() * randomQuotes.length));
  // document.write(i);
            quote.innerText = randomQuotes[i];
}

changeQuotes();