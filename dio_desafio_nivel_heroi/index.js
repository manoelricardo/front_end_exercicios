var nomeDoHeroi = "Jesus";
var nivelExperiencia = 10000;
let rank;

if (nivelExperiencia <= 1000) {
    rank = "Ferro";
} else if (nivelExperiencia <= 2000) {
    rank = "Bronze";
} else if (nivelExperiencia <= 5000) {
    rank = "Prata";
} else if (nivelExperiencia <= 7000) {
    rank = "Ouro";
} else if (nivelExperiencia <= 8000) {
    rank = "Platina";
} else if (nivelExperiencia <= 9000) {
    rank = "Ascendente";
} else if (nivelExperiencia <= 10000) {
    rank = "Imortal";
} else if (nivelExperiencia >= 10001) {
    rank = "Radiante";
} 

console.log("O Herói de nome " + nomeDoHeroi + " está no nível " + nivelExperiencia + " e seu rank é " + rank );