let a = 48;
let b = 12;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

console.log("sum: " + sum);
console.log("difference: " + difference);
console.log("product: " + product);
console.log("quotient: " + quotient);

let score = prompt("Enter your score:");

if( score >=80)
{
    console.log("Grade: A");
}
else if(score >= 60)
{
    console.log("Grade: B");
}
else
{
    console.log("Grade: C");
}