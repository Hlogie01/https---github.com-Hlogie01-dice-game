// player names and leaderboard object
let player1 = "Player 1";
let player2 = "Player 2";
let leaderboard = {};

// changing names function
function editNames() {
  // Prompt users to enter player names
  player1 = prompt("Enter player 1's name");
  player2 = prompt("Enter player 2's name");

  // Validity of names
  if (!player1 || !player2) {
    alert("Please enter valid names for both players.");
    return;
  }

  // Update on player names displayed on the webpage
  document.querySelector("p.Player1").innerHTML = player1;
  document.querySelector("p.Player2").innerHTML = player2;

  leaderboard = {};
  let content = "<h2>Leaderboard</h2>";
  let leaderboardContainer = document.getElementById("leaderboard-container");
  leaderboardContainer.innerHTML = content;
}

// Roll dice function
function rollDice() {
  //  dice images and result element
  let diceNum1 = document.querySelector(".image1");
  let diceNum2 = document.querySelector(".image2");
  let result = document.querySelector("h1");
  let leaderboardContainer = document.getElementById("leaderboard-container");

  // animation on the rolling dice
  diceNum1.setAttribute("src", "images/gif.gif");
  diceNum2.setAttribute("src", "images/gif.gif");

  // Set timeout to simulate dice rolling animation
  setTimeout(() => {
    // Generate random numbers for each dice
    let randomNum1 = Math.floor(Math.random() * 6) + 1;
    let randomNum2 = Math.floor(Math.random() * 6) + 1;

    // Update dice images with the result
    diceNum1.setAttribute("src", "images/dice" + randomNum1 + ".png");
    diceNum2.setAttribute("src", "images/dice" + randomNum2 + ".png");

    // Winner outcome and display leaderboard
    if (randomNum1 === randomNum2) {
      result.innerHTML = "Draw!";
    } else if (randomNum1 < randomNum2) {
      result.innerHTML = player2 + " WINS!";
      updateLeaderboard(player2);
    } else {
      result.innerHTML = player1 + " WINS!";
      updateLeaderboard(player1);
    }

    // show  leaderboard on the webpage
    displayLeaderboard(leaderboardContainer);
  }, 2500);
}

// update function on leaderboard
function updateLeaderboard(player) {
  leaderboard[player] = (leaderboard[player] || 0) + 1;
}

// Function to display leaderboard on the webpage
function displayLeaderboard(container) {
  container.innerHTML = "<h2>Leaderboard</h2><ul>";
  for (let player in leaderboard) {
    container.innerHTML += `<li><span class="player-name">${player}: ${leaderboard[player]} wins</li>`;
  }
  container.innerHTML += "</ul>";
}
//Instructions Function
function toggleInstructions() {
  let instructionsContent = document.getElementById("instructionsContent");
  if (instructionsContent.style.display === "none") {
    instructionsContent.style.display = "block";
  } else {
    instructionsContent.style.display = "none";
  }
}


function goBack() {
  window.location.href = "instructions.html";
}