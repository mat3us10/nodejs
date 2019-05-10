const fs = require('fs');

fs.writeFile('./text', "olá mundo", function(){
    console.log("Arquivo criado");
});

console.log("O arquivo está sendo criado");

/* fs.readFile('./text2', function(error, data){
    if(error){
        console.log("Erro: " + error);
    }
    else{
        console.log(data);
    }
}); */

