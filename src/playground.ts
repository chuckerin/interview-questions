import { HashTable } from './ds/HashTable';

export function playground(): string {
  const myHashTable = new HashTable(50);
  myHashTable.set('grampes', 1000);

  const hashTable = new HashTable(16);
  // hashTable.testHashFunction();

  hashTable.insert('grapes', 27); // Θ(1)
  hashTable.insert('apples', 6);
  hashTable.insert('tangerines', 12);

  // console.log('apples:', hashTable.get('apples'));
  // console.log('grapes:', hashTable.get('grapes'));

  // console.log('keys->', hashTable.keys());
  // console.log('values->', hashTable.values());

  return '';
}
