// 第 7 幕：店長想要一台點餐機 —— 類別（class）

interface MenuItem {
  readonly id: number;
  name: string;
  price: number;
}

type Size = "小杯" | "中杯" | "大杯";

interface OrderItem {
  item: MenuItem;
  size: Size;
  quantity: number;
}

interface Order {
  id: number;
  customerName: string;
  lines: OrderItem[];
  total: number;
}

const SIZE_EXTRA: Record<Size, number> = { 小杯: 0, 中杯: 10, 大杯: 20 };

// 1. class：把「資料」和「操作資料的方法」包在一起
class Register {
  // 2. 屬性（欄位）：private 表示只有這個 class 內部能碰
  private orders: Order[] = [];
  private nextId = 1;
  readonly shopName: string;

  // 3. 建構子：new Register("...") 的時候會執行
  constructor(shopName: string) {
    this.shopName = shopName;
  }

  // 4. 方法：public 是預設值，外面可以呼叫
  createOrder(customerName: string, lines: OrderItem[]): Order {
    const total = lines.reduce(
      (sum, line) => sum + (line.item.price + SIZE_EXTRA[line.size]) * line.quantity,
      0,
    );
    const order: Order = { id: this.nextId++, customerName, lines, total };
    this.orders.push(order);
    return order;
  }

  findOrder(id: number): Order | undefined {
    return this.orders.find((order) => order.id === id);
  }

  // 5. getter：像讀屬性一樣讀取計算結果（register.totalRevenue，不用加括號）
  get totalRevenue(): number {
    return this.orders.reduce((sum, order) => sum + order.total, 0);
  }

  get orderCount(): number {
    return this.orders.length;
  }
}

// ---- 實際跑一次 ----
const latte: MenuItem = { id: 2, name: "拿鐵", price: 120 };
const americano: MenuItem = { id: 1, name: "美式", price: 90 };

const register = new Register("小日子咖啡");

const order1 = register.createOrder("小美", [
  { item: latte, size: "大杯", quantity: 2 },
]);
const order2 = register.createOrder("阿明", [
  { item: americano, size: "中杯", quantity: 1 },
  { item: latte, size: "小杯", quantity: 1 },
]);

console.log(`${register.shopName} 今日訂單：`);
console.log(`#${order1.id} ${order1.customerName} 合計 ${order1.total} 元`);
console.log(`#${order2.id} ${order2.customerName} 合計 ${order2.total} 元`);
console.log(`共 ${register.orderCount} 筆，營業額 ${register.totalRevenue} 元`);

const found = register.findOrder(2);
console.log(found ? `找到訂單 #2，客人是 ${found.customerName}` : "找不到訂單 #2");

// 下面這行打開會出錯：orders 是 private，外面不能直接動（見 src-errors/07-private.ts）
// register.orders = [];
