// // let column = '';



// // // itirise settimeout and setInterval 

// // let counter = function () {

// //     for (let i = 1; i <= 5; ++i) {
// //         for (let index = 1; index <= 5; index++) {
// //             column += index;
// //         }
// //         column += '\n';
// //     }
// //     return console.log(column)

// // }

// // let counterDisplayTimes = setInterval(counter, 2000)

// // let stopcounter = function () {
// //     clearInterval(counterDisplayTimes)
// // }
// // let timeTostopCounter = setTimeout(stopcounter, 4 * 2000)


// // // function call,bind, reply

// // const person = { nam: "peter", age: 23 }
// // function getPrsondetails(country) {
// //     console.log(`your name is ${this.nam} and your age is ${this.age} you came from ${country}`)
// // }
// // getPrsondetails.bind(person)
// // getPrsondetails("rwanda")

// // closure

// function persondata() {
//     let bd = "10/10/10"
//     console.log('welcome to person track app \n')
//     return function track() {
//         console.log(`your bd is ${bd} \n`)
//         return function accountInfo(money) {
//             return `your acount depo is ${money}`
//         }
//     }
// }

// let p = persondata()
// let t = p()
// console.log(t(11))


//array methods

let data1 = [1, 2, 3, 4, 5]
let data2 = [{ name: 'peter', age: 23 },
{ name: 'paul', age: 24 },
{ name: 'peter', age: 25 },
{ name: 'peter', age: 26 }]

data1.splice(2, 0, 10)

let element = [];
data2.forEach((d, i) => {
    element.push([{ d, i }])
});

// filter
let data3 = element.filter((t, d) => {


    return t[0].i != 1


})

// foreach

// element.forEach((t, s) => {
//     if (t[0].i == 1) {
//         element.splice(1, 1)

//     }
// })
console.log(data3)

