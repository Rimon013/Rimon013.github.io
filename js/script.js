const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')
const exitbtn = document.getElementById('exit-img')              
 function toggleButton(){
     navList.classList.add('show')
 }

 hamburgerButton.addEventListener('click',toggleButton)
 function exitbutton(){
     navList.classList.remove('show')
 }
 exitbtn.addEventListener('click',exitbutton)