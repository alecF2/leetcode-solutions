fun twoSum(nums: Array<Int>, target: Int): Pair<Int, Int> {
  var cand = mutableMapOf<Int, Int>()
  for ((idx, num) in nums.withIndex()) {
      if (target - num in cand) {
        return Pair(cand[target - num]!!, idx)
      }
      cand.set(num, idx)
  }
  return Pair(0, 0)
}

fun main() {
  val arr = arrayOf(1, 2, 3, 4, 5)
  val target = 4
  println(twoSum(arr, target))
}
