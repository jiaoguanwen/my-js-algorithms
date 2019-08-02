import Comparator from '../../utils/comparator/Comparator';

export default class Heap {
  private heapContainer: Array<any>;
  private compare: Comparator;

  constructor(comparatorFunction: (a: any, b: any) => number) {
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

  private peek(): any {
    if (this.heapContainer.length === 0) {
      return null;
    }
    return this.heapContainer[0];
  }
}
