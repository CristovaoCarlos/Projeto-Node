const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
};
const player2 = {
    NOME: "Bowser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
};

const Mario = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
};
const Bowser = {
    NOME: "Bowser",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 2,
    PODER: 5,
};
const Peach = {
    NOME: "Peach",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
};
const Luigi = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
};
const Yoshi = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 2,
    PODER: 3,
};
const Dk = {
    NOME: "Dk",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
};

async function main() {
    console.log("hello");
}

async function rollDice() {
    return Math.floor( Math.random() * 6) + 1;
}