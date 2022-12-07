# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        fast = head
        dummy = ListNode(val=0, next=head)
        slow = dummy
        
        while fast:
            if n > 0:
                fast = fast.next
            else:
                slow = slow.next
                fast = fast.next
            n -= 1
        slow.next = slow.next.next
        return dummy.next