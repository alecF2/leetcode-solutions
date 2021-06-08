package main

import "fmt"

func twoSum(target int, nums []int) []int {
	// map will store nums' values as keys and their indices as values
	m := make(map[int]int)
	for k, v := range nums {
		if _, ok := m[target-v]; ok {
			return []int{target - v, v}
		}
		m[v] = k
	}
	return nil
}

func threeSum(nums []int) [][]int {
	result := [][]int{}
	for i, v := range nums {
		if r := twoSum(-v, nums); r != nil && r[0] != i && r[1] != i {
			match := []int{v}
			result = append(result, append(match, r...))
		}
	}
	return result
}

func main() {
	nums := []int{-1, 0, 1, 2, -1, -4}
	fmt.Println(threeSum(nums))
}
