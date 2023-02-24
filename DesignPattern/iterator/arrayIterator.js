const arrIterable = ["지수", "서히", "CS뿌시기", "디자인패턴"];
for (const item of arrIterable) {
  console.log(item); //지수 서히 CS뿌시기 디자인패턴
}

const arrIterator = arrIterable[Symbol.iterator]();

console.log(arrIterator.next()); // { value: '지수', done: false }
console.log(arrIterator.next()); // { value: '서히', done: false }
console.log(arrIterator.next()); // { value: 'CS뿌시기', done: false }
console.log(arrIterator.next()); // { value: '디자인패턴', done: false }
console.log("마지막", arrIterator.next()); // 마지막 { value: undefined, done: true }
