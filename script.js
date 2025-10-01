let imagens = ["img/feraligatr.jpg", "img/download.png","img/aa.png"];
let indice = 0;
let slide = document.getElementById("slide");
const meuBotao = document.getElementById('btnferaligatr');
const meuBotao2 = document.getElementById('btnblaziken');

setInterval(() => {
    indice++
    if (indice >= imagens.length){indice=0;}
    slide.src = imagens [indice];
}, 3000);

