const menu = [{ name: "拿鐵", price: 120 }];
const found = menu.find((item) => item.name === "美式");
console.log(found.price);
