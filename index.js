// Iteration 1: Names and Input
const hacker1 = "Adrian Bueno"
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Michel Mendes "
console.log(`The navigator's name is ${hacker2}`);

let maxNumberOfCharacter = Math.min(hacker1.length, hacker2.length);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`The navigator ${hacker2} has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${maxNumberOfCharacter} characters!`);

}

// Iteration 3: Loops
let driverUpperCaseWithWhiteSpace = "";
let navigatorNameReversed = "";
let orderMessage = "";

for (let i = 0; i < hacker1.length; i++) {
    driverUpperCaseWithWhiteSpace += hacker1[i].toUpperCase() + " "
}
console.log(driverUpperCaseWithWhiteSpace)

for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorNameReversed += hacker2[i];
}
console.log(navigatorNameReversed)

for (let i = 0; i < maxNumberOfCharacter; i++) {
    if (hacker1[i] < hacker2[i]) {
        orderMessage = "The driver's name goes first.";
    } else if (hacker1[i] > hacker2[i]) {
        orderMessage = "Yo, the navigator goes first, definitely.";
    } else {
        orderMessage = "What?! You both have the same name?";
    }
}

console.log(orderMessage);