const fs = require('fs')

console.log('Início')

fs.writeFileSync('arquivo.txt', 'olá')

console.log('Fim')


// Teste utilizando exemplo da aula 7.
// setTimeout(() => {
//     console.log('Fim')
// }, 5000);


