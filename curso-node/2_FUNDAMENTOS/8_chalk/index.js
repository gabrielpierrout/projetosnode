const chalk = require("chalk");

const nota = 4;

// console.log(chalk.green.bold("Parabéns! Você está aprovado!"));

if(nota >=6) {
    console.log(chalk.green.bold("Parabéns! Você está aprovado!"));
} else {
    console.log(chalk.red.bold("Você precisa fazer a prova de recuperação!"));
}