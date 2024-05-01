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

    // Update player names dis
