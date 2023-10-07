const whoami = (req, res, next) => {
  res.render("whoami.ejs", {
    title: "Ben Kimim",
  });
};

const myprojects = async (req, res, next) => {
  const api = "https://api.github.com/users/HabilYusufAyhan/repos";

  const resp = await fetch(api);
  const respData = await resp.json();
  let languages = [];
  for (let index = 0; index < respData.length; index++) {
    let languagesmain = await fetch(respData[index].languages_url);
    languages[index] = await languagesmain.json();
  }

  console.log(languages);
  var toplamlar = [];

  // Verileri dizi üzerinde dönerek her bir nesne içindeki sayıları toplayın
  languages.forEach(function (veri) {
    var toplam = 0;
    for (var dil in veri) {
      toplam += veri[dil];
    }
    toplamlar.push(toplam);
  });

  // Her bir nesne için elde edilen toplamları yazdırın
  console.log(toplamlar);
  /* for (let yuzde = 0; yuzde < respData.length; yuzde++) {
    var toplam = 0;
    for (let childlang = 0; childlang < projectssection.children[yuzde].lastElementChild.children.length; childlang++) {
     toplam = Math.floor(projectssection.children[yuzde].lastElementChild.children[childlang].lastElementChild.textContent) + toplam;
    
    }
    console.log(toplam);
    for (let designlang = 0; designlang < projectssection.children[yuzde].lastElementChild.children.length; designlang++) {
      var oranlar =  Math.floor(projectssection.children[yuzde].lastElementChild.children[designlang].lastElementChild.textContent);
      var yuzdelik = (100*oranlar)/toplam;
      projectssection.children[yuzde].lastElementChild.children[designlang].lastElementChild.textContent = yuzdelik.toFixed(2)+  '%';
      console.log(yuzdelik);
      projectssection.children[yuzde].lastElementChild.children[designlang].style.opacity = '1';
    }
  }*/

  res.render("myprojects.ejs", {
    title: "Projelerim",
    data: respData,
    languages: languages,
  });
};
module.exports = {
  whoami,
  myprojects,
};
