function longestPalindrome(s: string): string {
  let idx: [number, number] = [0, 0]
  const calc: boolean[][] = []
  for (let i = 0; i < s.length; i++) {
    calc.push(new Array(s.length).fill(false))
  }

  // fill base cases (one letter or two of the same letter in a row)
  for (let i = 0; i < s.length; i++) {
    calc[i][i] = true
    if (s[i] === s[i + 1]) {
      idx = [i, i + 1]
      calc[i][i + 1] = true
    }
  }

  for (let i = 2; i < s.length; i++) {
    for (let j = 0; j < s.length - i; j++) {
      if (s[j] === s[j + i] && calc[j + 1][j + i - 1]) {
        calc[j][j + i] = true
        if ((j + i) - j > idx[1] - idx[0]) {
          idx = [j, j + i]
        }
      }
    }
  }

  return s.slice(idx[0], idx[1] + 1)
}

function main() {
  const cases = [
    "babab",
    "acab",
    "fdjisofi",
    "yay",
    "cabbh"
  ]

  cases.forEach(cas => {
    console.log("case: " + cas + ", longest: " + longestPalindrome(cas))
  })
}

main()

export default {}
