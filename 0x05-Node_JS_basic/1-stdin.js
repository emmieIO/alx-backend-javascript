// 1-stdin.js
const readline = require("readline");

// Create an interface for reading input from stdin and writing output to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Ask the user for their name
rl.question("", (answer) => {
  // Display the user's name
  console.log(`Your name is: ${answer}`);

  // Close the readline interface
  rl.close();
});

// Listen for the close event to display the closing message
rl.on("close", () => {
  console.log("This important software is now closing");
});
