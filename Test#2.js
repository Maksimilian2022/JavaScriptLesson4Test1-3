function numberGame() {
    let number = Math.floor(Math.random() * 10) * 10;
    reader(number)
    return 
}



function reader (number) {
    const readline = require('readline');
    const rl = readline.createInterface(process.stdin, process.stdout);
    rl.question("Какое число? ", function(answer) {
        if (answer != number) {
            if (answer < number) {
                console.log("Бери выше", number)

            }
            else {
                console.log("Бери ниже", number)
            }
            rl.close()
            return reader(number)
            
        }
        
        else {
            rl.close
            console.log("Всё верно!")
            return 10
        }
    })

}

let a = numberGame()
console.log(a)