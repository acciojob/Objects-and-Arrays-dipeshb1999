const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};
// Given array
var players = ["John", "Mike", "Sarah", "Tom"];

// Given object
var person = {
  name: "Alex",
  age: 25,
};

// Create a reference to players array
var team = players;

// Create a copy of players array
var team1 = players.slice();

// Create a copy of person object
var cap1 = Object.assign({}, person);

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
