// Enums:

// 1.Create an enum for days of the week and display the string representation for a given numeric value.

enum DaysOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
  }
  
  const day: DaysOfWeek = DaysOfWeek.Wednesday;
  const dayString: string = DaysOfWeek[day];
  console.log(dayString); // Output: "Wednesday"
  
// 2.Define an enum for basic geometric shapes and write a function that takes a shape as an argument.

enum Shape {
    Circle,
    Square,
    Triangle,
  }
  
  function getArea(shape: Shape): void {
    switch (shape) {
      case Shape.Circle:
        // Calculate area for a circle
        break;
      case Shape.Square:
        // Calculate area for a square
        break;
      case Shape.Triangle:
        // Calculate area for a triangle
        break;
    }
  }
  
// 3.Create an enum representing HTTP status codes and return the status message for a given code.
enum HttpStatus {
    OK = 200,
    BadRequest = 400,
    NotFound = 404,
    InternalServerError = 500,
  }
  
  function getStatusMessage(code: HttpStatus): string {
    switch (code) {
      case HttpStatus.OK:
        return "OK";
      case HttpStatus.BadRequest:
        return "Bad Request";
      case HttpStatus.NotFound:
        return "Not Found";
      case HttpStatus.InternalServerError:
        return "Internal Server Error";
      default:
        return "Unknown Status";
    }
  }
  
  const statusMessage: string = getStatusMessage(HttpStatus.OK);
  console.log(statusMessage); // Output: "OK"
  
// 4.Implement a type that accepts only specific enum values as input.
enum Color {
    Red,
    Green,
    Blue,
  }
  
  type ValidColors = Color.Red | Color.Blue;
  
  const color: ValidColors = Color.Red; // Valid
  const invalidColor: ValidColors = Color.Green; // Error
  
// 5.Write a function that iterates through the keys of an enum and returns an array of their values.
enum Direction {
    North,
    South,
    East,
    West,
  }
  
  function getEnumValues(enumObj: any): string[] {
    return Object.keys(enumObj)
      .filter((key) => !isNaN(Number(enumObj[key])))
      .map((key) => enumObj[key]);
  }
  
  const directionValues: string[] = getEnumValues(Direction);
  console.log(directionValues); // Output: ["North", "South", "East", "West"]
  

// Types:

// 1.Define a type for a person with properties like name, age, and email.
type Person = {
    name: string;
    age: number;
    email?: string; // Optional property
  };
  
// 2.Create a custom type for representing a point in 2D space (x and y coordinates).
type Point2D = {
    x: number;
    y: number;
  };
  
// 3.Implement a type for a shopping cart item with a name, price, and quantity.
type CartItem = {
    name: string;
    price: number;
    quantity: number;
  };
  
// 4.Write a type that combines two existing types into a new one.
type Employee = {
    name: string;
    role: string;
  };
  
  type Address = {
    street: string;
    city: string;
  };
  
  type EmployeeWithAddress = Employee & Address;
  
// 5.Define a type for a callback function that takes two numbers and returns a number.
type MathCallback = (a: number, b: number) => number;


// Interfaces:

// 1.Create an interface for a vehicle with properties like make, model, and year.
interface Vehicle {
    make: string;
    model: string;
    year: number;
  }
  
// 2.Define an interface for a user with required and optional properties.
interface User {
    username: string;
    email?: string;
  }
  
// 3.Implement an interface for a geometric shape with a method to calculate its area.
interface Shape {
    calculateArea(): number;
  }
  
  class Circle implements Shape {
    radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
// Create a function that accepts an object with an interface as an argument.
function printVehicleInfo(vehicle: Vehicle) {
    console.log(`Make: ${vehicle.make}, Model: ${vehicle.model}, Year: ${vehicle.year}`);
  }
  
  const car: Vehicle = { make: "Toyota", model: "Camry", year: 2020 };
  printVehicleInfo(car);
  
// 5.Write an interface for a class constructor and use it to create an object.
interface Point2D {
    x: number;
    y: number;
  }
  
  class Point implements Point2D {
    constructor(public x: number, public y: number) {}
  }
  
  const point: Point2D = new Point(3, 4);
  

// Object Types:

// 1.Define an object type for a book with properties like title and author.
type Book = {
    title: string;
    author: string;
  };
  
// 2.Create an object type for a person with nested address properties.
type Address = {
    street: string;
    city: string;
  };
  
  type Person = {
    name: string;
    age: number;
    address: Address;
  };
  
// 3.Implement an object type for a shopping cart item with methods to update the quantity.
type CartItem = {
    name: string;
    price: number;
    quantity: number;
  };
  
  const updateQuantity = (item: CartItem, newQuantity: number): CartItem => ({
    ...item,
    quantity: newQuantity,
  });
  
// 4.Define an object type for a user with properties for name, age, and address.
type User = {
    name: string;
    age: number;
    address: string;
  };
  
// 5.Write a function that accepts an object type as a parameter and returns a string.
function greetUser(user: User): string {
    return `Hello, ${user.name}!`;
  }
  
  const user: User = { name: "Alice", age: 30, address: "123 Main St" };
  const greeting: string = greetUser(user);
  console.log(greeting);
  

// Array Types:

// 1.Create an array type for a list of colors and write a function that processes the array.
type Color = "Red" | "Green" | "Blue";
const colors: Color[] = ["Red", "Green", "Blue"];

function processColors(colors: Color[]): void {
  for (const color of colors) {
    console.log(`Color: ${color}`);
  }
}

processColors(colors);

// 2.Define an array type for a list of product prices and find the highest and lowest prices.
type ProductPrices = number[];
const prices: ProductPrices = [10.99, 5.99, 20.49, 8.79];

const minPrice: number = Math.min(...prices);
const maxPrice: number = Math.max(...prices);

// 3.Implement an array type for a list of names and sort them in alphabetical order.
type Names = string[];
const names: Names = ["Alice", "Bob", "Charlie", "David"];

const sortedNames: Names = names.sort();

// 4.Write a function that accepts an array type and returns a reversed array.
function reverseArray<T>(arr: T[]): T[] {
    return [...arr].reverse();
  }
  
  const reversedNames: Names = reverseArray(names);
  
// 5.Create an array type for a list of coordinates (x and y) and calculate the total distance.
type Coordinate = [number, number];
const coordinates: Coordinate[] = [
  [0, 0],
  [1, 1],
  [2, 2],
];

function calculateTotalDistance(coords: Coordinate[]): number {
  let totalDistance = 0;
  for (let i = 1; i < coords.length; i++) {
    const [x1, y1] = coords[i - 1];
    const [x2, y2] = coords[i];
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    totalDistance += distance;
  }
  return totalDistance;
}

const totalDistance = calculateTotalDistance(coordinates);
console.log(`Total Distance: ${totalDistance}`);


// Union Types:

// 1.Create a function that accepts a union type for numbers and returns the square of the input.
type NumberOrString = number | string;

function squareNumberOrConvertToString(num: NumberOrString): number | string {
  if (typeof num === "number") {
    return num * num;
  } else {
    return `Cannot square a string: ${num}`;
  }
}

// 2.Define a union type for different shapes (circle, square, triangle) and calculate their areas.
type Circle = { type: "circle"; radius: number };
type Square = { type: "square"; sideLength: number };
type Triangle = { type: "triangle"; base: number; height: number };

type Shape = Circle | Square | Triangle;

function calculateArea(shape: Shape): number {
  switch (shape.type) {
    case "circle":
      return Math.PI * Math.pow(shape.radius, 2);
    case "square":
      return Math.pow(shape.sideLength, 2);
    case "triangle":
      return (shape.base * shape.height) / 2;
  }
}

// 3.Implement a union type for different data types (number, string, boolean) and return the type of the input.
type NumberOrStringOrBoolean = number | string | boolean;

function getType(value: NumberOrStringOrBoolean): string {
  return typeof value;
}

// 4.Write a function that accepts a union type for different units (feet, meters) and converts between them.
type Feet = { value: number; unit: "feet" };
type Meters = { value: number; unit: "meters" };

type Length = Feet | Meters;

function convertLength(length: Length, toUnit: "feet" | "meters"): Length {
  if (length.unit === toUnit) {
    return length;
  }
  if (length.unit === "feet" && toUnit === "meters") {
    return { value: length.value * 0.3048, unit: "meters" };
  }
  if (length.unit === "meters" && toUnit === "feet") {
    return { value: length.value * 3.28084, unit: "feet" };
  }
}

// 5.Create a type for a list of items that can be numbers or strings, and process the items accordingly.
type Item = number | string;
type ItemList = Item[];

function processItems(items: ItemList): void {
  for (const item of items) {
    if (typeof item === "number") {
      console.log(`Number: ${item}`);
    } else {
      console.log(`String: ${item}`);
    }
  }
}


// Optional Types:

// 1.Define an object type for a person with optional properties for email and phone.
type Person = {
    name: string;
    age: number;
    email?: string;
    phone?: string;
  };
  
// 2.Create a function that accepts an object with optional properties and handles missing values.
function printContactInfo(person: Person): void {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    if (person.email) {
      console.log(`Email: ${person.email}`);
    }
    if (person.phone) {
      console.log(`Phone: ${person.phone}`);
    }
  }
  
// 3.Implement a type for a configuration object with optional settings.
type Config = {
    apiKey?: string;
    maxConnections?: number;
    timeout?: number;
  };
  
// 4.Write a function that accepts an optional type and handles both defined and undefined inputs.
function printConfig(config?: Config): void {
    if (config) {
      console.log(`API Key: ${config.apiKey}`);
      console.log(`Max Connections: ${config.maxConnections}`);
      console.log(`Timeout: ${config.timeout}`);
    } else {
      console.log("No configuration provided.");
    }
  }
  
// 5.Define an optional type for a callback function that takes two numbers and returns a number.
type OptionalCallback = ((a: number, b: number) => number) | undefined;
