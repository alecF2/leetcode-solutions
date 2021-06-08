package main

import (
	"fmt"
	"math"
)

func integerBreak(n int) int {
	m := float64(int(n / 3))
	if n%3 == 2 {
		if m == 0 {
			return 1
		}
		return int(math.Pow(3, m)) * 2
	} else if n%3 == 1 {
		return int(math.Pow(3, m-1)) * 4
	} else {
		if m == 1 {
			return 2
		}
		return int(math.Pow(3, m))
	}
}

// run time better than 100%
func main() {
	fmt.Println(integerBreak(42))
}
