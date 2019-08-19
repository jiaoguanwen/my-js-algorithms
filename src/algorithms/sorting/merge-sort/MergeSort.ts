import Sort from '../Sort';

export default class MergeSort extends Sort {
  public sort(originArray: any): Array<any> {
    this.callbacks.visitingCallback(null);
    if (originArray.length <= 1) {
      return originArray;
    }
    const middleIndex = Math.floor(originArray.length / 2);
    const leftArray = originArray.slice(0, middleIndex);
    const rightArray = originArray.slice(middleIndex, originArray.length);
    const leftSortedArray = this.sort(leftArray);
    const rightSortedArray = this.sort(rightArray);
    return this.mergeSortedArrays(leftSortedArray, rightSortedArray);
  }

  private mergeSortedArrays(leftArray: any, rightArray: any): Array<any> {
    let sortedArray = [];
    while (leftArray.length && rightArray.length) {
      let minimumElement = null;
      if (this.comparator.lessThan(leftArray[0], rightArray[0])) {
        minimumElement = leftArray.shift();
      } else {
        minimumElement = rightArray.shift();
      }
      this.callbacks.visitingCallback(minimumElement);
      sortedArray.push(minimumElement);
    }
    if (leftArray.length) {
      sortedArray = sortedArray.concat(leftArray);
    }
    if (rightArray.length) {
      sortedArray = sortedArray.concat(rightArray);
    }
    return sortedArray;
  }
}
