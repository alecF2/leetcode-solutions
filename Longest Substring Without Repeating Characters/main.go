package main

import "fmt"

func lengthOfLongestSubstring(s string) int {
	curr_length, max_length, start := 0, 0, 0
	curr_chars := map[rune]int{}

	for pos, char := range s {
		if idx, ok := curr_chars[char]; ok {
			if idx >= start {
				curr_length = pos - idx - 1
				start = idx + 1
			}
		}
		curr_length++
		curr_chars[char] = pos
		if curr_length > max_length {
			max_length = curr_length
		}
	}

	return max_length
}

func main() {
	fmt.Println(lengthOfLongestSubstring("wobgrovw"))
}
