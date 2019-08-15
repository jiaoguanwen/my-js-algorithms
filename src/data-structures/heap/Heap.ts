import Comparator from '../../../utils/comparator/Comparator';

export default class Heap {
  private heapContainer: Array<any>;
  protected compare: Comparator;

  constructor(comparatorFunction?: (a: any, b: any) => number) {
    if (new.target === Heap) {
      throw new TypeError('Cannot construt Heap instance directly');
    }

    this.heapContainer = [];
    this.compare = new Comparator(comparatorFunction);
  }

  private getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  private getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  private hasParent(childIndex: number): boolean {
    return this.getParentIndex(childIndex) >= 0;
  }

  private hasLeftChild(parentIndex: number): boolean {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }

  private hasRightChild(parentIndex: number): boolean {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }

  private leftChild(parentIndex: number): any {
    // if the Heap does not have left child, the heapContainer will return undefined
    return this.heapContainer[this.getLeftChildIndex(parentIndex)];
  }

  private rightChild(parentIndex: number): any {
    return this.heapContainer[this.getRightChildIndex(parentIndex)];
  }

  private parent(childIndex: number): any {
    return this.heapContainer[this.getParentIndex(childIndex)];
  }

  private swap(indexOne: number, indexTwo: number) {
    const tmp = this.heapContainer[indexTwo];
    this.heapContainer[indexTwo] = this.heapContainer[indexOne];
    this.heapContainer[indexOne] = tmp;
  }

  private heapifyUp(customStartIndex?: number) {
    let currentIndex = customStartIndex || this.heapContainer.length - 1;
    while (
      this.hasParent(currentIndex) &&
      !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  private heapifyDown(customStartIndex: number = 0) {
    let currentIndex = customStartIndex;
    let nextIndex = null;
    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex) &&
        this.pairIsInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))
      ) {
        nextIndex = this.getRightChildIndex(currentIndex);
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex);
      }
      if (this.pairIsInCorrectOrder(this.heapContainer[currentIndex], this.heapContainer[nextIndex])) {
        break;
      }
      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
  }

  protected pairIsInCorrectOrder(firstElement: any, secondElement: any): boolean {
    throw new Error(`
      You have to implement heap pair comparision method
      for ${firstElement} and ${secondElement} values.
    `);
  }

  public peek(): any {
    if (this.heapContainer.length === 0) {
      return null;
    }
    return this.heapContainer[0];
  }

  public poll(): any {
    if (this.heapContainer.length === 0) {
      return null;
    }
    if (this.heapContainer.length === 1) {
      return this.heapContainer.pop();
    }
    const item = this.heapContainer[0];
    this.heapContainer[0] = this.heapContainer.pop();
    this.heapifyDown();
    return item;
  }

  public add(item: any): Heap {
    this.heapContainer.push(item);
    this.heapifyUp();
    return this;
  }

  public remove(item: any, comparator: Comparator = this.compare): Heap {
    const numberOfItemsToRemove = this.find(item, comparator).length;
    for (let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {
      const indexToRemove = this.find(item, comparator).pop();
      if (indexToRemove === this.heapContainer.length - 1) {
        this.heapContainer.pop();
      } else {
        this.heapContainer[indexToRemove] = this.heapContainer.pop();
        const parentItem = this.parent(indexToRemove);
        // TODO Need more time to understand here
        if (
          this.hasLeftChild(indexToRemove) &&
          (!parentItem || this.pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove]))
        ) {
          this.heapifyDown(indexToRemove);
        } else {
          this.heapifyUp(indexToRemove);
        }
      }
    }
    return this;
  }

  public find(item: any, comparator: Comparator = this.compare): Array<number> {
    const foundItemIndices = [];
    for (let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex += 1) {
      if (comparator.equal(item, this.heapContainer[itemIndex])) {
        foundItemIndices.push(itemIndex);
      }
    }
    return foundItemIndices;
  }

  public isEmpty(): boolean {
    return !this.heapContainer.length;
  }

  public toString(): string {
    return this.heapContainer.toString();
  }
}
