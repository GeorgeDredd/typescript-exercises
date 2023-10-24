// Array Types:
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var colors = ["Red", "Green", "Blue"];
function processColors(colors) {
    for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
        var color = colors_1[_i];
        console.log("Color: ".concat(color));
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
