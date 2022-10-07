// https://platform.wbscodingschool.com/courses/full-stack-web-app/11296/

// Fibonacci sequence
// In mathematics, the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

// The beginning of the sequence is thus:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

// With a recursive function create the 10 first elements of this sequence.

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

const fibonacci = n => {
    if (n < 2) return n
    return fibonacci(n-2)+fibonacci(n-1)
  }
  
  for(let i = 0;i<=9;i++){
    console.log(fibonacci(i))
  }