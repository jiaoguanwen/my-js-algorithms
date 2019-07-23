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
}
