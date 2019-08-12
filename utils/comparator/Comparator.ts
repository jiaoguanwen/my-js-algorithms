export default class Comparator {
  private compare: (a: any, b: any) => number;

  constructor(compareFunction: (a: any, b: any) => number = Comparator.defaultCompareFunction) {
    this.compare = compareFunction;
  }

  static defaultCompareFunction(a: string | number, b: string | number): number {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }

  public equal(a: any, b: any): boolean {
    return this.compare(a, b) === 0;
  }

  public lessThan(a: any, b: any): boolean {
    return this.compare(a, b) < 0;
  }

  public greaterThan(a: any, b: any): boolean {
    return this.compare(a, b) > 0;
  }

  public lessThanOrEqual(a: any, b: any): boolean {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  public greaterThanOrEqual(a: any, b: any): boolean {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  public reverse() {
    const compareOriginal = this.compare;
    this.compare = (a, b) => compareOriginal(b, a);
  }
}
