import LinkedList from "../linked-list/LinkedList";

export default class Queue {
  private linkedList: LinkedList;

  constructor() {
    this.linkedList = new LinkedList();
  }

  public isEmpty(): boolean {
    return !this.linkedList.head;
  }

  public peek(): any {
    /* if (this.isEmpty()) {
      return null;
    } */
    if (!this.linkedList.head) {
      return null;
    }
    return this.linkedList.head.value;
  }

  public enqueue(value: any): void {
    this.linkedList.append(value);
  }

  public dequeue(): any {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  public toString(callback: Function): string {
    return this.linkedList.toString(callback);
  }
}
