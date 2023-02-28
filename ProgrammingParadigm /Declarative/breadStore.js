const consumer = {
  name: "seohee",
  age: 24,
  cart: ["앙버터"],
  purchaseBread: [],
};

const addCartToConsumer = (consumer, breadItem) => {
  const newCart = [...consumer.cart, breadItem];
  return Object.assign({}, consumer, { cart: newCart });
};

const addPurchaseBread = (consumer) => {
  const newPurchaseBread = [...consumer.purchaseBread, ...consumer.cart];
  return Object.assign({}, consumer, {
    cart: [],
    purchaseBread: newPurchaseBread,
  });
};

const composeFunction = (f, g) => (consumer, breadItem) =>
  f(g(consumer, breadItem));

const buyBread = composeFunction(addPurchaseBread, addCartToConsumer);

console.log(buyBread(consumer, "소금빵")); // { name: 'seohee', age: 24, cart: [], purchaseBread: [ '앙버터', '소금빵' ] }
