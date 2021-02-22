window.addEventListener('load', init);

// Global variables


// Available Levels 

const levels = {
  easy: 5,
  medium: 3,
  hard: 2,
}

// To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying; 

// DOM Elements 

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

// Array of Words 


const words = [
  'hat',
  'river',
  'lucky',
  'inicializar',
  'competir',
  'statue',
  'generate',
  'competencia',
  'stubborn',
  'cocktail',
  'desastroso',
  'framework',
  'mangiare',
  'settimanale',
  'report',
  'primavera',
  'runaway',
  'skolor',
  'distanskurser',
  'hitta',
  'educational',
  'institution',
  'habitualmente',
  'joke',
  'profesional',
  'techniquement',
  'developer',
  'desarrolladora',
  'establishment',
  'hero',
  'meticuloso',
  'consentement',
  'mesurer',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'diablo',
  'siblings',
  'hermanos',
  'jugarreta',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

// Initialize game 

function init() {
  // Show number of seconds in UI 
  seconds.innerHTML = currentLevel;
  // Load word from array 
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status 
  setInterval(checkStatus, 50);
}

// Start Match 
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // If score is -1 (restarting the game) display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }

}

// Match currentWord to wordInput
function matchWords() {
  
    if(wordInput.value === currentWord.innerHTML) {
      message.innerHTML = "Correct 🥳";
      return true;
    } else {
      message.innerHTML = "";
      return false;
    }
  
}

// Pick & show random word 

function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word from the array
  currentWord.innerHTML = words[randIndex];
}


// Countdown timer 

function countdown() {
  // Make sure time is not run out 
  if (time > 0) {
    // Decrement time 
    time--;
  } else if(time === 0) {
    // Game is over 
    isPlaying = false;
  }
  // Show time 
  timeDisplay.innerHTML = time;
}

// Check game status 

function checkStatus() {
  if(!isPlaying && time === 0) {
    message.innerHTML = "Game Over 😔 !";
    score = -1;

  }
}
