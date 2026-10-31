// 第 3 幕：一張完整的菜單 —— 陣列、物件與介面（interface）

// 1. 陣列：同一種東西放一排
const drinkNames: string[] = ["美式", "拿鐵", "卡布奇諾"];
const prices: number[] = [90, 120, 130];

console.log(`第一個品項是 ${drinkNames[0]}，價格 ${prices[0]} 元`);
console.log(`菜單上共有 ${drinkNames.length} 種飲料`);

// 2. 介面（interface）：描述「一個菜單品項長什麼樣」
interface MenuItem {
  readonly id: number;   // readonly：建立後不能改
  name: string;
  price: number;
  description?: string;  // ?：這個欄位可有可無
}

// 3. 物件：照著介面的規格填資料
const latte: MenuItem = {
  id: 2,
  name: "拿鐵",
  price: 120,
  description: "濃縮咖啡加上綿密牛奶",
};

const americano: MenuItem = {
  id: 1,
  name: "美式",
  price: 90,
  // description 可以不填
};

// 4. 介面 + 陣列：整張菜單
const menu: MenuItem[] = [
  americano,
  latte,
  { id: 3, name: "卡布奇諾", price: 130, description: "奶泡多一點" },
  { id: 4, name: "手沖單品", price: 150 },
];

// 5. 走訪陣列：把菜單印出來
for (const item of menu) {
  // 用 ?? 給「沒填」的欄位一個預設文字
  console.log(`[${item.id}] ${item.name} — ${item.price} 元（${item.description ?? "無說明"}）`);
}

// 6. type 別名：另一種描述形狀的方式，功能與 interface 大致相同
type Category = {
  name: string;
  items: MenuItem[];
};

const coffeeCategory: Category = { name: "咖啡", items: menu };
console.log(`「${coffeeCategory.name}」分類共有 ${coffeeCategory.items.length} 個品項`);
