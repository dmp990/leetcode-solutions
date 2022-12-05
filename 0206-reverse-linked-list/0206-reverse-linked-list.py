# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        reversed = None
        current = head
        
        # reversed look like this: None
        while current:
            temp = current.next
            current.next = reversed
            reversed = current
            current = temp
        
        return reversed