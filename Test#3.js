const { rejects } = require('assert');
const { resolve } = require('path');



const num = new Promise(function(resolve, reject) {
    let number = Math.floor(Math.random() * 10)
    resolve(number)
    })



function game() {
    num.then(function(number) {
        const readline = require('readline');
        const rl = readline.createInterface(process.stdin, process.stdout);
        rl.question("Какое число? ", function(answer) {
            if (number != answer) {
                if (number > answer) {
                    console.log("Бери выше")
                }
                else {
                    console.log("Бери ниже");
                }
                console.log(number, answer);
                rl.close()
                game()
            }
            else {
                console.log("Всё верно")
                rl.close()
                return
            }
        })
    })
    return 10
}

game()

