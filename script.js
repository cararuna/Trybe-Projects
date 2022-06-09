function compareTrue() {
  var x = document.getElementById('fvalue').value
  console.log(x)
  var y = document.getElementById('svalue').value
  console.log(y)

  var compare = x && y ? console.log('true') : console.log('false')
  /* if ((compare = true)) {
    return true
  } else {
    return false
  } */
}
function highestCount() {
  var array = [0, 0, 0]
  var highValue = 0
  for (i = 0; i < array.length; i++) {
    if (array[i] > highValue) {
      highValue = array[i]
    }
  }
  console.log(highValue)
  var cont = 0
  for (j = 0; j < array.length; j++) {
    if (array[j] === highValue) {
      cont++
    }
  }

  console.log(cont)
}

function FizzBuzz() {
  var array = [15, 2, 7, 9, 45]
  /* x = array.length */

  var arrayReturn = []
  /* arrayReturn.length = x */

  for (i = 0; i < array.length; i++) {
    var divisivel3 = array[i] % 3
    var divisivel5 = array[i] % 5
    console.log(divisivel3)
    console.log(divisivel5)

    if ((divisivel3 === 0) && (divisivel5 === 0)) {
      arrayReturn.push('fizzBuzz')
    } else if ((divisivel3 === 0) && divisivel5 !== 0) {
      arrayReturn.push('fizz')
    } else if (divisivel3 !== 0 && (divisivel5 === 0)) {
      arrayReturn.push('buzz')
    } else {
      arrayReturn.push('bug!')
    }
    console.log(arrayReturn)
  }
}
