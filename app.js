/*
Uma empresa de desenvolvimento de software precisa de uma ferramenta
que vai receber uma lista de propriedades de CSS (ex: background-color,
font-size, text-align) e vai devolvê-la ordenada de A-Z.
Ordenar o CSS ajuda a encontrar a propriedade que precisa ser alterada
mais rapidamente e essa ferramenta pode ser utilizada para checar a
ordenação de qualquer lista de palavras.
Assim, você deve utilizar o Node para criar o código responsável por
implementar essa ferramenta na linha de comando. 
*/

import Controller from "./src/controllers/Controller.js"
import chalk from "chalk"
import reader from "readline-sync"


//log para começar o programa com um menuzinho de informações
console.log(`
${chalk.yellow("------ ## ------")}
    
${chalk.bold("Insira uma propriedade CSS por vez e pressione ENTER para digitar a próxima.")}

${chalk.italic.grey("(digite SAIR para executar a ordenação)\n\n")}`)

let inputList = []
let input = ""

//laço para repetidamente pedir input do usuario até que "SAIR" seja digitado
while(true){
    try{
        input = reader.question(chalk.yellow("> ")) 

        if (input === "SAIR"){
            break
        }

        inputList.push(input) //guarda cada input digitado no array inputList
    }
    catch (Exception){
        console.log(chalk.red("Um erro inesperado ocorreu..."))
        break
    }
}

//manda para a controller ordenar a lista de inputs por ordem alfabética
const sortedInputList = Controller.caseSensitiveAlphabeticSort(inputList) 

//se a ordenação foi bem sucedida, formata o resultado de forma mais user-friendly
if (sortedInputList){
    let output = "\nA lista ordenada é\n\n"
    for(let i = 0; i < sortedInputList.length; i++){
        output += (i+1) + ". " + sortedInputList[i] + "\n"
    }

    console.log(output)
}
else {
    console.log(chalk.red("Fechando aplicação...\n"))
}