import Heap from './Heap';

export default class MinHeap extends Heap {
  protected pairIsInCorrectOrder(firstElement: any, secondElement: any) {
    return this.compare.lessThanOrEqual(firstElement, secondElement);
  }
}
