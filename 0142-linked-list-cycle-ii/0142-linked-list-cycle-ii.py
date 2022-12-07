# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        
        dummy = head
        nodeArray = []
        
        while dummy:
            if dummy in nodeArray:
                return dummy
            nodeArray.append(dummy)
            dummy = dummy.next
        
        