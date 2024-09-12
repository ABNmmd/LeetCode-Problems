
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function gcd(a, b) {
    if (b === 0)
        return a
    else
        return gcd(b, (a % b))
}

var insertGreatestCommonDivisors = function (head) {
    if (!head.next) return head;
    let node1 = head;
    let node2 = head.next;
    while (node2) {
        let res = gcd(node1.val, node2.val);
        let gcdNode = new ListNode(res);
        [node1.next, gcdNode.next] = [gcdNode, node2];
        [node1, node2] = [node2, node2.next];
    }
    return head;
};