function mySubject(){
    let background = document.getElementById("background-color1");
    let disclaimer = document.getElementById("disclaimer-style");
    let disclaimer1 = document.getElementById("disclaimer-style1");
    let disclaimer2 = document.getElementById("disclaimer-style2");
    let subject = document.getElementById("subject-text");
    let subject1 = document.getElementById("subject-text1");
    let subject2 = document.getElementById("subject-text2");
    let subject3 = document.getElementById("subject-text3");
    let container1 = document.getElementById("container1");
if(subject.style.display === "inline"){
    subject.style.display = "none"
container1.style.display = "none"
subject1.style.display = "inline"
subject2.style.display === "none"
subject3.style.display=== "none"
disclaimer.style.display = "inline-block"
disclaimer1.style.display = "none"
disclaimer2.style.display = "none"
}
else if(subject2.style.display === "inline"){
    subject.style.display = "none"
    subject1.style.display = "none"
    subject2.style.display = "none"
    subject3.style.display = "inline"
    container1.style.display = "none"
    disclaimer.style.display = "none"
disclaimer1.style.display = "none"
disclaimer2.style.display = "inline-block"
}
else if(subject1.style.display === "inline"){
    subject1.style.display = "none"
    subject.style.display = "none"
    subject3.style.display = "none"
    subject2.style.display = "inline"
    container1.style.display = "none"
    disclaimer.style.display = "none"
    disclaimer1.style.display = "inline-block"
disclaimer2.style.display = "none"
}
else {
subject.style.display = "inline"
subject1.style.display = "none"
subject2.style.display = "none"
subject3.style.display = "none"
container1.style.display = "inline-block"
disclaimer.style.display = "none"
disclaimer1.style.display = "none"
disclaimer2.style.display = "none"
}
}