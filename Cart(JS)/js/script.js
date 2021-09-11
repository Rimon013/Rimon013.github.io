let plus=document.querySelector('#plus');
let minus = document.querySelector('#minus');
let plus2=document.querySelector('#plus2');
let minus2 = document.querySelector('#minus2');
let plus3=document.querySelector('#plus3');
let minus3 = document.querySelector('#minus3');
let plus4=document.querySelector('#plus4');
let minus4 = document.querySelector('#minus4');
let quantity = document.querySelector('.value');
let quantity2 = document.querySelector('.value2');
let quantity3 = document.querySelector('.value3');
let quantity4 = document.querySelector('.value4');
let adding = document.querySelector('#add');
let adding2 = document.querySelector('#add2');
let adding3= document.querySelector('#add3');
let adding4 = document.querySelector('#add4');
let cartlist=document.querySelector('ul');
let clear = document.querySelector('#confirm');

plus.addEventListener('click',plusf);
minus.addEventListener('click',minusf);
plus2.addEventListener('click',plusf2);
minus2.addEventListener('click',minusf2);
plus3.addEventListener('click',plusf3);
minus3.addEventListener('click',minusf3);
plus4.addEventListener('click',plusf4);
minus4.addEventListener('click',minusf4);
adding.addEventListener('click',addto);
adding2.addEventListener('click',addto2);
adding3.addEventListener('click',addto3);
adding4.addEventListener('click',addto4);
cartlist.addEventListener('click',remove);
clear.addEventListener('click',confirmed);

let temp = parseInt(quantity.value);
let temp2 = parseInt(quantity2.value);
let temp3 = parseInt(quantity3.value);
let temp4 = parseInt(quantity4.value);
function plusf(){
    temp=temp+1;
    quantity.value=temp.toString();
}
function minusf(){
    if(temp<=0){
        temp=0;
        quantity.value=temp.toString();
    }
    else{
    temp=temp-1;
    quantity.value=temp.toString();
    }
}
function plusf2(){
    temp2=temp2+1;
    quantity2.value=temp2.toString();
}
function minusf2(){
    if(temp2<=0){
        temp2=0;
        quantity2.value=temp2.toString();
    }
    else{
    temp2=temp2-1;
    quantity2.value=temp2.toString();
    }
}
function plusf3(){
    temp3=temp3+1;
    quantity3.value=temp3.toString();
}
function minusf3(){
    if(temp3<=0){
        temp3=0;
        quantity3.value=temp3.toString();
    }
    else{
    temp3=temp3-1;
    quantity3.value=temp3.toString();
    }
}
function plusf4(){
    temp4=temp4+1;
    quantity4.value=temp4.toString();
}
function minusf4(){
    if(temp4<=0){
        temp4=0;
        quantity4.value=temp4.toString();
    }
    else{
    temp4=temp4-1;
    quantity4.value=temp4.toString();
    }
}
function addto(e){
    if(temp==0){
        alert("Add some order first");
    }
    else{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode('Artisan Brand Shirt:'+'Total Price='+(temp*550).toString()+" "));
        let link = document.createElement('h9');
        link.setAttribute('id','cross');
        link.innerHTML = 'x';
        link.style.color='red';
        //link.style="bold";
        link.style.cursor='pointer';
        li.appendChild(link);
        cartlist.appendChild(li);
        temp=0;
        quantity.value=temp;
    }
}
function addto2(e){
    if(temp2==0){
        alert("Add some order first");
    }
    else{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode('Artisan Brand Pant:'+'Total Price='+(temp2*570).toString()+" "));
        let link = document.createElement('h9');
        link.setAttribute('id','cross');
        link.innerHTML = 'x';
        link.style.color='red';
        //link.style="bold";
        link.style.cursor='pointer';
        li.appendChild(link);
        cartlist.appendChild(li);
        temp2=0;
        quantity2.value=temp2;
    }
}
function addto3(e){
    if(temp3==0){
        alert("Add some order first");
    }
    else{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode('Artisan Brand Shirt(Girl):'+'Total Price='+(temp3*650).toString()+" "));
        let link = document.createElement('h9');
        link.setAttribute('id','cross');
        link.innerHTML = 'x';
        link.style.color='red';
        //link.style="bold";
        link.style.cursor='pointer';
        li.appendChild(link);
        cartlist.appendChild(li);
        temp3=0;
        quantity3.value=temp3;
    }
}
function addto4(e){
    if(temp4==0){
        alert("Add some order first");
    }
    else{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode('Artisan Brand Pant(Girl):'+'Total Price='+(temp4*850).toString()+" "));
        let link = document.createElement('h9');
        link.setAttribute('id','cross');
        link.innerHTML = 'x';
        link.style.color='red';
        //link.style="bold";
        link.style.cursor='pointer';
        li.appendChild(link);
        cartlist.appendChild(li);
        temp4=0;
        quantity4.value=temp4;
    }
}
function remove(e){
    if(e.target.hasAttribute("id")){
        let el = e.target.parentElement;
        el.remove();
    }
}

function confirmed(e){
    cartlist.innerHTML="";
    alert('Your Products are one the way');
}
