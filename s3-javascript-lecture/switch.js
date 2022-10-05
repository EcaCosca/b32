// https://platform.wbscodingschool.com/courses/full-stack-web-app/11287/

// Switch


// Using the function in index.js, create a switch with 3 possibilites:
// - if the color is blue, return the value "The color is blue"
// - if the color is red, return the value "The color is red"
// - if it's another color, return the value "It's not a color that I know"

// Maksim

function myFavouriteColor(color) {
  
    switch (color) {
      case `blue`:
        console.log(`The color is blue!`);
        break;
      case `red`:
        console.log(`The color is red!`);
        break;
      default:
        console.log(`It's the color ${color}!`);
    }
  }
  myFavouriteColor(`insertcolorhere`);

//   Nizami
// function myFavouriteColor(color) {
//     color = prompt("What is your favorite color?");
//     switch (color) {
//       case 'green': 
//       console.log(`Your favorite color is green`);
//       break;
//       case 'blue': 
//       console.log(`Your favorite color is blue`);
//       break;
//       case 'red': console.log(`Your favorite color is red`);
//     break;
//       case 'white': console.log(`Your favorite color is white`);
//     break;
//       case 'yellow': console.log(`Your favorite color is yellow`);
//     break;
//     default: console.log("I dont know this color");
//   }
//   }
  
  
  myFavouriteColor();
