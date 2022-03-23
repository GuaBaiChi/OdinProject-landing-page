//run this in your browser
while(true) {
let i = parseInt(prompt("Please enter number or 0 to break: "));
if (i === 0) {
  break;
}
else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  }
}