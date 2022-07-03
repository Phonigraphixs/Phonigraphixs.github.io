function myAge(){
  let year=  window.prompt("what years is it?")
let born= window.prompt("what year did you born")
  if (year && born != null){
     document.getElementById("myage-text").innerHTML =
     "Hello you are" +(year - born) + " years";
  }
  else{
    document.getElementById("myage-text").innerHTML =
    "pls write the shit i told you to write"
  }
}
function myanim(){
  let anim = window.prompt("write the pasword pls")
  let password = "fool"
  if(password === anim){
    document.getElementById("uncorrect").innerHTML =
    "password is correct"
    document.getElementById("tesx2").className = "test2"
    
  }
  else{
    document.getElementById("uncorrect").innerHTML = 
    "The password is uncorrect"
  }
}
