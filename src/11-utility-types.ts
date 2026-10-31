// 第 11 幕：打烊前的整理 —— 常用工具型別、unknown 與型別斷言

interface MenuItem {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
}

// 1. Partial<T>：所有欄位都變成「可有可無」，適合「局部更新」
type MenuItemUpdate = Partial<MenuItem>;

function updateMenuItem(item: MenuItem, changes: MenuItemUpdate): MenuItem {
  return { ...item, ...changes }; // 用展開運算子合併
}

// 2. Pick<T, K>：只挑幾個欄位，例如給看板用的精簡版
type MenuSummary = Pick<MenuItem, "name" | "price">;

// 3. Omit<T, K>：排除幾個欄位，例如「新增品項時還沒有 id」
type NewMenuItem = Omit<MenuItem, "id">;

// 4. Record<K, V>：鍵固定為某種型別的字典，例如庫存表
const stock: Record<string, number> = {
  美式: 50,
  拿鐵: 30,
  卡布奇諾: 0,
};

// 5. Readonly<T>：整個物件都不能改
const settings: Readonly<{ taxRate: number; currency: string }> = {
  taxRate: 0.05,
  currency: "TWD",
};
// settings.taxRate = 0.1; // 錯誤！

// 6. unknown：來路不明的資料（例如從檔案或網路讀進來的 JSON）
//    不能直接當成 MenuItem 用，要先檢查
function isMenuItem(value: unknown): value is MenuItem {
  if (typeof value !== "object" || value === null) return false;
  const obj = value as Record<string, unknown>;
  return (
    typeof obj.id === "number" &&
    typeof obj.name === "string" &&
    typeof obj.price === "number"
  );
}

function parseMenuItem(json: string): MenuItem | null {
  const data: unknown = JSON.parse(json);
  if (isMenuItem(data)) {
    return data; // 通過檢查後，TypeScript 知道 data 是 MenuItem
  }
  return null;
}

// ---- 實際跑一次 ----
const latte: MenuItem = { id: 2, name: "拿鐵", price: 120 };
const updated = updateMenuItem(latte, { price: 125, description: "新配方" });
console.log("更新後：", updated);

const summary: MenuSummary = { name: updated.name, price: updated.price };
console.log("看板用精簡版：", summary);

const draft: NewMenuItem = { name: "抹茶拿鐵", price: 140 };
const created: MenuItem = { id: 5, ...draft };
console.log("新品項：", created);

for (const [name, qty] of Object.entries(stock)) {
  console.log(`${name} 庫存 ${qty} 杯${qty === 0 ? "（售完）" : ""}`);
}

console.log(`稅率 ${settings.taxRate * 100}%，幣別 ${settings.currency}`);

console.log("解析正常 JSON：", parseMenuItem('{"id":9,"name":"可可","price":100}'));
console.log("解析壞掉的 JSON：", parseMenuItem('{"name":"沒有價格"}'));
