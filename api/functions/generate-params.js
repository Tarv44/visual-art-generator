const {randomFromRange} = require('./helperFunctions');

const generateColorChances = () => {
    const colorChances = {}
    
    //Chance of random color
    const randomChance = randomFromRange(3)
    if (randomChance === 0) {
        colorChances.random = 0
    }

    if (randomChance === 1) {
        colorChances.random = (randomFromRange(100) + 1)/100
    }

    if (randomChance === 2) {
        colorChances.random = (randomFromRange(600) + 1)/100
    }

    //Chance of Skew Color
    const skewChance = randomFromRange(6)
    if (skewChance === 0) {
        colorChances.skew = 0
    }

    if (skewChance >= 1 && skewChance <= 3) {
        colorChances.skew = (Math.random() * (100 - colorChances.random)) + 1
    }

    if (skewChance >= 4) {
        colorChances.skew = 100 - colorChances.random
    }

    //Chance of Same Color
    colorChances.same = 100 - colorChances.random - colorChances.skew

    return colorChances
}

const generateSkewParams = () => {
    const skewParams = {}
    
    //Skew Range
    const skewRangeChance = randomFromRange(4)
    if (skewRangeChance === 0) {
        skewParams.changeRange = randomFromRange(3) + 1
    }

    if (skewRangeChance === 1) {
        skewParams.changeRange = randomFromRange(4) + 4
    }

    if (skewRangeChance === 2) {
        skewParams.changeRange = randomFromRange(8) + 9
    }

    if (skewRangeChance === 3) {
        skewParams.changeRange = randomFromRange(22) + 18
    }

    //Color Range
    const colorRangeChance = randomFromRange(100)

    if (colorRangeChance === 0) {
        skewParams.redLow = 0
        skewParams.redUpper = 255
        skewParams.blueLow = 0
        skewParams.blueUpper = 255
        skewParams.greenLow = 0
        skewParams.greenUpper = 255
    }

    if (colorRangeChance > 0) {
        //Red
        if (randomFromRange(100) < 5) {
            skewParams.redLow = 0
            skewParams.redUpper = 255
        } else {
            const num1 = randomFromRange(256)
            const num2 = randomFromRange(256)
            if (num1 >= num2) {
                skewParams.redUpper = num1
                skewParams.redLow = num2
            } else {
                skewParams.redUpper = num2
                skewParams.redLow = num1
            }
        }

        //Blue
        if (randomFromRange(100) < 5) {
            skewParams.blueLow = 0
            skewParams.blueUpper = 255
        } else {
            const num1 = randomFromRange(256)
            const num2 = randomFromRange(256)
            if (num1 >= num2) {
                skewParams.blueUpper = num1
                skewParams.blueLow = num2
            } else {
                skewParams.blueUpper = num2
                skewParams.blueLow = num1
            }
        }

        //Green
        if (randomFromRange(100) < 5) {
            skewParams.greenLow = 0
            skewParams.greenUpper = 255
        } else {
            const num1 = randomFromRange(256)
            const num2 = randomFromRange(256)
            if (num1 >= num2) {
                skewParams.greenUpper = num1
                skewParams.greenLow = num2
            } else {
                skewParams.greenUpper = num2
                skewParams.greenLow = num1
            }
        }
    }

    return skewParams
}

// const generateNodeParams = () => {
//     const nodeParams = {}

//     //Starting nodes
//     const startNodeChance = randomFromRange(3)

//     if (startNodeChance === 0) {
//         nodeParams.totalStart = 1
//     }

//     if (startNodeChance === 1) {
//         nodeParams.totalStart = randomFromRange(10) + 1
//     }

//     if (startNodeChance === 2) {
//         nodeParams.totalStart = randomFromRange(100) + 1
//     }

//     // if (startNodeChance === 3) {
//     //     nodeParams.totalStart = randomFromRange(1000) + 1
//     // }

//     nodeParams.chanceNew = 0
//     nodeParams.chanceNewSame = 0
//     nodeParams.chanceNewDiff = 0

//     return nodeParams
// }

function generateParams() {
    const params = {}
    params.colorChances = generateColorChances()
    params.skew = generateSkewParams()
    // newGrid.params.node = generateNodeParams()
    return params
} 

module.exports = generateParams
