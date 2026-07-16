class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        let current = this.head
        let newNode = new Node(data)

        if (!this.head) {
            this.head = newNode;
            return;
        }

        while (current.next) {
            current = current.next
        }

        current.next = newNode;
    }

    print() {
        if (!this.head) {
            return null
        }

        let current = this.head;
        let res = ""

        while (current) {
            res += current.data + '->'
            current = current.next
        }

        console.log(res + 'null')
    }
}

const List1 = new LinkedList();
List1.append(2)
List1.append(4)
List1.append(3)

const List2 = new LinkedList();
List2.append(5)
List2.append(6)
List2.append(4)

const TwoNumsSume = (List1, List2) => {
    let dummy = new Node(0);
    let l1 = List1.head;
    let l2 = List2.head;
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);

        current.next = new Node(sum % 10);

        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummy.next;
}

