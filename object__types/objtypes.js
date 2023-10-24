// Object Types:
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
var updateQuantity = function (item, newQuantity) { return (__assign(__assign({}, item), { quantity: newQuantity })); };
// 5.Write a function that accepts an object type as a parameter and returns a string.
function greetUser(user) {
    return "Hello, ".concat(user.name, "!");
}
var user = { name: "Alice", age: 30, address: "123 Main St" };
var greeting = greetUser(user);
console.log(greeting);
