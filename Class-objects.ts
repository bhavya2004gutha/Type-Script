// Function typing
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2, 6));

// Optional parameter
function greet(name?: string) {
  if (name) {
    console.log(`Hello, ${name}`);
  } else {
    console.log("Hello, guest");
  }
}
greet("Bhavya");
greet();         

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3));      

// Arrow function
const greetWithArrow = (name: string): string => {
  return `Hello, ${name}`;
};
console.log(greetWithArrow("Bhavya"));

// Classes with Access Modifiers
class Places {
  private name: string;
  public location: string;

  constructor(name: string, location: string) {
    this.name = name;
    this.location = location;
  }

  getDetails() {
    console.log(`Place name is ${this.name} and location is ${this.location}`);
  }
}

const myPlace = new Places("Goa", "India");
myPlace.getDetails();

// Getter and Setter
class Product {
  private _price: number = 0;

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value >= 0) {
      this._price = value;
    } else {
      throw new Error("Price must be positive");
    }
  }
}

const item = new Product();
item.price = 100;      
console.log(item.price);

// Peoples class fixed
class Peoples {
  private name: string = "bhavya";

  getname(): string {
    return this.name;
  }

  setname(name: string): void {
    this.name = name;
  }

  getch(): void {
    console.log(`bhavya ${this.name}`);
  }
}

const peoples = new Peoples();
peoples.setname("Alice");
console.log(peoples.getname());
peoples.getch();



// Inheritance example

class School {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  student() {
    console.log(`10,000+ students in ${this.name}`);
  }
}

class Teachers extends School {
  teacher() {
    console.log(`5,000+ teachers in ${this.name}`);
  }
}

const mystudent = new Teachers(" AGA KHAN  School");

mystudent.student();  
mystudent.teacher();  

// Abstract classes---An abstract class is like a blueprint for other classes.
// Subclass must implement the abstract method


abstract class Car {
  abstract color(): void; 

  move(): void {
    console.log("I like car driving...");
  }
}


class MyCar extends Car {
  color(): void {
    console.log("  i like car driving");
  }
}

const myCar = new MyCar();
myCar.move();      
myCar.color();     

// polymorphism
class Animal {
  speak(): void {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak(): void {
    console.log("Dog barks ");
  }
}


class Cat extends Animal {
  speak(): void {
    console.log("Cat meows ");
  }
}

const myDog = new Dog();
const myCat = new Cat();


myDog.speak(); 
myCat.speak(); 


// Define an interface
interface Person {
  name: string;
  age: number;
  greet(): void;
}

// Implement interface in a class
class Student implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
  }
}

const student1 = new Student("Bhavya", 21);
student1.greet();  

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}


// type guards
// using type of example
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); 
  } else {
    console.log(value.toFixed(2));   
  }
}
// custom 
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

// Discriminated Unions
type Circle = { kind: 'circle'; radius: number };
type Square = { kind: 'square'; side: number };
type Shape = Circle | Square;

function area(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
  }
}


type User = { name: string; age: number };
const updateUser = (user: Partial<User>) => {

};





