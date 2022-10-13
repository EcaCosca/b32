// OBJECTS COMPARED TO ARRAYS 

// const array = ['croatianPassport', 'italianPassport', 'argentinianId']
// const object = {
//   passport:['croatianPassport', 'italianPassport'],
//   id:'argentinianId'
// }

// console.log(array[2])

// console.log(object.passport[0])

// CLASS EXAMPLE 

class Instructor {
    constructor(name, nationality, batch){
      this._name = name,
      this._nationality = nationality,
      this._batch = batch,
      this._course = 'webdev'
    }
    
    greeting() {
      console.log("Hey there, my name is "+this._name+".I'm from "+this._nationality)
    }
  }
  
  
  // ---------------------------
  
  class jrInstructor extends Instructor {
    specialRunaway(){
      console.log("Hey guys, good morning batch "+this._batch+".I'll leave you to work for the rest of the day until tomorrow, call me if you need me.")
    }
  }
  
  // console.log(typeof Instructor)
  
  const eca = new Instructor('Eca', 'Italoargentino', 32)
  const onur = new jrInstructor('Onur', 'Turquishgerman', 32)
  
  // console.log(eca)
  
  // eca.greeting()
  // onur.greeting()
  
  // eca.specialRunaway()
  onur.specialRunaway()
  
  
  
  
  const specialMamushka = {
    specialMamushka: 'specialMamushka',
    reallySpecialMamushka: {
     reallyreallySpecialMamushka: {
       reallyreallyreallySpecialMamushka: {
         reallyreallyreallyreallySpecialMamushka: 'here'
       }
     }
  }
  }
  
  console.log(specialMamushka.reallySpecialMamushka.reallyreallySpecialMamushka)
  
  