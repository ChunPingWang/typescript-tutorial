// 第 6 幕：這杯做好了嗎？—— 用判別聯合（discriminated union）描述訂單狀態

// 1. 每一種狀態帶的資料都不一樣，但都有一個共同欄位 kind 用來「判別」
type OrderStatus =
  | { kind: "pending" }                          // 等待中：沒有額外資料
  | { kind: "preparing"; barista: string }       // 製作中：誰在做
  | { kind: "done"; finishedAt: Date }           // 完成：什麼時候完成
  | { kind: "cancelled"; reason: string };       // 取消：為什麼取消

interface Order {
  id: number;
  customerName: string;
  status: OrderStatus;
}

// 2. 用 switch 判斷 kind，TypeScript 會在每個 case 裡自動知道有哪些欄位
function describeStatus(status: OrderStatus): string {
  switch (status.kind) {
    case "pending":
      return "等待製作";
    case "preparing":
      return `${status.barista} 正在製作`;      // 只有這個 case 可以用 barista
    case "done":
      return `已完成（${status.finishedAt.toLocaleTimeString("zh-TW")}）`;
    case "cancelled":
      return `已取消：${status.reason}`;
    default: {
      // 3. never：如果未來新增了狀態卻忘了處理，這一行會編譯錯誤提醒你
      const unhandled: never = status;
      return unhandled;
    }
  }
}

// ---- 實際跑一次 ----
const orders: Order[] = [
  { id: 101, customerName: "小美", status: { kind: "pending" } },
  { id: 102, customerName: "阿明", status: { kind: "preparing", barista: "店長" } },
  { id: 103, customerName: "小花", status: { kind: "done", finishedAt: new Date() } },
  { id: 104, customerName: "大雄", status: { kind: "cancelled", reason: "客人趕時間" } },
];

for (const order of orders) {
  console.log(`#${order.id} ${order.customerName}：${describeStatus(order.status)}`);
}
