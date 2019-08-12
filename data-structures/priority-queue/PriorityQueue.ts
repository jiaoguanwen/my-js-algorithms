import MinHeap from '../heap/MinHeap';
import Comparator from '../../utils/comparator/Comparator';

export default class PriorityQueue extends MinHeap {
  private priorities: Map<any, number>;

  constructor() {
    super();
    this.priorities = new Map();
    this.compare = new Comparator(this.comparePriority.bind(this));
  }

  public add(item: any, priority = 0): PriorityQueue {
    return this;
  }

  public comparePriority(a: any, b: any): number {
    return 0;
  }
}
