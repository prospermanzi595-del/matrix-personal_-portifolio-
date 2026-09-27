document.getElementById("year").textContent = new Date().getFullYear();

const travelMomentBtn = document.getElementById("travelMoment");
const quoteBox = document.getElementById("quote-box");

const travelNotes = [
  '"Savor the journey—every bite is a new story from the road."',
  '"A bowl of Tom Yum is a passport to Thailand in one fragrant sip."',
  '"The best memories are made where the spice meets the breeze."'
];

travelMomentBtn.addEventListener("click", () => {
  const nextQuote = travelNotes[Math.floor(Math.random() * travelNotes.length)];
  quoteBox.textContent = nextQuote;
  travelMomentBtn.textContent = "Fresh inspiration loaded";

  setTimeout(() => {
    travelMomentBtn.textContent = "Inspire my next trip";
  }, 1200);
});
