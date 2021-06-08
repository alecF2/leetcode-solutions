package main

import "fmt"

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	nums1_lo, nums1_hi, nums1_mid := 0, len(nums1)-1, len(nums1)/2
	nums2_lo, nums2_hi, nums2_mid := 0, len(nums2)-1, len(nums2)/2

	for !(nums1[nums1_mid-1] < nums2[nums2_mid] && nums2[nums2_mid-1] < nums1[nums1_mid]) {
		return 1.00
	}
}

func main() {
	nums1 := []int{1, 5, 7, 8, 9}
	nums2 := []int{2, 3, 4, 6}
	fmt.Println(findMedianSortedArrays(nums1, nums2))
}
