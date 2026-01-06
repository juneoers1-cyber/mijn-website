function klik() {
  alert("Je website werkt perfect 🚀");
}

function toggleDark() {
  document.body.classList.toggle("dark");
}
// Mini clicker spel
let spelScore = 0;
let tijd = 10;
let spelBegonnen = false;

const scoreEl = document.getElementById("score");
const tijdEl = document.getElementById("tijd");
const spelKnop = document.getElementById("spelKnop");

spelKnop.onclick = () => {
  if (!spelBegonnen) startSpel();
  spelScore++;
  scoreEl.textContent = spelScore;
};

function startSpel() {
  spelBegonnen = true;
  const timer = setInterval(() => {
    tijd--;
    tijdEl.textContent = tijd;
    if (tijd === 0) {
      clearInterval(timer);
      spelKnop.disabled = true;
      alert("Game over! Je score: " + spelScore + " punten 🎉");
    }
  }, 1000);
}
