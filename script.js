// Quiz functionality
function checkAnswer(answer) {
  const result = document.getElementById("quiz-result");
  if (answer === 4) {
    result.textContent = "🎉 Correct!";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Wrong answer. Try again.";
    result.style.color = "red";
  }
}

// Joke API fetch
function loadJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      const joke = `${data.setup} - ${data.punchline}`;
      document.getElementById("joke").textContent = joke;
    })
    .catch(err => {
      document.getElementById("joke").textContent = "Failed to load joke.";
      console.error("API error:", err);
    });
}
