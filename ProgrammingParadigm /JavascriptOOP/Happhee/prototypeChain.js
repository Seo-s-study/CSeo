const happhee = {
  name: "서히",
  hobby: "dance",
  dance: function () {
    console.log("개발하고 춤추는게 조아");
  },
};
const bread = {
  name: "빵수니",
  hobby: "맛잇게 구워지기",
  yummy: function () {
    console.log("소금빵이 너므 조아🍞");
  },
};

happhee.__proto__ = bread;

happhee.yummy(); //소금빵이 너므 조아🍞
happhee.dance(); //개발하고 춤추는게 조아
