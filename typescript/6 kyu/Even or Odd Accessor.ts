// Create a function or callable object that takes an integer as an argument 
// and returns "Even" for even numbers or "Odd" for odd numbers. 
// The function should also return "Even" or "Odd" when accessing a value at an integer index.

// For example:

// evenOrOdd(2); //'Even'
// evenOrOdd[2]; //'Even'
// evenOrOdd(7); //'Odd'
// evenOrOdd[7]; //'Odd'
type EvenOrOddType = {
  (n: number): "Even" | "Odd";
  [key: number]: "Even" | "Odd";
};

const evenOrOdd = ((n: number) =>
  n % 2 === 0 ? "Even" : "Odd") as EvenOrOddType;

for (let i = 0; i <= 1000; i++) {
  evenOrOdd[i] = i % 2 === 0 ? "Even" : "Odd";
}


console.log(evenOrOdd(2)); // "Even"
console.log(evenOrOdd[2]); // "Even"
console.log(evenOrOdd(7)); // "Odd"
console.log(evenOrOdd[7]); // "Odd"