const chalk = require('chalk');
const inquirer = require('inquirer');

inquirer.prompt([
    {
    name: 'p1',
    message: 'Qual o seu nome?'
    },
    {
    name: 'p2',
    message: 'Qual a sua idade?'
    },
])
   .then((answers) => {

    if(!answers.p1 || !answers.p2) {
        throw new Error('O nome e a idade são obrigatórios!')
    }

    var nome =  (chalk.bgYellow.black(answers.p1));
    var idade = (chalk.bgYellow.black(answers.p2));

    console.log(`Seu nome é ${nome} e você tem ${idade} anos`)

   })
   .catch(function (err) {
        console.log(chalk.red(err));
   })