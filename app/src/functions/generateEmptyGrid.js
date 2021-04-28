function generateEmptyCell(col, r, size) {
    const cellId = `c${col}r${r}`
    const emptyCell = {
        id: cellId,
        column: col,
        row: r,
        opacity: 0,
        color: null,
        size
    }
    return emptyCell
}

export default function generateEmptyGrid(state) {
    const gridState = state
    const columns = []
    for (let c = 0; c < state.totalColumns; c++) {
        const columnArray = []
        for (let r = 0; r < state.totalRows; r++) {
            columnArray.push(generateEmptyCell(c, r, state.cellSize))
        }
        columns.push(columnArray)
    }
    gridState.grid = {columns}
    gridState.totalCellsFilled = 0
    return gridState
}

export function generateDummyGrid() {
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