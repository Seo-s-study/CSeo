const Bread = function (userInput) {
  let title = userInput ? userInput : "소금빵";

  return {
    getName: function () {
      return title;
    },
    setName: function (userInput) {
      title = userInput;
    },
  };
};
const happheeBread = new Bread("소금빵");

console.log(happheeBread.title); // undefined
console.log(happheeBread.getName()); //  소금빵
