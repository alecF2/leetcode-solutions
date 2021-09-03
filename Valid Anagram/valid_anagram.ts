function isAnagramEasy(s: string, t: string): boolean {
  const sSorted = s.split("").sort().join()
  const tSorted = t.split("").sort().join()
  return sSorted === tSorted
}

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const seen: Record<string, number> = {}

  for (let i = 0; i < s.length; i++) {
    seen[s[i]] = 1 + (seen[s[i]] ?? 0)
  }

  for (let i = 0; i < t.length; i++) {
    if (!(t[i] in seen) || seen[t[i]] === 0) {
      return false
    }
    seen[t[i]]--
  }

  return true
}

function main() {
  const s = "anagramd"
  const t = "nagaram"
  console.log(isAnagram(s, t))
}

main()
