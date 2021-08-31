function firstUniqCharEasy(s: string): number {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i
    }
  }
  return -1
}

// intuition
function firstUniqChar(s: string): number {
  const seen: Record<string, number> = {}

  for (let i = 0; i < s.length; i++) {
    if (s[i] in seen) {
      seen[s[i]]++
    } else {
      seen[s[i]] = 1
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (seen[s[i]] === 1) {
      return i
    }
  }

  return -1
}

function main() {
  const s = "aadadaad"
  console.log(firstUniqChar(s))
}

main()
