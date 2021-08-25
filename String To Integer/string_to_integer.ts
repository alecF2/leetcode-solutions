function myAtoi(s: string): number {
  const max = (2 ** 31) - 1
  const min = (-2) ** 31
  let sign = 1
  let num = 0
  let idx = 0

  while (s[idx] === " ") idx++
  if (s[idx] === "-" || s[idx] === "+") {
    sign = s[idx] === "-" ? -1 : 1
    idx++
  }

  while (s[idx] >= "0" && s[idx] <= "9") {
    num *= 10
    num += Number(s[idx])
    if (num * sign > max) return max
    if (num * sign < min) return min
    idx++
  }

  return num * sign
}

function main() {
  const cases = [
    "   -42",
    "4193 with words",
    "words and 987",
    "-91283472332"
  ]

  cases.forEach(cas => {
    console.log("case: " + cas + ", number: " + myAtoi(cas))
  })
}

main()
