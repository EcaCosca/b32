localStorage.setItem(
    "student",
    JSON.stringify({ name: "Luca", lastName: "Stringifetti🤌" })
  );
  // localStorage.setItem('student', "Wiktor")
  // localStorage.setItem('student', "Frank")
  // localStorage.setItem('student', "Susi")
  
  console.log(localStorage.getItem("student"));
  const student = localStorage.getItem("student");
  // console.log(student)
  
  const sutdentObj = JSON.parse(student);
  console.log(sutdentObj);
  
  // THIS WILL ERASE ONE ITEM IN MY LOCALSTORAGE
  // localStorage.removeItem('student')
  
  // THIS WILL ERASE EVERYTHING IN MY LOCALSTORAGE
  // localStorage.clear()
  
  console.log(localStorage.getItem("student"));
  
  document.querySelector("h1").innerHTML =
    sutdentObj.name + " " + sutdentObj.lastName;