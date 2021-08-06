const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const exitbtn = document.getElementById('exit-img')  
const buttn = document.getElementById("button")            
 function toggleButton(){
     navList.classList.add('show')
 }

 hamburgerButton.addEventListener('click',toggleButton)
 function exitbutton(){
     navList.classList.remove('show')
 }
 exitbtn.addEventListener('click',exitbutton)

 buttn.addEventListener('click',updating);
 function updating(){
     alert("This field is updating");
 }