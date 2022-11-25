const burger = document.querySelector('.navbar-burger');
const menu = document.querySelector('.menu');
const gizle = document.querySelector('.gizle');
const work =document.querySelector('.containermain');
const logo = document.querySelector('.navbar');
work.style.display = 'none';
menu.style.opacity = '0';
menu.style.zIndex = '-1';

var sayac = 0;
burger.onclick=function(){
  
    if (sayac === 0) {
        menu.style.zIndex='3';
        menu.style.opacity='1';
        gizle.style.opacity='0';
        sayac++;
    }
    else if(sayac === 1){
        menu.style.zIndex='-1';
        menu.style.opacity='0';
        gizle.style.opacity='1';
        sayac--;
    }
    
}
