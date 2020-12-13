// Grid index

function gridIndex(grid, indices) {
    grid = grid.reduce((a, b) => a.concat(...b), [])
    return indices.map(i => grid[i - 1]).join('')
}