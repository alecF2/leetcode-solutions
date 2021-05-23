package main

import (
	"fmt"
	"math"
)

func reverse(x int) int {
	result := 0
	for x != 0 {
		result = result*10 + (x % 10)
		x = (x - (x % 10)) / 10
	}
	if result > math.MaxInt32 || result < math.MinInt32 {
		result = 0
	}
	return result
}

func main() {
	fmt.Println(reverse(42))
}
