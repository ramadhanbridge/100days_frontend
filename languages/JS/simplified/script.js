// // destrcuring 1

// const array = [["A"], ["B"], ["C"], ["D"]]
// const person = {
//     name: "kyle",
//     age: 25,
//     address: {
//         street: "mumena",
//         city: "kigali"
//     }
// }

// const [first, sec, , fourth] = array;
// console.log(first, sec, fourth)


// // example 1

// function addAndMultiple(a, b) {
//     return [a + b, a * b]
// }

// const [sum, multi] = addAndMultiple(3, 7)

// console.log("sum is ", sum, " and product is ", multi);


// // object destructing

// const { name: firstName, age, address: { street, city } } = person
// console.log(firstName, age, city)

// // example 2

// function sumAndproduct(a, b) {
//     return { sum: a + b, prod: a * b }
// }

// const { sum: addition, prod } = sumAndproduct(2, 2)
// console.log("object destructuring sum and prod respectively ", addition, prod)


// // example 3

// function fullName1(getFullname) {
//     let fullName = getFullname
//     let names = fullName.split(" ")
//     return names
// }

// const [firstname, lastname] = fullName1("ram brdige")

// console.log(firstname, lastname)


// // example 4

// function fullName2(getFullname) {
//     const [firstname2, lastname2] = getFullname.split(' ')
//     return { firstname2, lastname2 }
// }

// const { firstname2, lastname2 } = fullName2("ram brdige")

// console.log(firstname2, lastname2)

// function divAndMultiply({ a, b = 5 }) {
//     return [a / b, a * b]
// }

// const [div, mul] = divAndMultiply({ a: 5 })
// console.log(div, mul)


// lesson 3
// last oparetor
// function sum(mul, ...numbers) {
//     return mul * numbers.reduce((sum, num) => sum + num, 0)
// }
// console.log(sum(2, 2, 3, 4, 5))


// set 

let num = [...new Set([1, 2, 2, 3, 4, 5])]
console.log(num)
