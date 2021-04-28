function randomFromRange(range) {
    return Math.floor(Math.random() * range)
}

function randomFromArray(array) {
    const i = randomFromRange(array.length)
    return array[i]
}

function randomRGB() {
    const colorObject = {}
    colorObject.red = randomFromRange(256)
    colorObject.green = randomFromRange(256)
    colorObject.blue = randomFromRange(256)
    const rgb = `rgba(${colorObject.red}, ${colorObject.green}, ${colorObject.blue}, 1)`
    colorObject.rgb = rgb
    return colorObject
}

module.exports = {
    randomFromRange,
    randomFromArray,
    randomRGB
}