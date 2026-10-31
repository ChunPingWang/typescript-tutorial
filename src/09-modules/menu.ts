import type { MenuItem } from "./types.ts";

export const menu: MenuItem[] = [
  { id: 1, name: "美式", price: 90 },
  { id: 2, name: "拿鐵", price: 120, description: "濃縮咖啡加上綿密牛奶" },
  { id: 3, name: "卡布奇諾", price: 130, description: "奶泡多一點" },
  { id: 4, name: "手沖單品", price: 150 },
];

export function findMenuItem(name: string): MenuItem | undefined {
  return menu.find((item) => item.name === name);
}

export function printMenu(): void {
  console.log("====== 菜單 ======");
  for (const item of menu) {
    console.log(`[${item.id}] ${item.name} ${item.price} 元`);
  }
}
