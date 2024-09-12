/**
 * Definition for singly-linked list.
 */
struct ListNode
{
    int val;
    struct ListNode *next;
};

int mcd(int a, int b)
{
    if (a % b == 0)
    {
        return b;
    }
    else
    {
        return mcd(b, a % b);
    }
}

struct ListNode *insertGreatestCommonDivisors(struct ListNode *head)
{
    // if (!head)
    //     return NULL;
    if (!head->next)
        return head;
    struct ListNode *node1 = head;
    struct ListNode *node2 = head->next;
    while (node2)
    {
        int res = mcd(node1->val, node2->val);
        struct ListNode *newNode =
            (struct ListNode *)malloc(sizeof(struct ListNode));
        newNode->val = res;
        node1->next = newNode;
        newNode->next = node2;
        node1 = node2;
        node2 = node2->next;
    }
    return head;
}