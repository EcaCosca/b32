// https://platform.wbscodingschool.com/courses/full-stack-web-app/12105/

// Fizz Buzz

// FizzBuzz is a programming task, used in software developer job interviews.

// If a number is a multiple of 3 the function returns fizz
// If a number is a multiple of 5 the function returns buzz
// If a number is a multiple of 3 AND 5 the function returns fizzbuzz

// As a sequence it would be:
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz

// Create a function in index.js which takes a number and return fizz or buzz or fizzbuzz or the number.

function fizzbuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("Fizz Buzz")
    } else if (number % 3 === 0) {
      console.log("Fizz")
    } else if (number % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(number)
    }
  }
  
  for(let i=0;i<36;i++){
    fizzbuzz(i)
  }
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder