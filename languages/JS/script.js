let column = '';



// itirise settimeout and setInterval 

let counter = function () {

    for (let i = 1; i <= 5; ++i) {
        for (let index = 1; index <= 5; index++) {
            column += index;
        }
        column += '\n';
    }
    return console.log(column)

}

let counterDisplayTimes = setInterval(counter, 2000)

let stopcounter = function () {
    clearInterval(counterDisplayTimes)
}
let timeTostopCounter = setTimeout(stopcounter, 4 * 2000)
