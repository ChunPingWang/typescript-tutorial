type OrderStatus =
  | { kind: "pending" }
  | { kind: "done" }
  | { kind: "refunded" }; // 新增了狀態，但下面忘了處理

function describeStatus(status: OrderStatus): string {
  switch (status.kind) {
    case "pending":
      return "等待製作";
    case "done":
      return "已完成";
    default: {
      const unhandled: never = status;
      return unhandled;
    }
  }
}
