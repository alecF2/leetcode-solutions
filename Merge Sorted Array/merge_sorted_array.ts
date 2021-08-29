function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let len = nums1.length - 1
  m--
  n--

  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[len--] = nums1[m--]
    } else {
      nums1[len--] = nums2[n--]
    }
  }
}

function main() {
  const nums1 = [1, 2, 3, 0, 0, 0]
  const nums2 = [2, 5, 6]
  merge(nums1, 3, nums2, nums2.length)
  console.log(nums1)
}

main()
