import LinkedList from "./data-structures/linked-list/LinkedList";
import LinkedListNode from "./data-structures/linked-list/LinkedListNode";

const ll = new LinkedList();

ll.prepend(1);
ll.prepend(9);
ll.prepend(18);
ll.prepend([1, 2, 3]);

console.log(ll);
