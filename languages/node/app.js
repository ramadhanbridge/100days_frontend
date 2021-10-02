const tut = require('./tutorial')
const EventEmitter = require('events')
const readline = require('readline');
const eventemitter = new EventEmitter();
eventemitter.on('tutop', () => {
    console.log('event emitted')
})
eventemitter.emit('tutop')
console.log(tut(1, 2))

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;
rl.question(`what is ${num1} + ${num2} \n`, (userinput) => {
    if (userinput.trim() == answer) {
        rl.close();
    } else {
        rl.setPrompt("try again your answer was incorrect !!!! \n");
        rl.prompt();
        rl.on('line', (userinput) => {
            if (userinput.trim() == answer) {
                rl.close();
            } else {
                rl.setPrompt(`insert please! your answer of ${userinput}  was not correct !!!!!! \n`);
                rl.prompt();
            }
        })
    }

})

rl.on('close', () => {
    console.log("you got this right")
})

