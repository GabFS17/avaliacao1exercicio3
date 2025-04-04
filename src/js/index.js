const cabelo = document.getElementById('cabelo');

var corCabelo = prompt('Qual a cor do cabelo? 1 - Preto, 2 - Marrom')

switch (corCabelo) {
    case "1":
        cabelo.classList.add('preto')
        break;
    case "2":
        cabelo.classList.add('marrom')
        break;
}