function getBiggestMultiplication(arrayOfIntegers) {
    if (arrayOfIntegers.length < 3) throw new Error('Given Array is too short')
    let maximum1, maximum2, maximum3, minimum1, minimum2
    maximum1 = maximum2 = maximum3 = -Infinity
    minimum1 = minimum2 = Infinity


    for (let i of arrayOfIntegers) {
        if (i <= minimum1) {
            minimum2 = minimum1
            minimum1 = i
        } else if (i <= minimum2) {
            minimum2 = i
        }
        if (i >= maximum1) {
            maximum3 = maximum2
            maximum2 = maximum1
            maximum1 = i
        } else if (i >= maximum2) {
            maximum3 = maximum2
            maximum2 = i
        } else if (i >= maximum3) {
            maximum3 = i
        }
    }
    return Math.max(minimum1 * minimum2 * maximum1, maximum1 * maximum2 * maximum3)
}

