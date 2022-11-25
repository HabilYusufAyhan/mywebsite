const burger = document.querySelector('.navbar-burger');
const menu = document.querySelector('.menu');
const gizle = document.querySelector('.gizle');
const analogo = document.querySelector('.jsimg2');
menu.style.opacity = '0';
menu.style.zIndex = '-1';

var sayac = 0;
var a =0;
if (a < 5) {
    setInterval(giris,1000);
}
function giris() {
    analogo.style.width='500';
    a++;
    cikis();
    
   
}
function cikis() {
    analogo.style.width='600';
}

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