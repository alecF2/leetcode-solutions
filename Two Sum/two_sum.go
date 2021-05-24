package main

import "fmt"

func twoSum(target int, nums []int) (int, int) {
	// map will store nums' values as keys and their indices as values
	m := make(map[int]int)
	for k, v := range nums {
		if index, ok := m[target-v]; ok {
			return index, k
		}
		m[v] = k
	}
	return 0, 0
}

func main() {
	array := []int{0, 1, 2, 4, 5, 6}
	target := 5
	f, s := twoSum(target, array)
	fmt.Println(f, s)
}
