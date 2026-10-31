interface MenuItem {
  readonly id: number;
  name: string;
  price: number;
}
const latte: MenuItem = { id: 2, name: "拿鐵" };
latte.id = 99;
