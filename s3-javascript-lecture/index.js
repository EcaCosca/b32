console.log("Hey, js is connected")

// alert("Hey, js is connected")

// WEEKEND EXAMPLE

const weekDay = new Date()

console.log(weekDay)

const day = weekDay.getDay()

console.log(day)

const message = day === 5 ? "it's friday, play the video" : "Not friday :(";

console.log(message)

// WEEKDAY EXAMPLE 

const weekDay = new Date()

console.log(weekDay)

const day = weekDay.getDay()

console.log(day)

const message = day === 5 ? "it's friday, play the video" : "Not friday :(";

console.log(message)

let dayMessage = ""

console.log(dayMessage)

switch (7) {
  case 0:
    dayMessage = "Sunday";
    break;
  case 1:
    dayMessage = "Monday";
    break;
  case 2:
    dayMessage = "Tuesday";
    break;
  case 3:
    dayMessage = "Wednesday";
    break;
  case 4:
    dayMessage = "Thursday";
    break;
  case 5:
    dayMessage = "Friday";
    break;
  case 6:
    dayMessage = "Saturday";
    break;
  default:
    dayMessage = "Your week is weak"
}

console.log(dayMessage)

// FUNCTIONS EXAMPLE

function talk(name = "Eca",exp=''){
    console.log("Hello there "+name+exp)
  }
  
  talk("General Grevious!","!!!!!!!")
  
  talk("Ada","?")
  talk("Michael!")
  talk()
  
  
  function multiply(num1, num2){
    return num1*num2
  }
  
  const result = multiply(2,5)
  const secondResult = multiply(10,50)
  
  console.log(result)
  console.log(secondResult)
  
  const salut = function(mes){return mes}
  
  console.log(salut("Arms waving. "))
  