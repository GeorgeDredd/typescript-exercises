// Interfaces:
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
