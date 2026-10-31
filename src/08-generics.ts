// 第 8 幕：不只咖啡，蛋糕也要能排隊 —— 泛型（generics）

// 1. 先看一個「只能排咖啡訂單」的隊伍
interface CoffeeOrder {
  id: number;
  drink: string;
}

class CoffeeQueue {
  private items: CoffeeOrder[] = [];
  enqueue(item: CoffeeOrder): void {
    this.items.push(item);
  }
  dequeue(): CoffeeOrder | undefined {
    return this.items.shift();
  }
}

// 問題：蛋糕訂單也要排隊，難道要再複製一份 CakeQueue？

// 2. 泛型：用 <T> 當「型別的參數」，建立時再決定 T 是什麼
class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  peek(): T | undefined {
    return this.items[0];
  }

  get length(): number {
    return this.items.length;
  }
}

interface CakeOrder {
  id: number;
  cake: string;
  candles: number;
}

// 3. 同一個 Queue，分別裝不同東西，型別都安全
const coffeeQueue = new Queue<CoffeeOrder>();
coffeeQueue.enqueue({ id: 1, drink: "拿鐵" });
coffeeQueue.enqueue({ id: 2, drink: "美式" });

const cakeQueue = new Queue<CakeOrder>();
cakeQueue.enqueue({ id: 1, cake: "巧克力蛋糕", candles: 3 });

// coffeeQueue.enqueue({ id: 3, cake: "起司蛋糕", candles: 0 }); // 錯誤！這是蛋糕，不是咖啡

const nextCoffee = coffeeQueue.dequeue();
if (nextCoffee) {
  // TypeScript 知道 nextCoffee 是 CoffeeOrder，所以可以安心用 .drink
  console.log(`下一杯要做：${nextCoffee.drink}`);
}
console.log(`咖啡隊伍還剩 ${coffeeQueue.length} 杯，蛋糕隊伍還剩 ${cakeQueue.length} 個`);

// 4. 泛型函式：取出陣列第一個元素，不管陣列裡裝什麼
function firstOf<T>(list: T[]): T | undefined {
  return list[0];
}

const firstName = firstOf(["小美", "阿明"]);   // T 自動推論成 string
const firstPrice = firstOf([120, 90, 130]);      // T 自動推論成 number
console.log(`第一位客人：${firstName}，第一個價格：${firstPrice}`);

// 5. 泛型限制（constraint）：T 至少要有 price 欄位
function cheapest<T extends { price: number }>(items: T[]): T | undefined {
  let best: T | undefined;
  for (const item of items) {
    if (!best || item.price < best.price) {
      best = item;
    }
  }
  return best;
}

const cheapestDrink = cheapest([
  { name: "拿鐵", price: 120 },
  { name: "美式", price: 90 },
]);
console.log(`最便宜的是：${cheapestDrink?.name}`);

// 原本的 CoffeeQueue 可以功成身退了
void CoffeeQueue;
