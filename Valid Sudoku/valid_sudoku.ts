// with fast boxNum calculation
function isValidSudokuFast(board: string[][]): boolean {
  const rows: Set<string>[] = Array.from(Array(9)).map(() => new Set())
  const cols: Set<string>[] = Array.from(Array(9)).map(() => new Set())
  const boxes: Set<string>[] = Array.from(Array(9)).map(() => new Set())

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const curr = board[i][j]
      const idx =  Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (curr === ".") continue
      if (rows[i].has(curr) || cols[j].has(curr) || boxes[idx].has(curr)) {
        return false
      }
      rows[i].add(curr)
      cols[j].add(curr)
      boxes[idx].add(curr)
    }
  }

  return true
}

// with boxNum function
function isValidSudoku(board: string[][]): boolean {
  const rows: Set<string>[] = Array.from(Array(9)).map(() => new Set())
  const cols: Set<string>[] = Array.from(Array(9)).map(() => new Set())
  const boxes: Set<string>[] = Array.from(Array(9)).map(() => new Set())

  const boxNum = ([i, j]: [number, number]) => {
    if (i <= 2) {
      if (j <= 2) return 0
      if (j <= 5) return 1
      if (j <= 8) return 2
    }
    if (i <= 5) {
      if (j <= 2) return 3
      if (j <= 5) return 4
      if (j <= 8) return 5
    }
    if (i <= 8) {
      if (j <= 2) return 6
      if (j <= 5) return 7
      if (j <= 8) return 8
    }
    return 0
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const curr = board[i][j]
      if (curr === ".") continue
      if (rows[i].has(curr) || cols[j].has(curr) || boxes[boxNum([i, j])].has(curr)) {
        return false
      }
      rows[i].add(curr)
      cols[j].add(curr)
      boxes[boxNum([i, j])].add(curr)
    }
  }

  return true
}

function main() {
  const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ]
  console.log(isValidSudoku(board))
}

main()
