// 第 4 幕：收銀機要會算錢 —— 函式

interface MenuItem {
  readonly id: number;
  name: string;
  price: number;
}

// 1. 最基本的函式：參數要標型別，回傳值也標型別
function calculateTotal(items: MenuItem[]): number {
  let total = 0;
  for (const item of items) {
    total += item.price;
  }
  return total;
}

// 2. 預設參數：不給折扣率就用 9 折
function applyDiscount(total: number, rate: number = 0.9): number {
  return Math.round(total * rate);
}

// 3. 箭頭函式：寫法更短，常用在小工具函式
const formatPrice = (amount: number): string => `NT$ ${amount}`;

// 4. 沒有回傳值的函式：回傳型別是 void
function printReceipt(items: MenuItem[], total: number): void {
  console.log("====== 收據 ======");
  for (const item of items) {
    console.log(`${item.name.padEnd(6, "　")} ${formatPrice(item.price)}`);
  }
  console.log("------------------");
  console.log(`合計 ${formatPrice(total)}`);
}

// 5. 可選參數：用 ? 表示可以不傳
function greet(customerName?: string): string {
  if (customerName) {
    return `${customerName} 您好，歡迎光臨！`;
  }
  return "您好，歡迎光臨！";
}

// ---- 實際跑一次 ----
const order: MenuItem[] = [
  { id: 2, name: "拿鐵", price: 120 },
  { id: 3, name: "卡布奇諾", price: 130 },
  { id: 1, name: "美式", price: 90 },
];

console.log(greet());
console.log(greet("小美"));

const subtotal = calculateTotal(order);
printReceipt(order, subtotal);

console.log(`會員價（9 折）：${formatPrice(applyDiscount(subtotal))}`);
console.log(`員工價（7 折）：${formatPrice(applyDiscount(subtotal, 0.7))}`);
