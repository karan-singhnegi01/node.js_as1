const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger("Checking numbers");

let numbers = [2, 5, 8, 11];

numbers.forEach(function(num) {
    if (isEven(num)) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
});

logger("Done");