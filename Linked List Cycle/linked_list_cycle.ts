class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) return false
  const seen: Set<ListNode | null> = new Set()
  seen.add(head)
  let currNode: ListNode | null = head.next

  while (currNode) {
    if (seen.has(currNode)) {
      return true
    }
    seen.add(currNode)
    currNode = currNode.next
  }

  return false
}

function main() {
  console.log("can't test")
}
