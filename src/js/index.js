//VARIABLES
const cabelo = document.getElementById('cabelo');
const cabeca = document.getElementById('cabeca');
const bracos = document.getElementById('bracos');
const olho1 = document.getElementById('olho1');
const olho2 = document.getElementById('olho2');
const roupa = document.getElementById('corpo');
const label = document.getElementById('label');

//FUNCTIONS

//COLETAR INPUT E ADICIONAR A RESPECTIVA CLASSE AO ELEMENTO:
//CABELO
function switchCabelo() {
    let corCabelo = prompt('Qual a cor do seu cabelo? 1 - Preto, 2 - Castanho, 3 - Loiro, 4 - Branco, 5 - Vermelho, 6 - Azul, 7 - careca')
    
    // só executa se for um numero maior que zero dentro das opções
    if (parseInt(corCabelo) > 0 && parseInt(corCabelo) <= 7) {
        switch (corCabelo) {
            case "1":
                cabelo.classList.add('preto')
                break;
            case "2":
                cabelo.classList.add('marrom')
                break;
            case "3":
                cabelo.classList.add('loiro')
                break;
            case "4":
                cabelo.classList.add('branco')
                break;
            case "5":
                cabelo.classList.add('vermelho')
                break;
            case "6":
                cabelo.classList.add('azul')
                break;
        }
    }
    else {
        aviso()
        switchCabelo();
    }
}

//COR DA PELE
function switchPele() {
    let corPele = prompt('Qual sua cor de pele? 1 - Pálida, 2 - Clara, 3 - Morena, 4 - Parda, 5 - Escura');
    if (parseInt(corPele) > 0 && parseInt(corPele) <= 5) {
        switch (corPele) {
            case "1":
                cabeca.classList.add('palida')
                bracos.classList.add('palida')
                break;
            case "2":
                cabeca.classList.add('clara')
                bracos.classList.add('clara')
                break;
            case "3":
                cabeca.classList.add('morena')
                bracos.classList.add('morena')
                break;
            case "4":
                cabeca.classList.add('parda')
                bracos.classList.add('parda')
                break;
            case "5":
                cabeca.classList.add('escura')
                bracos.classList.add('escura')
                break;
            case null:
                console.log("corPele null")
        }
    }
    else {
        aviso()
        switchPele();
    }
}

//COR DOS OLHOS
function switchOlhos() {
    let corOlhos = prompt('Qual a cor dos seus olhos? 1 - Castanha, 2 - Azul, 3 - Verde, 4 - Preta');
    if (parseInt(corOlhos) > 0 && parseInt(corOlhos) <= 4) {
        switch (corOlhos) {
            case "1":
                olho1.classList.add('marrom')
                olho2.classList.add('marrom')
                break;
            case "2":
                olho1.classList.add('azul')
                olho2.classList.add('azul')
                break;
            case "3":
                olho1.classList.add('verde')
                olho2.classList.add('verde')
                break;
            case "4":
                olho1.classList.add('preta')
                olho2.classList.add('preta')
                break;
        }
    }
    else {
        aviso()
        switchOlhos();
    }
}

//COR DA ROUPA
function switchRoupa() {
    let corRoupa = prompt('Qual a cor da camiseta que você esta usando? 1 - Preto, 2 - Vermelho, 3 - Amarelo, 4 - Laranja, 5 - Verde, 6 - Azul, 7 - Roxo, 8 - Branco, 9 - Cinza');
    if (parseInt(corRoupa) > 0 && parseInt(corRoupa) <= 9) {
        switch (corRoupa) {
            case "1":
                roupa.classList.add('preto')
                break;
            case "2":
                roupa.classList.add('vermelho')
                break;
            case "3":
                roupa.classList.add('amarelo')
                break;
            case "4":
                roupa.classList.add('laranja')
                break;
            case "5":
                roupa.classList.add('verde')
                break;
            case "6":
                roupa.classList.add('azul')
                break;
            case "7":
                roupa.classList.add('roxo')
                break;
            case "8":
                roupa.classList.add('branco')
                break;
            case "9":
                roupa.classList.add('cinza')
                break;
        }
    }
    else {
        aviso()
        switchRoupa();
    }
}

//ALERTAR CASO O NUMERO DO INPUT NÃO COINCIDA COM NENHUM DOS DISPONIVEIS PARA ESCOLHA:

function aviso() {
    alert("Você precisa escolher um número dentro dos parâmetros!")
}

//DESENHAR NA TELA

switchCabelo()
switchPele()
switchOlhos()
switchRoupa()
label.innerText = "esse eh vc:"