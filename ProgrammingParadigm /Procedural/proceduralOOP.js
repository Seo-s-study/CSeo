let baseKnowledge = 0;
let studyOverTime = 10;
let rate = 20;

function getKnowledge(baseKnowledge, studyOverTime, rate) {
  return baseKnowledge + (studyOverTime * rate);
}
console.log('PROCEDURAL => ' + getKnowledge(baseKnowledge, studyOverTime, rate)); // getWage함수를 호출 할 때, 호출주체를 명시하지 않았다면 함수로서 호출한 것이다.

// 객체지향적 프로그래밍
let student = {
    baseKnowledge: 0,
    studyOverTime: 10,
    rate: 20,
  getKnowledge: function() {
    return this.baseKnowledge + (this.studyOverTime * this.rate);
  }
};
console.log('OOP => ' + student.getKnowledge()); // getWage함수를 호출 할 때, 호출주체를 명시하였다면, 메소드로서 호출한 것이다.