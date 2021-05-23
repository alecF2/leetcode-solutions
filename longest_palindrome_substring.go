package main

import (
	"fmt"
)

func longestPalindrome(s string) string {
	curr := string(s[0])
	longest := curr

	for i := range s {
		iter := 0
		if i < len(s)-i {
			iter = i
		} else {
			iter = len(s) - i - 1
		}
		fmt.Printf("iterating %v times\n", iter)

		for j := 1; j <= iter; j++ {
			fmt.Printf("i is: %v\n", i)
			if string(s[i-j]) == string(s[i+j]) {
				fmt.Println(string(s[i-j]), string(s[i+j]))
				curr = string(s[(i - j):(i + j + 1)])
				fmt.Println("longest", longest)
			} else {
				break
			}
			if len(curr) > len(longest) {
				longest = curr
			}
		}
	}
	return longest
}

func main() {
	fmt.Println(longestPalindrome("acaabacabacababb"))
}
