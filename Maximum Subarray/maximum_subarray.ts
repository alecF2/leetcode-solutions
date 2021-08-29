function maxSubArray(nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] > nums[i] + nums[i - 1] ? nums[i] : nums[i] + nums[i - 1]
  }

  return Math.max(...nums)
}

function main() {
  const nums = [-2,1,-3,4,-1,2,1,-5,4]
  console.log(maxSubArray(nums))
}

main()
