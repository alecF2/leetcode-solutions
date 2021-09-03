function canConstruct(ransomNote: string, magazine: string): boolean {
  const chars: Record<string, number> = {}
  for (let i = 0; i < magazine.length; i++) {
    if (magazine[i] in chars) {
      chars[magazine[i]]++
    } else {
      chars[magazine[i]] = 1
    }
  }
  
  for (let i = 0; i < ransomNote.length; i++) {
    if (!(ransomNote[i] in chars) || chars[ransomNote[i]] === 0) {
      return false
    }
    chars[ransomNote[i]]--
  }
  
  return true
}

function main() {
  const ransomNote = "aa"
  const magazine = "ab"
  console.log(canConstruct(ransomNote, magazine))
}

main()
