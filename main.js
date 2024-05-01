// initial player names and leaderboard object
let player1 = "Player 1";
let player2 = "Player 2";
let leaderboard = {};

// Edit names function
function editNames() {
  // Prompt users to enter player names
  player1 = prompt("Enter player 1's name");
  player2 = prompt("Enter player 2's name");

  // Check if both names are valid
  if (!player1 || !player2) {
    alert("Please enter valid names for both players.");
    return;
  }

  // Update player names displayed on the webpage
  document.querySelector("p.Player1").innerHTML = player1;
  document.querySelector("p.Player2").innerHTML = player2;
}

// Roll dice function
function rollDice() {
  //  dice images and result element
  let diceNum1 = document.querySelector(".image1");
  let diceNum2 = document.querySelector(".image2");
  let result = document.querySelector("h1");
  let leaderboardContainer = document.getElementById("leaderboard-container");

  // dice rolling animation
  diceNum1.setAttribute("src", "images/dice gif2.gif");
  diceNum2.setAttribute("src", "images/dice gif2.gif");

  // Set timeout to simulate dice rolling animation
  setTimeout(() => {
    // Generate random numbers for each dice
    let randomNum1 = Math.floor(Math.random() * 6) + 1;
    let randomNum2 = Math.floor(Math.random() * 6) + 1;

    // Update dice images with the result
    diceNum1.setAttribute("src", "images/dice" + randomNum1 + ".png");
    diceNum2.setAttribute("src", "images/dice" + randomNum2 + ".png");

    // Winner method + display leaderboard
    if (randomNum1 === randomNum2) {
      result.innerHTML = "Draw!";
    } else if (randomNum1 < randomNum2) {
      result.innerHTML = player2 + " WINS!";
      updateLeaderboard(player2);
    } else {
      result.innerHTML = player1 + " WINS!";
      updateLeaderboard(player1);
    }

    // Display leaderboard on the webpage
    displayLeaderboard(leaderboardContainer);
  }, 2500);
}

// Leaderboard update function
function updateLeaderboard(player) {
  leaderboard[player] = (leaderboard[player] || 0) + 1;
}

// Function to display leaderboard on the webpage
function displayLeaderboard(container) {
  container.innerHTML = "<h2>Leaderboard</h2><ul>";
  for (let player in leaderboard) {
    container.innerHTML += `<li>${player}: ${leaderboard[player]} wins</li>`;
  }
  container.innerHTML += "</ul>";
}
//Instructions Function
function toggleInstructions() {
  var instructionsContent = document.getElementById("instructionsContent");
  if (instructionsContent.style.display === "none") {
    instructionsContent.style.display = "block";
  } else {
    instructionsContent.style.display = "none";
  }
}
