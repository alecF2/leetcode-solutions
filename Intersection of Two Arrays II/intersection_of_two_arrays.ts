function intersect(nums1: number[], nums2: number[]): number[] {
  const result: number[] = []
  const seen: Record<number, number> = {}

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] in seen) {
      seen[nums1[i]]++
    } else {
      seen[nums1[i]] = 1
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] in seen && seen[nums2[i]] > 0) {
      result.push(nums2[i])
      seen[nums2[i]]--
    }
  }

  return result
}

function main() {
  const nums1 = [4, 9, 5]
  const nums2 = [9, 4, 9, 8, 4]
  console.log(intersect(nums1, nums2))
}

main()
