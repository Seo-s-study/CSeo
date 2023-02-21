const CustomIterator = require("./CustomIterator");
const happheeIterator = new CustomIterator();

let number = happheeIterator.next();
while (number) {
  console.log(number);
  number = happheeIterator.next();
}
