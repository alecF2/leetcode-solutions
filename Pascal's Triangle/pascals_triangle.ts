function generate(numRows: number): number[][] {
  const triangle: number[][] = Array.from(Array(numRows)).map(() => [])
  
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        triangle[i].push(1)
      } else {
        const sum = triangle[i-1][j-1] + triangle[i-1][j]
        triangle[i].push(sum)
      }
    }
  }

  return triangle
}

function main() {
  const numRows = 5
  console.log(generate(numRows))
}

main()
