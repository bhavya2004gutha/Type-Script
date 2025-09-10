
let fruits: string[] = ["APPLE", "BANANA", "ORANGE"];
console.log(fruits);


let numbers: number[] = [1, 2, 3, 4, 5, 6];
console.log(numbers);


let mixed: (string | number | boolean)[] = ["1", "two", false];
console.log(mixed);


let person: [string, number] = ["bhavya", 21];
console.log(person);

let emotions: string[] = ["happy", "sad", "angry"];
console.log(emotions);


let persons: { name: string; age: number } = {
  name: "bhavya",
  age: 21
};

console.log(persons);


let user = {
  username: "bhavya",
  isAdmin: true
};

console.log(user);

enum CardinalDirections {
  North = 'dddddd',
  East = "dddddd",
  South = "dddddd",
  West = "dddddd"
};

console.log(CardinalDirections.North);
console.log(CardinalDirections.West);

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(101);

function printhello(): void{
  console.log("Hello");
}
printhello();




