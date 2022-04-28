let order = [];
let clicked0rder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yeloow = document.querySelector('.yellow');

//cria ordens aleatoria de cores
let shuffle0rder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clicked0rder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botoes clicados são os mesmos da ordem gerada no jogo
let check0rder = () => {
    for(let i in clicked0rder) {
        if(clicked0rder[i] != order[i]) {
            gamerOver();
            break;
        }
    }
    if(clicked0rder.length == order.length) {
        alert(`Pontuacao: ${score}\nVoce acertou Iniciando proximo nivel!`);
        nextLevel();
    }
}

//funcao para o click do usuario
let click = (color) => {
    clicked0rder[clicked0rder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        check0rder();
    },250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yeloow;
    }else if (color == 3) {
        return blue;
    }
}

//funcao para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffle0rder();
}

//funcao para gamer over
let gamerOver = () => {
    alert(`Pontuacao: ${score}!\nVoce perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clicked0rder = [];

    playGame();   
}

//funcao de inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Genesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yeloow.onclick = () => click(2);
blue.onclick = () => click(3);


//inicio do jogo
playGame();