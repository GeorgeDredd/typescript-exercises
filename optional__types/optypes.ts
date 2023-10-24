// Optional Types:

// 1.Define an object type for a person with optional properties for email and phone.
type Person = {
    name: string;
    age: number;
    email?: string;
    phone?: string;
  };
  
// 2.Create a function that accepts an object with optional properties and handles missing values.
function printContactInfo(person: Person): void {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    if (person.email) {
      console.log(`Email: ${person.email}`);
    }
    if (person.phone) {
      console.log(`Phone: ${person.phone}`);
    }
  }
  
// 3.Implement a type for a configuration object with optional settings.
type Config = {
    apiKey?: string;
    maxConnections?: number;
    timeout?: number;
  };
  
// 4.Write a function that accepts an optional type and handles both defined and undefined inputs.
function printConfig(config?: Config): void {
    if (config) {
      console.log(`API Key: ${config.apiKey}`);
      console.log(`Max Connections: ${config.maxConnections}`);
      console.log(`Timeout: ${config.timeout}`);
    } else {
      console.log("No configuration provided.");
    }
  }
  
// 5.Define an optional type for a callback function that takes two numbers and returns a number.
type OptionalCallback = ((a: number, b: number) => number) | undefined;