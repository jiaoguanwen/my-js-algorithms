import DoublyLinkedListNode from "./DoublyLinkedListNode";
import Comparator from "../../utils/comparator/Comparator";

export default class DoublyLinkedList {
  private head: DoublyLinkedListNode | null = null;
  private tail: DoublyLinkedListNode | null = null;
  private compare: Comparator;

  constructor(comparatorFunction?: (a: any, b: any) => number) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  public prepend(value: any): DoublyLinkedList {
    const newNode = new DoublyLinkedListNode(value, this.head, null);
    if (this.head) {
      this.head.previous = newNode;
    }
    this.head = newNode;
    if (!this.tail) {
      // DO NOT POINT tail TO head, IT'S NOT OK
      this.tail = newNode;
    }
    return this;
  }

  public append(value: any): DoublyLinkedList {
    /* const newNode = new DoublyLinkedListNode(value, null, this.tail);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
    return this; */
    const newNode = new DoublyLinkedListNode(value, null, null);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    return this;
  }

  public delete(value: any): DoublyLinkedListNode | null {
    /* if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        if (!currentNode.next && !currentNode.previous) {
          this.head = null;
          this.tail = null;
        } else if (!currentNode.previous) {
          currentNode.next.previous = null;
          this.head = currentNode.next;
        } else if (!currentNode.next) {
          currentNode.previous.next = null;
          this.tail = currentNode.previous;
        } else {
          currentNode.previous.next = currentNode.next;
          currentNode.next.previous = currentNode.previous;
        }
        return currentNode;
      }
      currentNode = currentNode.next;
    } */
    if (!this.head) {
      return null;
    }
    let deletedNode = null;
    let currentNode = this.head;
    while (currentNode) {
      if (this.compare.equal(currentNode.value, value)) {
        deletedNode = currentNode;
        if (deletedNode === this.head) {
          this.head = currentNode.next;
          if (this.head) {
            this.head.previous = null;
          }
          if (deletedNode === this.tail) {
            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          this.tail = currentNode.previous;
          this.tail.next = null;
        } else {
          const previousNode = currentNode.previous;
          const nextNode = currentNode.next;
          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
      }
      currentNode = currentNode.next;
    }
    return deletedNode;
  }

  public find(value: any, callback?: Function): DoublyLinkedListNode | null {
    /* if (!this.head) {
      return null;
    }
    let targetNode = null;
    let currentNode = this.head;
    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        targetNode = currentNode;
      }
      if (this.compare.equal(currentNode.value, value)) {
        targetNode = currentNode;
      }
      currentNode = currentNode.next;
    }
    return targetNode; */
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }
      // when we use typescript, there will be a error when value is undefined
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}
