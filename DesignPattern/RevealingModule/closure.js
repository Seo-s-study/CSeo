const Hi = (function () {
  let peopleCount = 0;
  let peopleList = [];
  return {
    inPeople(name) {
      peopleList.push(name);
      return ++peopleCount;
    },
    outPeople() {
      peopleList.pop();
      return --peopleCount;
    },
    confirmPeople() {
      return peopleList;
    },
  };
})();

console.log(Hi.peopleCount);
console.log(Hi.inPeople("서히"));
console.log(Hi.inPeople("CS"));
console.log(Hi.confirmPeople());
console.log(Hi.outPeople());
console.log(Hi.confirmPeople());
