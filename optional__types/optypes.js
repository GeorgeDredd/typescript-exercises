// Optional Types:
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
