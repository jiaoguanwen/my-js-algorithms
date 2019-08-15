import LinkedList from '../linked-list/LinkedList';

const defaultHashTableSize = 32;

export default class HashTable {
  private buckets: Array<LinkedList>;
  private keys: any; // TODO object

  constructor(hashTableSize: number = defaultHashTableSize) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());
    this.keys = {};
  }

  private hash(key: string): number {
    const hash = Array.from(key).reduce((hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0), 0);
    return hash % this.buckets.length;
  }

  public set(key: string, value: any) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: (nodeValue: { key: string; value: any }) => nodeValue.key === key });
    if (!node) {
      bucketLinkedList.append({ key, value });
    } else {
      node.value.value = value;
    }
  }

  public delete(key: string): any {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({ callback: (nodeValue: { key: string; value: any }) => (nodeValue.key === key) });
    if (node) {
      return bucketLinkedList.delete(node.value);
    }
    return null;
  }

  public get(key: string): any {
    const bucketLinkedList = this.buckets[this.hash(key)];
    const node = bucketLinkedList.find({ callback: (nodeValue: { key: string; value: any }) => (nodeValue.key === key) });
    return node ? node.value.value : undefined;
  }

  public has(key: string): boolean {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  public getKeys(): Array<string> {
    return Object.keys(this.keys);
  }
}
