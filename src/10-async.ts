// 第 10 幕：向吧台送單要等一下 —— 非同步（Promise / async / await）

interface Order {
  id: number;
  drink: string;
  seconds: number; // 製作需要幾秒
}

// 1. Promise：代表「一件將來才會完成的事」
//    用 setTimeout 模擬吧台製作飲料需要時間
function makeDrink(order: Order): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`#${order.id} ${order.drink} 做好了`);
    }, order.seconds * 1000);
  });
}

// 2. 模擬一個可能失敗的動作：查詢庫存
function checkStock(drink: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (drink === "手沖單品") {
        reject(new Error("手沖豆子用完了"));
      } else {
        resolve(true);
      }
    }, 300);
  });
}

// 3. async / await：把非同步程式寫得像一步一步的同步程式
async function serveOne(order: Order): Promise<void> {
  console.log(`收到訂單 #${order.id}：${order.drink}`);
  try {
    await checkStock(order.drink);
    const result = await makeDrink(order);
    console.log(result);
  } catch (error) {
    // catch 到的 error 型別是 unknown，要先確認它是 Error 才能讀 message
    if (error instanceof Error) {
      console.log(`#${order.id} 失敗：${error.message}`);
    }
  }
}

// 4. Promise.all：好幾杯同時做，全部完成再往下走
async function serveAll(orders: Order[]): Promise<void> {
  console.log("\n--- 多杯同時製作 ---");
  const start = Date.now();
  const results = await Promise.all(orders.map((order) => makeDrink(order)));
  for (const line of results) {
    console.log(line);
  }
  console.log(`全部完成，共花 ${((Date.now() - start) / 1000).toFixed(1)} 秒`);
}

// ---- 實際跑一次 ----
async function main(): Promise<void> {
  await serveOne({ id: 1, drink: "拿鐵", seconds: 1 });
  await serveOne({ id: 2, drink: "手沖單品", seconds: 2 });

  await serveAll([
    { id: 3, drink: "美式", seconds: 1 },
    { id: 4, drink: "卡布奇諾", seconds: 1.5 },
    { id: 5, drink: "拿鐵", seconds: 1 },
  ]);
}

main();
