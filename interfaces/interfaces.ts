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
  