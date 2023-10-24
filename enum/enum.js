// Enums:
// 1.Create an enum for days of the week and display the string representation for a given numeric value.
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Sunday"] = 0] = "Sunday";
    DaysOfWeek[DaysOfWeek["Monday"] = 1] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 2] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 3] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 4] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 5] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 6] = "Saturday";
})(DaysOfWeek || (DaysOfWeek = {}));
var day = DaysOfWeek.Wednesday;
var dayString = DaysOfWeek[day];
console.log(dayString); // Output: "Wednesday"
// 2.Define an enum for basic geometric shapes and write a function that takes a shape as an argument.
var Shape;
(function (Shape) {
    Shape[Shape["Circle"] = 0] = "Circle";
    Shape[Shape["Square"] = 1] = "Square";
    Shape[Shape["Triangle"] = 2] = "Triangle";
})(Shape || (Shape = {}));
function getArea(shape) {
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
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["BadRequest"] = 400] = "BadRequest";
    HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
    HttpStatus[HttpStatus["InternalServerError"] = 500] = "InternalServerError";
})(HttpStatus || (HttpStatus = {}));
function getStatusMessage(code) {
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
var statusMessage = getStatusMessage(HttpStatus.OK);
console.log(statusMessage); // Output: "OK"
// 4.Implement a type that accepts only specific enum values as input.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color = Color.Red; // Valid
var invalidColor = Color.Green; // Error
// 5.Write a function that iterates through the keys of an enum and returns an array of their values.
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
function getEnumValues(enumObj) {
    return Object.keys(enumObj)
        .filter(function (key) { return !isNaN(Number(enumObj[key])); })
        .map(function (key) { return enumObj[key]; });
}
var directionValues = getEnumValues(Direction);
console.log(directionValues); // Output: ["North", "South", "East", "West"]
