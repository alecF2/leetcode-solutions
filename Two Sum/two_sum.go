package main

import "fmt"

func twoSum(target int, nums []int) []int {
	// map will store nums' values as keys and their indices as values
	m := make(map[int]int)
	for k, v := range nums {
		if idx, ok := m[target-v]; ok {
			return []int{idx, k}
		}
		m[v] = k
	}
	return nil
}

func main() {
	array := []int{0, 1, 2, 4, 5, 6}
	target := 5
	fmt.Println(twoSum(target, array))
}
