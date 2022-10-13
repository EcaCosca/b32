// https://platform.wbscodingschool.com/courses/full-stack-web-app/11281/

// Object
// Without changing the variable in index.js
// Transform the text in object and display the value of "first_name".

const text = '{"name" : "Dupont", "first_name" : "Jean"}';

console.log(JSON.parse(text).first_name)