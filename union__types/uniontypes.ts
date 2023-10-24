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