/**
 * @link https://leetcode.com/problems/middle-of-the-linked-list/submissions/
 * @status {easy}
 */
 /**
	 - Example 1:
		- Input: [1,2,3,4,5]
		- Output: Node 3 from this list (Serialization: [3,4,5])
			The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
			Note that we returned a ListNode object ans, such that:
			ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
	- Example 2:

		- Input: [1,2,3,4,5,6]
		- Output: Node 4 from this list (Serialization: [4,5,6])
			Since the list has two middle nodes with values 3 and 4, we return the second one.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let counter = 0;
    let middle = head;
    let middPosition = 0;
    
    while(head.next) {
        if((counter / 2) >= middPosition) {
            middle = middle.next;
            middPosition++;
        }
        
        head = head.next;
        counter++;
    }
    
    return middle;
};