# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        number_of_nodes = 0
        dummy = head
        
        while dummy:
            dummy = dummy.next
            number_of_nodes += 1
        
        dummy = head
        i = 0
        while i < (number_of_nodes // 2):
            i += 1
            dummy = dummy.next
        
        return dummy