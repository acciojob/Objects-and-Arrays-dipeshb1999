var players = ["Player 1", "Player 2", "Player 3"];

var person = {
  name: "John Doe",
  age: 25
};

var team = players;
var team1 = players.slice();
var cap1 = { ...person };

console.log(team);   // Output: ["Player 1", "Player 2", "Player 3"]
console.log(team1);  // Output: ["Player 1", "Player 2", "Player 3"]
console.log(cap1);   // Output: { name: "John Doe", age: 25 }
