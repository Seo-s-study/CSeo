const object1 = {};
object1.name = "서히";

const object2 = new Object();
object2.name = "지수";

function ObjectFunction(name) {
  this.name = name;
}
const object3 = new ObjectFunction("CS스터디");
console.log(object3);
