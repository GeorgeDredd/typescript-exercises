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