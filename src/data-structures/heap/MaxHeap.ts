import Heap from './Heap';

export default class MaxHeap extends Heap {
  protected pairIsInCorrectOrder(firstElement: any, secondElement: any) {
    return this.compare.greaterThanOrEqual(firstElement, secondElement);
  }
}
