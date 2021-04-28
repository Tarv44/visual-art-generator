const path = require('path')
const express = require('express')
const jsonParser = express.json()
const GenRouter = express.Router()
const {fillStart, fillCellGroup} = require('../../functions/fillGrid')

GenRouter
    .route('/')
    .post(jsonParser, (req, res, next) => {
        const {width, height} = req.body
        let totalColumns = width
        let totalRows = height
        // let totalCells
        let cellSize = 1
        // if (width >= height) {
        //     totalColumns = 350
        //     cellSize = width/totalColumns
        //     totalRows = Math.ceil(height/cellSize)
        // } else {
        //     totalRows = 120
        //     cellSize = height/totalRows
        //     totalColumns = Math.ceil(width/cellSize)
        // }
        // totalCells = totalRows * totalColumns
        let gridData = fillStart(totalColumns, totalRows, cellSize)
        gridData = fillCellGroup(gridData)
        let svg = (
            `<svg version="1.1"
            baseProfile="full"
            width="${width}" height="${height}"
            xmlns="http://www.w3.org/2000/svg">`
        )
        for (let c = 0; c < totalColumns; c++) {
            for (let r = 0; r < totalRows; r++) {
                const cell =  gridData.grid.columns[c][r]
                const rect = (
                    `<rect 
                        x="${cell.column * cellSize}" 
                        y="${cell.row * cellSize}" 
                        width="${cellSize}" 
                        height="${cellSize}"
                        fill="${cell.color.rgb}" 
                    />`
                )
                svg += rect
            }
        }
        svg += '</svg>'

        res.send({svg})
    })

module.exports = GenRouter