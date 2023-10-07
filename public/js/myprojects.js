const burger = document.querySelector(".navbar-burger");
const menu = document.querySelector(".menu");
const socialmedia = document.querySelector(".socialmedia");
const projectssection = document.querySelector(".projects-section");
const title = document.querySelector(".title");
menu.style.opacity = "0";
menu.style.zIndex = "-999";

var sayac = 0;

burger.onclick = function () {
  if (sayac === 0) {
    menu.style.zIndex = "3";
    menu.style.background = "rgba(0, 0, 0, 0.5)";
    menu.style.opacity = "1";
    socialmedia.style.opacity = "0";
    socialmedia.style.cursor = "none";
    projectssection.style.opacity = "0";
    title.style.opacity = "0";
    sayac++;
  } else if (sayac === 1) {
    menu.style.zIndex = "-3";
    menu.style.background = "transparent";
    menu.style.opacity = "0";
    socialmedia.style.opacity = "1";
    socialmedia.style.cursor = "pointer";
    projectssection.style.opacity = "1";
    title.style.opacity = "1";
    sayac--;
  }
};
// Octokit.js
// https://github.com/octokit/core.js#readme
const api = "https://api.github.com/users/HabilYusufAyhan/repos";

async function user(api) {
  const resp = await fetch(api);
  const respData = await resp.json();

  for (let index = 0; index < respData.length; index++) {
    const languagesurl = respData[index].languages_url;
    const lang = await fetch(languagesurl);
    const langdata = await lang.json();

    const adduser = document.createElement("a");
    adduser.href = respData[index].svn_url;
    adduser.target = "_blank";

    adduser.classList.add("projects");
    adduser.innerHTML = `
   <h2 class="project-name">${respData[index].name}</h2>
    <p class="project-p">${respData[index].description}</p>
    `;

    const adduser2 = document.createElement("div");
    adduser2.classList.add("project-language");
    for (let datalang in langdata) {
      const adduser3 = document.createElement("p");
      adduser3.classList.add("language");
      adduser3.innerHTML = `<span>${datalang}</span> = <span>${langdata[datalang]}</span>`;

      projectssection.appendChild(adduser);
      adduser.appendChild(adduser2);
      adduser2.appendChild(adduser3);
    }
    if (
      respData[index].description.toLocaleLowerCase() == "under development"
    ) {
      projectssection.childNodes[index + 1].firstElementChild.style.color =
        "yellow";
    }
  }
  for (let yuzde = 0; yuzde < respData.length; yuzde++) {
    var toplam = 0;
    for (
      let childlang = 0;
      childlang <
      projectssection.children[yuzde].lastElementChild.children.length;
      childlang++
    ) {
      toplam =
        Math.floor(
          projectssection.children[yuzde].lastElementChild.children[childlang]
            .lastElementChild.textContent
        ) + toplam;
    }
    console.log(toplam);
    for (
      let designlang = 0;
      designlang <
      projectssection.children[yuzde].lastElementChild.children.length;
      designlang++
    ) {
      var oranlar = Math.floor(
        projectssection.children[yuzde].lastElementChild.children[designlang]
          .lastElementChild.textContent
      );
      var yuzdelik = (100 * oranlar) / toplam;
      projectssection.children[yuzde].lastElementChild.children[
        designlang
      ].lastElementChild.textContent = yuzdelik.toFixed(2) + "%";
      console.log(yuzdelik);
      projectssection.children[yuzde].lastElementChild.children[
        designlang
      ].style.opacity = "1";
    }
  }
}
