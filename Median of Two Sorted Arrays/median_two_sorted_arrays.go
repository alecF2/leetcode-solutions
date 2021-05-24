package main

import "fmt"

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	mid1 := len(nums1) / 2
	mid2 := len(nums2) / 2

}

func main() {
	nums1 := []int{1, 5, 7, 8, 9}
	nums2 := []int{2, 3, 4, 6}
	fmt.Println(findMedianSortedArrays(nums1, nums2))
}
