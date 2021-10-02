const tut = require('./tutorial')
const EventEmitter = require('events')
const readline = require('readline');
const fs = require('fs');
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

// cerate file

fs.writeFile('dir/example.txt', "this is the example", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("file created")
    }
})
let filecontent = "";

fs.readFile('dir/example.txt', 'utf-8', (err, file) => {
    if (err) {
        console.log(err)
    } else {
        getfileData(file)
    }
})

function getfileData(filedata) {
    console.log('file data from function', filedata)
}

fs.rename('dir/example.txt', 'dir/example2.txt', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("successful renamed")
    }

})

fs.appendFile('dir/example2.txt', " yes yes", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("successful appended")
    }
})

fs.unlink('dir/example2.txt', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("successful deleted")
    }
})



