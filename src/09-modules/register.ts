import type { Order, OrderItem, OrderStatus } from "./types.ts";
import { orderTotal } from "./pricing.ts";

export class Register {
  private orders: Order[] = [];
  private nextId = 1;
  readonly shopName: string;

  constructor(shopName: string) {
    this.shopName = shopName;
  }

  createOrder(customerName: string, lines: OrderItem[]): Order {
    const order: Order = {
      id: this.nextId++,
      customerName,
      lines,
      total: orderTotal(lines),
      status: { kind: "pending" },
    };
    this.orders.push(order);
    return order;
  }

  updateStatus(id: number, status: OrderStatus): void {
    const order = this.orders.find((o) => o.id === id);
    if (!order) {
      throw new Error(`找不到訂單 #${id}`);
    }
    order.status = status;
  }

  get totalRevenue(): number {
    return this.orders
      .filter((order) => order.status.kind !== "cancelled")
      .reduce((sum, order) => sum + order.total, 0);
  }
}

export function describeStatus(status: OrderStatus): string {
  switch (status.kind) {
    case "pending":
      return "等待製作";
    case "preparing":
      return `${status.barista} 正在製作`;
    case "done":
      return `已完成（${status.finishedAt.toLocaleTimeString("zh-TW")}）`;
    case "cancelled":
      return `已取消：${status.reason}`;
    default: {
      const unhandled: never = status;
      return unhandled;
    }
  }
}
