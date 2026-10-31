// 第 9 幕：程式碼變多了，該分檔案了 —— 模組（import / export）
import { menu, findMenuItem, printMenu } from "./menu.ts";
import { formatPrice } from "./pricing.ts";
import { Register, describeStatus } from "./register.ts";
import type { OrderItem } from "./types.ts";

printMenu();

const register = new Register("小日子咖啡");

const latte = findMenuItem("拿鐵");
const americano = findMenuItem("美式");

if (!latte || !americano) {
  throw new Error("菜單資料有問題");
}

const lines: OrderItem[] = [
  { item: latte, size: "大杯", temperature: "少冰", quantity: 2 },
  { item: americano, size: "小杯", temperature: "熱", quantity: 1 },
];

const order = register.createOrder("小美", lines);
console.log(`\n建立訂單 #${order.id}，合計 ${formatPrice(order.total)}，狀態：${describeStatus(order.status)}`);

register.updateStatus(order.id, { kind: "preparing", barista: "店長" });
console.log(`更新後狀態：${describeStatus(order.status)}`);

register.updateStatus(order.id, { kind: "done", finishedAt: new Date() });
console.log(`更新後狀態：${describeStatus(order.status)}`);

console.log(`\n菜單共 ${menu.length} 項，今日營業額 ${formatPrice(register.totalRevenue)}`);
