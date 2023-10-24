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