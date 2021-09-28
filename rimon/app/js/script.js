let btnHamburgers = document.querySelector('#btnHamburger');
let headers = document.querySelector('.headers');

btnHamburgers.addEventListener('click',()=>{
    if(headers.classList.contains('open')){
        headers.classList.remove('open');
        
    }
    else{
        headers.classList.add('open');
      
        
    }
});
