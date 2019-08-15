import Comparator from '../../utils/comparator/Comparator';

export default class Sort {
  protected callbacks: any;
  protected comparator: Comparator;

  constructor(originalCallbacks?: any) {
    this.callbacks = Sort.initSortingCallbacks(originalCallbacks);
    this.comparator = new Comparator(this.callbacks.compareCallback);
  }

  static initSortingCallbacks(originalCallbacks: any) {
    const callbacks = originalCallbacks || {};
    const stubCallback = () => {};

    callbacks.compareCallback = callbacks.compareCallback || undefined;
    callbacks.visitingCallback = callbacks.visitingCallback || stubCallback;

    return callbacks;
  }

  public sort(originalArray: Array<any>): Array<any> {
    throw new Error('sort method must be implemented');
  }
}
