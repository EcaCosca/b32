// https://platform.wbscodingschool.com/courses/full-stack-web-app/11280/

// Date
// - Display the time (hh:mm) in the console.
// - Display the day (mm.dd)

const date = new Date()

const hoursAndMinutes = date.getHours()+":"+date.getMinutes()

const monthAndDay = date.getMonth()+"."+date.getDate()

console.log(hoursAndMinutes)
console.log(monthAndDay)