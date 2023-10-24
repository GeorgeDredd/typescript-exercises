// Object Types:

// 1.Define an object type for a book with properties like title and author.
type Book = {
    title: string;m
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
  