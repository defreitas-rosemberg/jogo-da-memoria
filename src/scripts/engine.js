

const emojis = [
    "🦁",
    "🦁",
    "🐵",
    "🐵",
    "🐊",
    "🐊",
    "🦈",
    "🦈",
    "🐥",
    "🐥",
    "🐶",
    "🐶",
    "🦊",
    "🦊",
    "🦝",
    "🦝"
];

let openCards = [];

// embaralhador de emojis 
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i ++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i]; 
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box); 
}

function handleClick () {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length == 2) {
        // pesquisar setTimeout
        setTimeout(checkMatch, 500);
    }
}

// condição de vitória

// se o inner html da posição 0 e 1 do vetor open cards forem iguais
// adiciona a classe "boxMatch" nas DIVs em questão
// se forem diferentes remove essa mesma classe das DIVs em questao 
// e posteriormente ZERA o vetor para poder trabalhar com ele na próxima rodada

function checkMatch () {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");       
    }

    openCards = []; 

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("YOU WINNN !!!"); 
    }
}