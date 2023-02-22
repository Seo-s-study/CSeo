const mapIterable = new Map([
  ["지수", "서히"],
  ["서히", "CS뿌시기"],
  ["CS뿌시기", "디자인패턴"],
]);
const mapIterator = mapIterable[Symbol.iterator]();

console.log(
  mapIterable
); /*Map(3) { '지수' => '서히', '서히' => 'CS뿌시기', 'CS뿌시기' => '디자인패턴' } */
console.log(mapIterator);
/*[Map Entries] {
  [ '지수', '서히' ],
  [ '서히', 'CS뿌시기' ],
  [ 'CS뿌시기', '디자인패턴' ]
} */
mapIterator.next();

for (const item of mapIterator) {
  console.log(item); //[ '서히', 'CS뿌시기' ], [ 'CS뿌시기', '디자인패턴' ]
}

console.log(mapIterator.next()); // { value: undefined, done: true }
