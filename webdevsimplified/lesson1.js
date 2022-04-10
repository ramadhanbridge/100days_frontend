function fullname(fname){
    const [firstName,lastName] = fname.split('')
    return [firstName,lastName]
}
console.log(fullname('ram bridge'))