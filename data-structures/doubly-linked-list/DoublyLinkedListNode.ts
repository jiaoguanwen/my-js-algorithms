export default class DoublyLinkedListNode {
  public value: any;
  public next: DoublyLinkedListNode | null = null;
  public previous: DoublyLinkedListNode | null = null;

  constructor(value: any, next: DoublyLinkedListNode, previous: DoublyLinkedListNode) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  toString(callback: Function): string {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
