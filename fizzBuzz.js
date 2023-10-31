function fizzBuzzAnswer(number) {
    if (number % 5 === 0 && number % 3 === 0) {
        return 'FizzBuzz'
    } else if (number % 5 === 0) {
        return 'Buzz'
    } else if (number % 3 === 0) {
        return 'Fizz'
    } else {
        return number
    }
}

function fizzBuzzUntil(number) {
    i = 0
    while (i <= number) {
        console.log(fizzBuzzAnswer(i))
        i += 1
    }
}

module.exports = fizzBuzzUntil
module.exports = fizzBuzzAnswer