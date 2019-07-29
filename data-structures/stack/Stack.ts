import LinkedList from "../linked-list/LinkedList";

// LIFO
export default class Stack {
  private linkedList: LinkedList;

  constructor() {
    this.linkedList = new LinkedList();
  }

  public isEmpty(): boolean {
    return !this.linkedList.head;
  }

  public peek(): any {
    if (this.isEmpty()) {
      return null;
    }
    return this.linkedList.head.value;
  }

  public push(value: any): void {
    this.linkedList.prepend(value);
  }

  public pop(): any {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  public toArray(): Array<any> {
    return this.linkedList.toArray().map(linkedListNode => linkedListNode.value);
  }

  public toString(callback: Function): string {
    return this.linkedList.toString(callback);
  }
}
