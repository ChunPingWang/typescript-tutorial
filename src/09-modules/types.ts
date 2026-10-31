// 共用的型別定義：整個專案都從這裡引用

export interface MenuItem {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
}

export type Size = "小杯" | "中杯" | "大杯";
export type Temperature = "熱" | "冰" | "少冰" | "去冰";

export interface OrderItem {
  item: MenuItem;
  size: Size;
  temperature: Temperature;
  quantity: number;
}

export type OrderStatus =
  | { kind: "pending" }
  | { kind: "preparing"; barista: string }
  | { kind: "done"; finishedAt: Date }
  | { kind: "cancelled"; reason: string };

export interface Order {
  id: number;
  customerName: string;
  lines: OrderItem[];
  total: number;
  status: OrderStatus;
}
