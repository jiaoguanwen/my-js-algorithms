/* import LinkedList from './data-structures/linked-list/LinkedList';
import LinkedListNode from './data-structures/linked-list/LinkedListNode';

const ll = new LinkedList();

ll.prepend(1);
ll.prepend(9);
ll.prepend(18);
ll.prepend([1, 2, 3]);
ll.append('jiaoguanwen');

console.log(ll.find({ value: 9 }));
console.log(ll.delete(18));

console.log(ll);
console.log(ll.deleteTail());
console.log(ll);
 */

/* import DoublyLinkedList from "./data-structures/doubly-linked-list/DoublyLinkedList";
import DoublyLinkedListNode from "./data-structures/doubly-linked-list/DoublyLinkedListNode";

const ll = new DoublyLinkedList();

ll.prepend(1);
ll.prepend(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.delete(5);

console.log(ll); */

import HashTable from './src/data-structures/hash-table/HashTable';

const hashTable = new HashTable(3);

hashTable.set('jiao', 'jiao');
hashTable.set('guanwen', 1);
hashTable.set('code', { name: 'javascript' });

console.log(hashTable.get('jiao'));
console.log(hashTable.get('code'));
console.log(hashTable.get('guanwen'));

console.log(hashTable);
