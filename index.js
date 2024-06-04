// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

let nomeDoHeroi = "Flash";
let xpDoHeroi = 1000;
let nivelDoHeroi;

if (xpDoHeroi < 1000) {
   nivelDoHeroi = "Ferro";    
}

else if (xpDoHeroi >= 1000 && xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
}

else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    nivelDoHeroi = "Prata"; 
}

else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
}

else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    nivelDoHeroi = "Platina";
}

else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
}

else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
}
else {
    nivelDoHeroi = "Radiante";
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi);