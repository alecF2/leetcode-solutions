function searchMatrix(matrix: number[][], target: number): boolean {
  const rows = matrix.length
  const cols = matrix[0].length
  let lo = 0
  let hi = rows - 1
  let rowIdx = 0
  let mid = Math.floor(lo + (hi - lo) / 2)

  while (lo <= hi) {
    console.log("hello")
    if (target < matrix[mid][0]) {
      hi = mid - 1
    } else if (mid < rows - 1 && target >= matrix[mid + 1][0]) {
      lo = mid + 1
    } else {
      break;
    }
    mid = Math.floor(lo + (hi - lo) / 2)
  }

  if (mid < 0 || mid > rows - 1) return false

  rowIdx = mid
  lo = 0
  hi = cols - 1
  mid = Math.floor(lo + (hi - lo) / 2)

  while (lo <= hi) {
    if (target < matrix[rowIdx][mid]) {
      hi = mid - 1
    } else if (target > matrix[rowIdx][mid]) {
      lo = mid + 1
    } else {
      return true
    }
    mid = Math.floor(lo + (hi - lo) / 2)
  }

  return false
}

function main() {
  // const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
  // const target = 3
  const matrix = [[1], [3]]
  const target = 3
  console.log(searchMatrix(matrix, target))
}

main()
