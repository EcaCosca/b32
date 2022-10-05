// https://platform.wbscodingschool.com/courses/full-stack-web-app/11291/

// Variable scope
// How to modify the declaration of variables so that the console.log returns 4 in index.js?

let myVar = 4;

function titi() {
  let myVar = 5;
}

titi();

console.log(myVar);