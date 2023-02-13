const burger = document.querySelector(".navbar-burger");
const menu = document.querySelector(".menu");
const socialmedia = document.querySelector(".socialmedia");
menu.style.opacity = "0";
menu.style.zIndex = "-999";
const api = "https://api.github.com/users/HabilYusufAyhan/repos";
var sayac = 0;

burger.onclick = function () {
  if (sayac === 0) {
    menu.style.zIndex = "3";
    menu.style.background = "rgba(0, 0, 0, 0.5)";
    menu.style.opacity = "1";
    socialmedia.style.opacity = "0";
    socialmedia.style.cursor = "none";
    sayac++;
  } else if (sayac === 1) {
    menu.style.zIndex = "-3";
    menu.style.background = "transparent";
    menu.style.opacity = "0";
    socialmedia.style.opacity = "1";
    socialmedia.style.cursor = "pointer";
    sayac--;
  }
};

const projectssection = document.querySelector(".projects-section");
user(api);
async function user(api) {
  const resp = await fetch(api);
  const respData = await resp.json();

  for (let index = 0; index < respData.length; index++) {
    var sayi = 0;
 

    const languagesurl = respData[index].languages_url;
    const lang = await fetch(languagesurl);
    const langdata = await lang.json();
    const adduser = document.createElement("a");
    adduser.href = respData[index].svn_url
    adduser.target = '_blank';
    
    adduser.classList.add('projects');
    adduser.innerHTML = `
   <h2 class="project-name">${respData[index].name}</h2>
    <p class="project-p">${respData[index].description}</p>
    `
    const adduser2 = document.createElement("div");
    adduser2.classList.add('project-language');
    for (let datalang in langdata) {
   
     
      //sayi = langdata[datalang]+sayi;
    //  var yuzdelik = (100 * langdata[datalang])/sayi
    //  console.log(langdata[datalang]);
    //  console.log(sayi);
    //  console.log(yuzdelik);
      const adduser3 = document.createElement("p");
      adduser3.classList.add('language');
      adduser3.textContent = `${datalang} = ${langdata[datalang]}`
      
      projectssection.appendChild(adduser);
      adduser.appendChild(adduser2);
      adduser2.appendChild(adduser3);
    }
   
  }
}


