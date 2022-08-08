function writeCards(name, event) {
  for (let i = 0; i < name.length; i++) {
    name[i] = (`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
  }
  return name
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], 'surpise'))

/*--------------- Optional ------------------------*/
// const newArr = ["Guadalupe", "Ollie", "Aki"]

// function writeCards(name, event) {
//   for (let i = 0; i < name.length; i++) {
//     newArr[i] = (`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
//   }
//   return newArr
// }
// console.log(writeCards(newArr, 'surpise'))

function countDown(params) {
  let i = 10
  while (i >= 0) {
    console.log(i--)
  }
  return
}
countDown()
