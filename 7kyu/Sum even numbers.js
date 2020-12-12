//Sum even numbers

function sumEvenNumbers(input) {
    return input.reduce((a, b) => {
        return a + (b % 2 === 0 ? b : 0)
    }, 0)
}