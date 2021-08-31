function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const m = mat.length
  const n = mat[0].length
  const reshaped: number[][] = Array.from(Array(r)).map(() => [])
  let row = 0
  let col = 0

  if (m * n !== r * c) {
    return mat
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      reshaped[row].push(mat[i][j])
      if (col === c - 1) {
        col = 0
        row++
      } else {
        col++
      }
    }
  }

  return reshaped
}

function main() {
  const mat = [[1, 2, 6, 7], [3, 4, 9, 7]]
  const r = 8
  const c = 1
  console.log(matrixReshape(mat, r, c))
}

main()
