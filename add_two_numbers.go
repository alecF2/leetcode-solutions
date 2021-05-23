package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	result := new(ListNode)
	real := result
	carry := false
	overflow := 0
	value := 0

	for l1 != nil || l2 != nil {
		// println(l1.Val, l2.Val)
		overflow = 0
		if carry {
			overflow = 1
		}
		if l1 == nil {
			value = l2.Val + overflow
			l2 = l2.Next
		} else if l2 == nil {
			value = l1.Val + overflow
			l1 = l1.Next
		} else {
			value = l1.Val + l2.Val + overflow
			l1 = l1.Next
			l2 = l2.Next
		}
		carry = value > 9
		if carry {
			value -= 10
		}
		// println(value)
		result.Val = value
		// println(result.Val)
		if l1 != nil || l2 != nil {
			result.Next = new(ListNode)
			result = result.Next
		}
	}

	if carry {
		result.Next = new(ListNode)
		result.Next.Val = 1
	}

	return real
}

func main() {
	first := new(ListNode)
	first.Val, first.Next = 2, new(ListNode)
	first.Next.Val, first.Next.Next = 4, new(ListNode)
	first.Next.Next.Val, first.Next.Next.Next = 3, nil

	second := new(ListNode)
	second.Val, second.Next = 5, new(ListNode)
	second.Next.Val, second.Next.Next = 6, new(ListNode)
	second.Next.Next.Val, second.Next.Next.Next = 4, nil

	result := addTwoNumbers(first, second)

	for result != nil {
		print(result.Val)
		result = result.Next
	}
	print("\n")
}
