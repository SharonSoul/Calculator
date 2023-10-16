let calculation = ''
let calcEle = document.querySelector('#calcEl')
let resultEle = document.querySelector('#resultEl')
document.querySelector('body').appendChild(calcEle)

/*
document.querySelector('button').addEventListener('keyup', function(e) {
  let calcEle = document.querySelector('#calcEl')
  console.log('Works')
  calcEle.textContent = event.key

})
*/

document.querySelector('#one').addEventListener('click', function(e) {
  calculation = calculation + 1
})

document.querySelector('#two').addEventListener('click', function(e) {
  calculation = calculation + 2
})

document.querySelector('#three').addEventListener('click', function(e) {
  calculation = calculation + 3
})

document.querySelector('#four').addEventListener('click', function(e) {
  calculation = calculation + 4
})

document.querySelector('#five').addEventListener('click', function(e) {
  calculation = calculation + 5
})

document.querySelector('#six').addEventListener('click', function(e) {
  calculation = calculation + 6
})

document.querySelector('#seven').addEventListener('click', function(e) {
  calculation = calculation + 7
})

document.querySelector('#eight').addEventListener('click', function(e) {
  calculation = calculation + 8
})

document.querySelector('#nine').addEventListener('click', function(e) {
  calculation = calculation + 9
})

document.querySelector('#zero').addEventListener('click', function(e) {
  calculation = calculation + 0
})


document.querySelector('#plus').addEventListener('click', function(e) {
  calculation = calculation + '+'
})

document.querySelector('#minus').addEventListener('click', function(e) {
  calculation = calculation + '-'
})

document.querySelector('#divide').addEventListener('click', function(e) {
  calculation = calculation + '/'
})

document.querySelector('#multiply').addEventListener('click', function(e) {
  calculation = calculation + '*'

})

document.querySelector('#result').addEventListener('click', function(e) {
  console.log(calculation)
  calculation = eval(calculation)
  resultEle.textContent = calculation
  console.log(calculation)

})

document.querySelector('#clear').addEventListener('click', function(e) {
  calculation = ''
  resultEle.textContent = calculation

})
let use = document.querySelector('#whole')
use.addEventListener('click', function(e) {
  resultEle.textContent = calculation

})
