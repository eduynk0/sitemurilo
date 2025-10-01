let imagens = ["img/feraligatr.jpg", "img/downloand.jpg"];
let indice = 0;
let slide = document.getElementById("slide");

setInterval(() => {
   indice++;
   if (indice >= imagens.length) indice=0
   slide.src = imagens [indice];
}, 3000);