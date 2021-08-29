function containsDuplicate(nums: number[]): boolean {
  const seen: Record<number, boolean> = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in seen) {
      return true
    }
    seen[nums[i]] = true
  }
  return false
}

function containsDuplicateAlt(nums: number[]): boolean {
  const seen = new Set(nums)
  return seen.size !== nums.length
}

function main() {
  const nums = [1,2,4,3,4]
  console.log(containsDuplicate(nums))
  console.log(containsDuplicateAlt(nums))
}

main()
