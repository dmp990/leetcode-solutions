# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        reversed = None
        
        # reversed look like this: None
        while head:
            temp = ListNode()
            temp.val = head.val
            temp.next = reversed
            head = head.next
            reversed = temp
        
        return reversed