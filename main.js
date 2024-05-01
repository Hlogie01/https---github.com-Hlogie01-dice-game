// initial player names and leaderboard object
let player1 = "Player1";
let player2 = "Player2";
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
// Roll dice function
function rollDice() {
  //  dice images and result element
  let diceNum1 = document.querySelector(".img1");
  let diceNum2 = document.querySelector(".img2");
  let result = document.querySelector('h1');
  let leaderboardContainer = document.getElementById('leaderboard-container');

  // dice rolling animation
  diceNum1.setAttribute("src", "dice-images/diceroll.gif");
  diceNum2.setAttribute("src", "dice-images/diceroll.gif");

  // Set timeout to simulate dice rolling animation
  setTimeout(() => {
      // Generate random numbers for each dice
      let randomNum1 = Math.floor(Math.random() * 6) + 1;
      let randomNum2 = Math.floor(Math.random() * 6) + 1;

       // Update dice images with the result
      diceNum1.setAttribute('src', 'dice-images/dice' + randomNum1 + '.png');
      diceNum2.setAttribute('src', 'dice-images/dice' + randomNum2 + '.png');