function generateEmptyCell(col, r) {
    const cellId = `c${col}r${r}`
    const emptyCell = {
        id: cellId,
        column: col,
        row: r,
        opacity: 0,
        color: null,
    }
    return emptyCell
}

function generateEmptyGrid(totalColumns, totalRows) {
    const columns = []
    for (let c = 0; c < totalColumns; c++) {
        const columnArray = []
        for (let r = 0; r < totalRows; r++) {
            columnArray.push(generateEmptyCell(c, r))
        }
        columns.push(columnArray)
    }
    return {columns}
}

function generateDummyGrid() {
    const gridState = {}
    const gridArray = []
    for (let c = 0; c < 10; c++) {
        const columnArray = []
        for (let r = 0; r < 10; r++) {
            columnArray.push(generateEmptyCell(c, r))
        }
        gridArray.push(columnArray)
    }
    gridState.columns = gridArray
    return gridState
}

module.exports = generateEmptyGrid