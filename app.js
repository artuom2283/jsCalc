const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplicationBtn = document.getElementById('multiplication')
const degreeBtn = document.getElementById('degree')


let action = ''

plusBtn.onclick = function() {
  action = '+'
}

minusBtn.onclick = function() {
  action = '-'
}

multiplicationBtn.onclick = function() {
  action = '*'
}

degreeBtn.onclick = function() {
  action = '/'
}

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = 'red'
  }
  else {
    resultElement.style.color = 'green'
  }
  resultElement.textContent = result
}

function computeNumbersWithAction(input1, input2, action) {
  const num1= Number(input1.value)
  const num2= Number(input2.value)   
  if (action == '+') {
    return num1 + num2
  }
  else if (action == '-') {
    return num1 - num2
  }
  else if (action == '*') {
    return num1 * num2
  }
  else {
    return num1 / num2
  }
}

submitBtn.onclick = function() {

  const result = computeNumbersWithAction(input1, input2, action)
  printResult(result)
  
}