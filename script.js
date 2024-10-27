
const words = [  "Magician",
    "Expert",
    "Master",
    "Specialist",
    "Guru",
    "Virtuoso",
    "Maestro",
    "Problem Solver",
    "Solution Provider"]; 
let i = 0;
let letterIndex = 0;
const wordDiv = document.getElementById("word");

function typeWord() {
  if (letterIndex <= words[i].length) {
    wordDiv.textContent = words[i].substring(0, letterIndex);
    letterIndex++;
    setTimeout(typeWord, 100); 
  } else {
    setTimeout(eraseWord, 1000); 
  }
}

function eraseWord() {
  if (letterIndex >= 0) {
    wordDiv.textContent = words[i].substring(0, letterIndex);
    letterIndex--;
    setTimeout(eraseWord, 50);
  } else {
    i = (i + 1) % words.length; 
    letterIndex = 0;
    setTimeout(typeWord, 500);
  }
}

typeWord(); 
