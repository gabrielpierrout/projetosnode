const fs = require('fs');

setTimeout(function() {
    fs.unlink('arquivo.txt', function (err) {
        if (err) {
            console.log(err)
            return
        }
    
        console.log('Arquivo removido')
    })
}, 3000)

