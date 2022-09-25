

let nm = JSON.parse(localStorage.getItem("loggedinuser"));

let logout=()=>{
    localStorage.removeItem("loggedinuser");
  }