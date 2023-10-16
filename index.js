// Enums:
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
// Create a function that accepts an object with an interface as an argument.
function printVehicleInfo(vehicle) {
    console.log("Make: ".concat(vehicle.make, ", Model: ").concat(vehicle.model, ", Year: ").concat(vehicle.year));
}
var car = { make: "Toyota", model: "Camry", year: 2020 };
printVehicleInfo(car);
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var point = new Point(3, 4);
var updateQuantity = function (item, newQuantity) { return (__assign(__assign({}, item), { quantity: newQuantity })); };
// 5.Write a function that accepts an object type as a parameter and returns a string.
function greetUser(user) {
    return "Hello, ".concat(user.name, "!");
}
var user = { name: "Alice", age: 30, address: "123 Main St" };
var greeting = greetUser(user);
console.log(greeting);
var colors = ["Red", "Green", "Blue"];
function processColors(colors) {
    for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
        var color_1 = colors_1[_i];
        console.log("Color: ".concat(color_1));
    }
}
processColors(colors);
var prices = [10.99, 5.99, 20.49, 8.79];
var minPrice = Math.min.apply(Math, prices);
var maxPrice = Math.max.apply(Math, prices);
var names = ["Alice", "Bob", "Charlie", "David"];
var sortedNames = names.sort();
// 4.Write a function that accepts an array type and returns a reversed array.
function reverseArray(arr) {
    return __spreadArray([], arr, true).reverse();
}
var reversedNames = reverseArray(names);
var coordinates = [
    [0, 0],
    [1, 1],
    [2, 2],
];
function calculateTotalDistance(coords) {
    var totalDistance = 0;
    for (var i = 1; i < coords.length; i++) {
        var _a = coords[i - 1], x1 = _a[0], y1 = _a[1];
        var _b = coords[i], x2 = _b[0], y2 = _b[1];
        var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        totalDistance += distance;
    }
    return totalDistance;
}
var totalDistance = calculateTotalDistance(coordinates);
console.log("Total Distance: ".concat(totalDistance));
function squareNumberOrConvertToString(num) {
    if (typeof num === "number") {
        return num * num;
    }
    else {
        return "Cannot square a string: ".concat(num);
    }
}
function calculateArea(shape) {
    switch (shape.type) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.sideLength, 2);
        case "triangle":
            return (shape.base * shape.height) / 2;
    }
}
function getType(value) {
    return typeof value;
}
function convertLength(length, toUnit) {
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
function processItems(items) {
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        if (typeof item === "number") {
            console.log("Number: ".concat(item));
        }
        else {
            console.log("String: ".concat(item));
        }
    }
}
// 2.Create a function that accepts an object with optional properties and handles missing values.
function printContactInfo(person) {
    console.log("Name: ".concat(person.name));
    console.log("Age: ".concat(person.age));
    if (person.email) {
        console.log("Email: ".concat(person.email));
    }
    if (person.phone) {
        console.log("Phone: ".concat(person.phone));
    }
}
// 4.Write a function that accepts an optional type and handles both defined and undefined inputs.
function printConfig(config) {
    if (config) {
        console.log("API Key: ".concat(config.apiKey));
        console.log("Max Connections: ".concat(config.maxConnections));
        console.log("Timeout: ".concat(config.timeout));
    }
    else {
        console.log("No configuration provided.");
    }
}
