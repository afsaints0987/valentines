const heart = document.querySelector(".heart");
const text = document.querySelector(".text");
const button = document.querySelector(".btn");
const message = "Happy Valentine's Day!";
let currentIndex = 0;
let displayText = ""
const speed = 100;

function revealHeart() {
  heart.style.display = "block";
  typeWriter();
  button.style.display = "none"
}

function typeWriter() {
  const intervalId = setInterval(() => {
    if (currentIndex < message.length) {
      if (message[currentIndex] === " ") {
        displayText += " ";
        currentIndex++;
      } else {
        displayText += message[currentIndex];
        currentIndex++;
      }
    } else {
      clearInterval(intervalId);
    }
    // Update the element with id "output" (replace with your actual element id)
    text.innerText = displayText;
  }, speed);
}




button.addEventListener("click", revealHeart);
