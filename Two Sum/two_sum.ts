function twoSum(nums: number[], target: number): number[] {
    let m: Record<number, number> = {}
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in m) {
            return [m[target - nums[i]], i]
        }
        m[nums[i]] = i
    }
    return []
}

function main() {
    let array = [0, 1, 2, 4, 5, 6]
    let target = 5
    console.log(twoSum(array, target))
}
main()
