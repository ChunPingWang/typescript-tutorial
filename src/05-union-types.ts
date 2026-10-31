// 第 5 幕：客人說「大杯、少冰」—— 聯合型別、字面量型別與型別縮小

interface MenuItem {
  readonly id: number;
  name: string;
  price: number;
}

// 1. 字面量型別 + 聯合型別：只能是這幾個值之一
type Size = "小杯" | "中杯" | "大杯";
type Temperature = "熱" | "冰" | "少冰" | "去冰";

// 2. 一筆「點餐明細」：哪個品項、什麼杯型、什麼溫度、幾杯
interface OrderItem {
  item: MenuItem;
  size: Size;
  temperature: Temperature;
  quantity: number;
}

// 3. 用 switch 針對每一種可能處理：杯型加價
function sizeExtra(size: Size): number {
  switch (size) {
    case "小杯":
      return 0;
    case "中杯":
      return 10;
    case "大杯":
      return 20;
  }
}

// 4. 單筆明細的小計
function lineTotal(line: OrderItem): number {
  return (line.item.price + sizeExtra(line.size)) * line.quantity;
}

// 5. 型別縮小（narrowing）：會員編號可能是數字或文字
function describeMember(memberId: string | number): string {
  if (typeof memberId === "string") {
    // 這個區塊裡，TypeScript 知道 memberId 是 string
    return `會員卡號 ${memberId.toUpperCase()}`;
  }
  // 這裡 TypeScript 知道 memberId 是 number
  return `會員編號 ${memberId.toString().padStart(6, "0")}`;
}

// ---- 實際跑一次 ----
const latte: MenuItem = { id: 2, name: "拿鐵", price: 120 };
const americano: MenuItem = { id: 1, name: "美式", price: 90 };

const lines: OrderItem[] = [
  { item: latte, size: "大杯", temperature: "少冰", quantity: 2 },
  { item: americano, size: "小杯", temperature: "熱", quantity: 1 },
];

for (const line of lines) {
  console.log(
    `${line.item.name} ${line.size} ${line.temperature} x${line.quantity} = ${lineTotal(line)} 元`,
  );
}

console.log(describeMember("vip001"));
console.log(describeMember(42));

// 下面這行打開會出錯：「特大杯」不在 Size 的選項裡（見 src-errors/05-wrong-size.ts）
// const wrong: OrderItem = { item: latte, size: "特大杯", temperature: "冰", quantity: 1 };
