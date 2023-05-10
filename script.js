let players = ["Player 1", "Player 2", "Player 3"];

let person = {
  name: "John Doe",
  age: 25,
};

let team = players;
let team1 = [...players];
let cap1 = { ...person };
let players = ["Player 1", "Player 2", "Player 3"];

let person = {
  name: "John Doe",
  age: 25,
};

let team = players;
let team1 = [...players];
let cap1 = { ...person };

console.log(team);  // Output: ["Player 1", "Player 2", "Player 3"]
console.log(team1); // Output: ["Player 1", "Player 2", "Player 3"]
console.log(cap1);  // Output: { name: "John Doe", age: 25 }
players.push("Player 4");
person.age = 30;

console.log(team);  // Output: ["Player 1", "Player 2", "Player 3", "Player 4"]
console.log(team1); // Output: ["Player 1", "Player 2", "Player 3"]
console.log(cap1);  // Output: { name: "John Doe", age: 25 }
cap1.name = "Jane Smith";
console.log(cap1);  // Output: { name: "Jane Smith", age: 25 }
console.log(person); // Output: { name: "John Doe", age: 25 }
