interface result {
    result: number
    modulus: number
}

function divisionWithoutOperator(dividend: number, divisor: number): result | null {
    if (divisor === 0 || dividend === 0) return null

    let timesInside: number = 0
    let sumAux: number = 0

    while (sumAux !== dividend) {
        sumAux += divisor
        timesInside++
    }

    return { result: timesInside, modulus: dividend - sumAux }
}

console.log(divisionWithoutOperator(10, 5))