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