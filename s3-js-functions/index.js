// REGULAR FUNCTION

function regularFunction(parameter){
    console.log(parameter)
}

// ANONIMUS FUNCTION 

const handleClick = function(){alert("clicked")}

document.querySelector("button").addEventListener('click', handleClick)


function returnMeTheTotal(){
    return 10+10
}

function returnMeTheTotalPlusTaxes(value, tax){
    return value+(value*tax)
}

const total = returnMeTheTotal()
const totalPlusTaxes = returnMeTheTotalPlusTaxes(10,0.10)
const totalPlusTaxes2 = returnMeTheTotalPlusTaxes(10,0.15)
const totalPlusTaxes3 = returnMeTheTotalPlusTaxes(10,0.50)

// console.log(total)
// console.log(totalPlusTaxes)
// console.log(totalPlusTaxes2)
// console.log(totalPlusTaxes3)


// ARROW COMPARATION

const normalAnonymusFunction = function(name = "Ben"){
    return "Hello there "+name+"!"
}

// console.log(normalAnonymusFunction("Anakin"))

const arrowFunction = (name) => {
    return "Hello there "+name+"!"
}

// console.log(arrowFunction("Michael"))

const shortArrowFunction = name => "Hello there "+name+"!"

// console.log(shortArrowFunction("Michael"))