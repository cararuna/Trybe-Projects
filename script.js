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
  var array = [9, 25]
  /* x = array.length */

  var arrayReturn = []
  /* arrayReturn.length = x */

  for (i = 0; i < array.length; i++) {
    var divisivel3 = array[i] % 3
    var divisivel5 = array[i] % 5
    console.log(divisivel3)
    console.log(divisivel5)

    if (divisivel3 === 0 && divisivel5 === 0) {
      arrayReturn.push('fizzBuzz')
    } else if (divisivel3 === 0 && divisivel5 !== 0) {
      arrayReturn.push('fizz')
    } else if (divisivel3 !== 0 && divisivel5 === 0) {
      arrayReturn.push('buzz')
    } else {
      arrayReturn.push('bug!')
    }
    console.log(arrayReturn)
  }
}

function generatePhoneNumber() {
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]
  var arrayReturn = []
  var string
  var contNegativo = 0
  var contMaior9 = 0

  for (i = 0; i < array.length; i++) {
    arrayReturn.push(array[i])

    if (array[i] < 0) {
      contNegativo++
    } else if (array[i] > 9) {
      contMaior9++
    } else if (array[i]) {
    }

    string =
      '(' +
      array[0] +
      array[1] +
      ')' +
      array[2] +
      array[3] +
      array[4] +
      array[5] +
      array[6] +
      '-' +
      array[7] +
      array[8] +
      array[9] +
      array[10]
  }

  if (array.length !== 11) {
    console.log('Array com tamanho incorreto.')
  } else if (contNegativo > 0 || contMaior9 > 0) {
    console.log('não é possível gerar um número de telefone com esses valores')
  } else {
    for (i = 0; i < array.length; i++) {
      arrayReturn.push(array[i])
      string =
        '(' +
        array[0] +
        array[1] +
        ')' +
        array[2] +
        array[3] +
        array[4] +
        array[5] +
        array[6] +
        '-' +
        array[7] +
        array[8] +
        array[9] +
        array[10]
    }
    console.log(string)
  }
}

function hydrate() {
  var str = 'tomamos 3 cervejas, 9 garrafas de vinho e 2 lapadas de cachaça'
  var copos = 0
  str = str.replace(/[^0-9]/g, '')

  const usingSplit = str.split('')
  const usingSpread = [...str]
  const usingArrayFrom = Array.from(str)
  const usingObjectAssign = Object.assign([], str)

  var arrayDeInteiros = []
  for (i = 0; i < usingObjectAssign.length; i++) {
    var number = parseInt(usingObjectAssign[i])
    copos = copos + number
    arrayDeInteiros.push(number)
    console.log(arrayDeInteiros[i])
  }
  if (copos === 1) {
    console.log('Você deverá tomar ' + copos + ' copo de água.')
  } else {
    console.log('Você deverá tomar ' + copos + ' copos de água.')
  }
}
