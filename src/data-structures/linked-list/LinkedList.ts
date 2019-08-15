import LinkedListNode from "./LinkedListNode";
import Comparator from "../../../utils/comparator/Comparator";

export default class LinkedList {
  public head: LinkedListNode;
  public tail: LinkedListNode;
  private compare: Comparator;

  constructor(comparatorFunction?: (a: any, b: any) => number) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  public prepend(value: any): LinkedList {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  public append(value: any): LinkedList {
    const newNode = new LinkedListNode(value, null);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  public find({ value = undefined, callback = undefined }: { value?: any; callback?: Function }): LinkedListNode {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  public delete(value: any): LinkedListNode {
    if (!this.head) {
      return null;
    }
    let deletedNode = null;
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (this.compare.equal(currentNode.next.value, value)) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
        // cut the link between the deleteNode and its nexts
        deletedNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }
    return deletedNode;
  }

  public deleteTail(): LinkedListNode {
    const deletedTail = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedTail;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;
    return deletedTail;
  }

  public deleteHead(): LinkedListNode {
    if (!this.head) {
      return null;
    }
    const deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedHead;
  }

  public fromArray(values: Array<any>): LinkedList {
    values.forEach(value => this.append(value));
    return this;
  }

  public toArray(): Array<LinkedListNode> {
    const nodes: Array<LinkedListNode> = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  public toString(callback: Function): string {
    return this.toArray()
      .map(node => node.toString(callback))
      .toString();
  }

  public reverse(): LinkedList {
    /* return this.fromArray(
      this.toArray()
        .map(node => node.value)
        .reverse()
    ); */
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;
    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    this.tail = this.head;
    this.head = prevNode;
    return this;
  }
}
