const fizzBuzzAnswer = require('./fizzBuzz')

describe(('fizzBuzzAnswer'), () => {
    it('returns Fizz with 3', () => {
        expect(fizzBuzzAnswer(3)).toBe('Fizz')
    })
})

describe(('fizzBuzzAnswer'), () => {
    it('returns Buzz with 5', () => {
        expect(fizzBuzzAnswer(5)).toBe('Buzz')
    })
})

describe(('fizzBuzzAnswer'), () => {
    it('returns 8 with 8', () => {
        expect(fizzBuzzAnswer(8)).toBe(8)
    })
})

describe(('fizzBuzzAnswer'), () => {
    it('returns FizzBuzz with 15', () => {
        expect(fizzBuzzAnswer(15)).toBe('FizzBuzz')
    })
})

describe(('fizzBuzzAnswer'), () => {
    it('returns Fizz with 18', () => {
        expect(fizzBuzzAnswer(18)).toBe('Fizz')
    })
})

describe(('fizzBuzzAnswer'), () => {
    it('returns Buzz with 20', () => {
        expect(fizzBuzzAnswer(20)).toBe('Buzz')
    })
})