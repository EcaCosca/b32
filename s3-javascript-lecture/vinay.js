const sandwich = 10
let burger = 5

console.log(burger)

// REGULAR
// function register(){
//   return "Your order was 10 euros"
// }

// ANONIMUS FUNCTION
// const register = function(){
//   return "Your order was 10 euros"
// }

// ARROW FUNCTION
// const register = () => {
//   return "Your order was 10 euros"
// }

// const register = () => "Your order was 10 euros."

const registerDynamic = (product) => `Your order was ${product} euros`

registerDynamic(burger)