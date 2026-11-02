// DRAG RACER
// This project demonstrates functions, scope, arrays, and closures.

// ARRAY: each car has a name and a speed value.
const cars = [
  { name: "Street Racer", speed: 7 },
  { name: "Turbo Racer", speed: 10 },
  { name: "Speedster", speed: 8 }
];

// GAME STATE: these variables are in the outer (global) scope.
let distance = 0;
let raceStarted = false;
let selectedCar = cars[0];

cnst resetButton = document.getElementById("resetButton");
const accelerateButton = document.getElementById("accelerateButton");
const resultsList = document.getElementById("results");

// FUNCTION: selects a car from the cars array.
function chooseCar() {
  selectedCar = cars[Number(carChoice.value)];
}

// FUNCTION: starts a new race.
function startRace() {
  chooseCar();
  distance = 0;
  raceStarted = true;
  playerCar.style.left = "0%";
  statusText.textContent = selectedCar.name + " is ready. Accelerate!";
  startButton.disabled = true;
  accelerateButton.disabled = false;
}

// FUNCTION: moves the car forward.
function accelerate() {
  if (!raceStarted) return;

  // LOCAL SCOPE: step exists only inside this function.
  const step = selectedCar.speed;
  distance = Math.min(distance + step, 100);
  playerCar.style.left = distance + "%";

  if (distance >= 100) {
    finishRace();
  } else {
    statusText.textContent = "Racing... " + distance + "% complete!";
  }
}

// CLOSURE: this function remembers the race result message
// even after createResultMessage has finished running.
function createResultMessage(carName) {
  const finishedAt = new Date().toLocaleTimeString();

  return function () {
    return carName + " finished the race at " + finishedAt + ".";
  };
}

// FUNCTION: ends the race and saves a result in the results array.
function finishRace() {
  raceStarted = false;
  accelerateButton.disabled = true;
  startButton.disabled = false;

  const getMessage = createResultMessage(selectedCar.name);
  const message = getMessage();

  // Add the result to the results list in the page.
  const resultItem = document.createElement("li");
  resultItem.textContent = message;
  resultsList.prepend(resultItem);
  statusText.textContent = "🏁 You won! " + message;
}

// FUNCTION: resets the game to its starting state.
function resetGame() {
  distance = 0;
  raceStarted = false;
  playerCar.style.left = "0%";
  statusText.textContent = "Ready? Press START RACE.";
  startButton.disabled = false;
  accelerateButton.disabled = true;
  chooseCar();
}

// EVENT LISTENERS: connect buttons and the car menu to functions.
startButton.addEventListener("click", startRace);
accelerateButton.addEventListener("click", accelerate);
resetButton.addEventListener("click", resetGame);
carChoice.addEventListener("change", chooseCar);
onst playerCar = document.getElementById("playerCar");
const carChoice = document.getElementById("carChoice");
const statusText = document.getElementById("status");
const startButton = document.getElementById("startButton");
co
