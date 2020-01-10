/**
 * Part 1:
 *    What will print and why?
 *    What will change if we delete line 15? Why?
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

function x() {
  var a;
  console.log(a);
}

function y() {
  var a = 2;
  console.log(a);
  x();
}

var a = 1;
console.log(a);
y();



//Part 1:
// 1
// 2
// null
// If we delete line 15, it will print 1 2 1, because then it will use the a that is declared in the global scope.

//Part 2:
const x = () => {
  let a;
  console.log(a);  
}
const y = () => {
  let a = 2;
  console.log(a);
  x(); 
}
let a = 1;
console.log(a);
y();

//Part 3:
const x = () => {
  let a = 1;
  console.log(a);  
}
const y = () => {
  let a = 2;
  console.log(a);
  x(); 
}
let a = 1;
console.log(a);
y();