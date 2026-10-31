import type { OrderItem, Size } from "./types.ts";

const SIZE_EXTRA: Record<Size, number> = { 小杯: 0, 中杯: 10, 大杯: 20 };

export function lineTotal(line: OrderItem): number {
  return (line.item.price + SIZE_EXTRA[line.size]) * line.quantity;
}

export function orderTotal(lines: OrderItem[]): number {
  return lines.reduce((sum, line) => sum + lineTotal(line), 0);
}

export const formatPrice = (amount: number): string => `NT$ ${amount}`;
