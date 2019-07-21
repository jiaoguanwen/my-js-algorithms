import LinkedListNode from "./LinkedListNode";
import Comparator from "../../utils/comparator/Comparator";

export default class LinkedList {
  private head: LinkedListNode;
  private tail: LinkedListNode;
  private compare: Comparator;

  constructor(comparatorFunction: (a: any, b: any) => number) {
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
}
