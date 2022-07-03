function myLogo(){
    var x = document.getElementById("my-function");

    var y = document.getElementById("txt-frst-logo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else {
      x.style.display = "none";
      document.getElementById("first-logo").style.height = "22.5ex";
      document.getElementById("txt-frst-logo").style.display = "inline-block"
      document.getElementById("txt-frst-logo").style.paddingTop = "3.2ex";
    }
    if (y.style.display === "block") {
      y.style.display = "none";
      x.style.display ="inline";
    }
    else{
y.style.display ="block";
document.getElementById("first-logo").style.height = "27.2ex";
      }
    }

//Second logo:

 function myLogo2(){
  var x = document.getElementById("my-function2");

  var y = document.getElementById("txt-sec-logo");
  if (x.style.display === "none") {
    x.style.display = "block";
  } 
  else {
    x.style.display = "none";
    document.getElementById("fourth-logo").style.height = "22.5ex";
    document.getElementById("txt-sec-logo").style.display = "inline-block"; 
    document.getElementById("txt-sec-logo").style.paddingTop = "2.8ex";
  }
  if (y.style.display === "block") {
    y.style.display = "none";
    x.style.display ="inline";
  }
  else{
y.style.display ="block";
document.getElementById("fourth-logo").style.height = "27.2ex";
document.get
    }
 }
  
//Third logo:

 function myLogo3(){
  var x = document.getElementById("my-function3");

  var y = document.getElementById("txt-third-logo");
  if (x.style.display === "none") {
    x.style.display = "block";
  } 
  else {
    x.style.display = "none";
    document.getElementById("third-logo").style.height = "22.5ex";
    document.getElementById("txt-third-logo").style.display = "inline-block"; 
    document.getElementById("txt-third-logo").style.paddingTop = "2.9ex";
  }
  if (y.style.display === "block") {
    y.style.display = "none";
    x.style.display ="inline";
  }
  else{
y.style.display ="block";
document.getElementById("third-logo").style.height = "27.2ex";
document.get
    }
 }
  
//Fourth logo:

 function myLogo4(){
  var x = document.getElementById("my-function4");

  var y = document.getElementById("txt-frth-logo");
  let keyboard = document.getElementById("keyboard-div");
  if (x.style.display === "none") {
    x.style.display = "block";
  } 
    else {
    x.style.display = "none";
    document.getElementById("second-logo").style.height = "22.5ex";
    document.getElementById("txt-frth-logo").style.display = "inline-block"; 
    document.getElementById("txt-frth-logo").style.paddingTop = "3.4ex";
    keyboard.style.display = "block"
  }
  if (y.style.display === "block") {
    y.style.display = "none";
    x.style.display ="inline";
  }
  else{
y.style.display ="block";
document.getElementById("second-logo").style.height = "27.2ex";
    }
 }
