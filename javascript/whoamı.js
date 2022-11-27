const burger = document.querySelector(".navbar-burger");
const menu = document.querySelector(".menu");
const socialmedia = document.querySelector(".socialmedia");
menu.style.opacity = '0';
menu.style.zIndex = '-999';


var sayac = 0;

burger.onclick = function () {
  if (sayac === 0) {
    menu.style.zIndex = '3';
    menu.style.background = 'rgba(0, 0, 0, 0.5)'
    menu.style.opacity = '1';
    socialmedia.style.opacity='0';
    socialmedia.style.cursor='none'
    sayac++;
  } else if (sayac === 1) {
    menu.style.zIndex = '-3';
    menu.style.background = 'transparent'
    menu.style.opacity = '0';
    socialmedia.style.opacity='1'; 
    socialmedia.style.cursor='pointer'
    sayac--;
  }
};


var typing=new Typed(".text", {
  strings: ["Habil Yusuf Ayhan","Habil Yusuf Ayhan", "Freelancer","Freelancer", "Graphics Designer","Graphics Designer", "Web Designer","Web Designer", "Web Developer","Web Developer"],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});