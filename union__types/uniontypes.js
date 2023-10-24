// Union Types:
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
