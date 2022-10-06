// https://platform.wbscodingschool.com/courses/full-stack-web-app/11280/

// Date
// - Display the time (hh:mm) in the console.
// - Display the day (mm.dd)

// https://www.w3schools.com/jsref/jsref_obj_date.asp

// SOLUTION
const date = new Date()

// DISPLAY THE  HOUR AND : MINUTES
const hourAndMinutes = date.getHours()+":"+date.getMinutes()
// DISPLAY THE MONTH AND DAY SEPARATED BY A DOT
const monthAndDay = date.getMonth()+1+"."+date.getDate()

console.log(hourAndMinutes)
console.log(monthAndDay)