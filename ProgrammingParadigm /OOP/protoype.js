function Bread(title, quantity, isLike) {
  this.title = title;
  this.quantity = quantity;
  this.isLike = isLike;
}

const happheeBread = new Bread("소금빵", 2, true);

console.log(happheeBread.hasOwnProperty("title")); //true

Bread.prototype.getBreadTitle = function () {
  return this.title;
};
Bread.prototype.setBreadTitle = function (title) {
  this.title = title;
};

happheeBread.setBreadTitle("스코니");
console.log(happheeBread); // Bread { title: '스코니', quantity: 2, isLike: true }
