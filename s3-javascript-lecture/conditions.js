// https://platform.wbscodingschool.com/courses/full-stack-web-app/11288/

// If / else if / else
// In the file index.js, write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output

// to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

// SUSI 

function greaterNum(num1, num2) {
    if (num1 > num2) {
      console.log(
        "The greater number of " + num1 + " and " + num2 + " is " + num1 + "."
      );
    } else {
      console.log(
        "The greater number of " + num1 + " and " + num2 + " is " + num2 + "."
      );
    }
  }

//   NIZAMI

// function greaterNum(a, b) {
//     if (a > b) {
//       console.log('The greater number of ' + a + ' and ' + b + ' is ' + a)
//     }
//     else if (a < b) {
//       console.log('The greater number of ' + a + ' and ' + b + ' is ' + b)
//     }
//     else {
//       console.log('The numbers a and b are equals');
//     }
//   }
  
//   greaterNum(5, 10);
//   greaterNum(1, 1);
//   greaterNum(7.6, 7.5);
//   greaterNum(-1, 9);
//   greaterNum(1, 10);
//   greaterNum(-1, 0);
//   greaterNum(5, 1);