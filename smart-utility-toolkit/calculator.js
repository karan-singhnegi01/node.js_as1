const args = process.argv.slice(2);

let operation = args[0];
let num1 = Number(args[1]);
let num2 = Number(args[2]);

if (!operation || isNaN(num1) || isNaN(num2)) {
    console.log("Please enter a valid operation and two numbers.");
    process.exit();
}

let result;

if (operation === "add") {
    result = num1 + num2;
} else if (operation === "subtract") {
    result = num1 - num2;
} else if (operation === "multiply") {
    result = num1 * num2;
} else if (operation === "divide") {
    if (num2 === 0) {
        console.log("Cannot divide by zero.");
        process.exit();
    }
    result = num1 / num2;
} else {
    console.log("Invalid operation.");
    process.exit();
}

console.log("Result:", result);