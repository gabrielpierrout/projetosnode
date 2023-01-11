const chalk = require("chalk");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual foi a sua nota nesse semestre?", (nota) => {

    if(nota >=6.1) {
        console.log(chalk.green.bold("Parabéns, você foi aprovado!"))
        readline.close();
    } else {
        console.log(chalk.red.bold("Infelizmente, você não foi aprovado!"))
        readline.close();
    }

    setTimeout(() => {
        console.clear()
    }, 5000);

})