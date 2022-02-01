let brazilianRap = ["BK'", "Djonga", "Nill", "Baco Exu do Blues", "Makalister"]
console.log(brazilianRap);

brazilianRap.unshift("Victor Xamã")
console.log(brazilianRap)

brazilianRap.pop()
console.log(brazilianRap)

brazilianRap.push("Drik Barbosa", "Nina do Porte")
console.log(brazilianRap)

brazilianRap.shift()
console.log()

const numbers = [7,5,6,3,8,9,2,1,4]

const numbersAsc = numbers.sort(function (a,b) {
    return a- b
})

console.log(numbersAsc)