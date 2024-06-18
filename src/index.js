const player1 = 
{
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0
};
const player2 = 
{
    NOME: "Bowser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0
};

const Mario = 
{
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
};

const Bowser = 
{
    NOME: "Bowser",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 2,
    PODER: 5,
};

const Peach = 
{
    NOME: "Peach",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
};

const Luigi = 
{
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
};

const Yoshi = 
{
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

async function rollDice() {
    return Math.floor( Math.random() * 6) + 1;
}

async function getRandomBlock() 
{
    let random = Math.random();

    let result;
    switch (true) 
    {
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        case random > 0.66:
            result = "CONFRONTO";
            break;
    }
    return result;
}

async function logRollResult(characterName, block, diceResult, atribute) 
{
    console.log(`${characterName} 🎲 jogou um dado e obteve o Nº ${diceResult} somando ${atribute} de ${block} = ${diceResult + atribute}`);
}

async function playRaceEngine(character1, character2)
{
    for (let round = 1; round < 6; round++) 
    {
        console.log(`🏁Volta ${round}: `);
        
        let block = await getRandomBlock();

        console.log(`Bloco ${block}`);

        let diceResultPlayer1 = await rollDice();
        let diceResultPlayer2 = await rollDice();

        let totalSkillPlayer1 = 0;
        let totalSkillPlayer2 = 0;

        if(block == "RETA")
        {
            totalSkillPlayer1 = diceResultPlayer1 + character1.VELOCIDADE;
            totalSkillPlayer2 = diceResultPlayer2 + character2.VELOCIDADE;

            await logRollResult(character1.NOME, "Velocidade", diceResultPlayer1, character1.VELOCIDADE);
            await logRollResult(character2.NOME, "Velocidade", diceResultPlayer2, character2.VELOCIDADE);
           
            if(totalSkillPlayer1 > totalSkillPlayer2)
            {
                console.log(`${character1.NOME} marcou 1 ponto`);
                character1.PONTOS++;
            }
            if(totalSkillPlayer1 < totalSkillPlayer2)
            {
                console.log(`${character2.NOME} marcou 1 ponto`);
                character2.PONTOS++;
            }
            if(totalSkillPlayer1 == totalSkillPlayer2)
            {
                console.log("Rodada empatada");
            }
        }
        if(block == "CURVA")
        {
            totalSkillPlayer1 = diceResultPlayer1 + character1.MANOBRABILIDADE;
            totalSkillPlayer2 = diceResultPlayer2 + character2.MANOBRABILIDADE;

            await logRollResult(character1.NOME, "Manobrabilidade", diceResultPlayer1, character1.MANOBRABILIDADE);
            await logRollResult(character2.NOME, "Manobrabilidade", diceResultPlayer2, character2.MANOBRABILIDADE);

            if(totalSkillPlayer1 > totalSkillPlayer2)
            {
                console.log(`${character1.NOME} marcou 1 ponto`);
                character1.PONTOS++;
            }
            if(totalSkillPlayer1 < totalSkillPlayer2)
            {
                console.log(`${character2.NOME} marcou 1 ponto`);
                character2.PONTOS++;
            }
            if(totalSkillPlayer1 == totalSkillPlayer2)
            {
                console.log("Rodada empatada");
            }
        }
        if(block == "CONFRONTO")
        {
            totalSkillPlayer1 = diceResultPlayer1 + character1.PODER;
            totalSkillPlayer2 = diceResultPlayer2 + character2.PODER;

            console.log(`${character1.NOME} confrontou ${character2.NOME}`);

            await logRollResult(character1.NOME, "Poder", diceResultPlayer1, character1.PODER);
            await logRollResult(character2.NOME, "Poder", diceResultPlayer2, character2.PODER);
            
            if(totalSkillPlayer1 > totalSkillPlayer2)
            {
                if(character2.PONTOS > 0)
                {
                    console.log(`Vencedor da Rodada: ${character1.NOME} e ${character2.NOME} perdeu um ponto.`);
                    character2.PONTOS--;
                }
                else
                {
                    console.log(`${character1.NOME} ganhou porem ${character2.NOME} já está sem pontos.`);
                }
            }
           
            if(totalSkillPlayer1 < totalSkillPlayer2)
            {
                if(character1.PONTOS > 0)
                {
                    console.log(`Vencedor da Rodada: ${character2.NOME} e ${character1.NOME} perdeu um ponto.`);
                    character1.PONTOS--;
                }
                else
                {
                     console.log(`${character2.NOME} ganhou porem ${character1.NOME} já está sem pontos.`);
                }
            }
            
            if(totalSkillPlayer1 === totalSkillPlayer2)
            {
                console.log("Rodada empatada.");
            }
        }
        console.log("----------------------------------------------");
    }

    console.log("_____________________________________________________________________________________ FIM do JOGO \n");

    if(character1.PONTOS > character2.PONTOS)
    {
        console.log(`Vencedor ${character1.NOME} com um total de pontos de: ${character1.PONTOS}`);
    }
    if(character1.PONTOS < character2.PONTOS)
    {
        console.log(`Vencedor ${character2.NOME} com um total de pontos de: ${character2.PONTOS}`);
    }
    if(character1.PONTOS == character2.PONTOS)
    {
        console.log(`Não houve vencedores ambos os jogadores empataram com um total de pontos de: ${character2.PONTOS}`);
    }
}


(async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} Começando.\n`);

    //function chains...
    await playRaceEngine(player1, player2);

})();



