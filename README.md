# TypeScript 入門教學：從零開始打造「小日子咖啡」點餐系統

> 這是一份為**完全沒有程式基礎**的人設計的 TypeScript 教學。
> 整份文件用同一個故事串起來：你接下了一間咖啡店的點餐系統開發工作，
> 隨著店長每天提出新需求，你會一步一步學會 TypeScript 的核心觀念。
>
> 每一幕的範例程式都放在本儲存庫的 `src/` 資料夾，可以直接執行。
> 故意寫錯、用來示範錯誤訊息的範例放在 `src-errors/`。

---

## 目錄

- [序幕：這份教學怎麼讀](#序幕這份教學怎麼讀)
- [第 0 幕：TypeScript 是什麼？為什麼要學？](#第-0-幕typescript-是什麼為什麼要學)
- [第 1 幕：開店前的準備 —— 環境設定與專案建立](#第-1-幕開店前的準備--環境設定與專案建立)
- [第 2 幕：菜單上的第一杯咖啡 —— 變數與基本型別](#第-2-幕菜單上的第一杯咖啡--變數與基本型別)
- [第 3 幕：一張完整的菜單 —— 陣列、物件與介面](#第-3-幕一張完整的菜單--陣列物件與介面)

---

## 序幕：這份教學怎麼讀

### 故事背景

「小日子咖啡」是一間剛開幕的小店。店長阿德原本用紙筆記錄點餐，
但客人越來越多，他決定請你幫忙寫一套**點餐系統**。

你沒寫過程式，但沒關係。這份教學會從「怎麼在電腦上安裝工具」開始，
陪你把這套系統一步一步做出來。登場人物有：

| 人物 | 角色 |
|------|------|
| **你** | 剛接下任務的新手開發者 |
| **阿德** | 店長，每一幕都會提出新需求 |
| **小美** | 工讀生，負責點餐，常常是第一個測試系統的人 |

### 每一幕的結構

每一幕都會按照同樣的節奏進行：

1. **店長的需求**：用生活化的情境說明這一幕要解決什麼問題。
2. **新概念**：用白話解釋這一幕要學的 TypeScript 觀念。
3. **動手寫**：完整、可以直接執行的程式碼，附上逐行註解。
4. **執行結果**：你應該在畫面上看到的東西。
5. **故意寫錯看看**：讓 TypeScript 報錯給你看，學會讀錯誤訊息。
6. **小練習**：動手改一改，鞏固觀念。

### 給你的建議

- **一定要自己打一遍程式碼。** 複製貼上學不到肌肉記憶。
- **看到錯誤不要慌。** TypeScript 的錯誤訊息是在幫你，不是在罵你。附錄 A 有對照表。
- **按順序讀。** 每一幕都建立在前一幕之上，跳著讀會看不懂。
- 整份教學大約需要 **6 到 10 小時**，建議分成幾天完成。

---

## 第 0 幕：TypeScript 是什麼？為什麼要學？

### 先從 JavaScript 說起

網頁上會動的東西（按鈕按下去跳出視窗、表單送出、購物車加總）
幾乎都是用 **JavaScript** 寫的。它是全世界最多人使用的程式語言之一，
瀏覽器看得懂，透過 **Node.js** 這個工具，電腦上也能直接執行。

JavaScript 很自由，但自由有代價。看看這段 JavaScript：

```js
let price = 120;
price = "一百二";      // JavaScript 不會阻止你
console.log(price * 2); // 結果是 NaN（不是數字），程式不會報錯，只是算出垃圾
```

變數 `price` 原本是數字，中途被塞了一段文字，JavaScript 完全不吭聲，
直到有一天收銀機算出「NaN 元」，你才發現出了問題。
系統越大，這種「跑了才知道錯」的狀況越可怕。

### TypeScript：幫 JavaScript 貼上標籤

**TypeScript** 是微軟在 JavaScript 之上加了「**型別**」的語言。
你可以把型別想成**貼在變數上的標籤**：

```ts
let price: number = 120;   // 標籤：這是數字
price = "一百二";           // TypeScript 立刻告訴你：文字不能放進數字變數
```

這個錯誤在你**寫程式的當下**就會被抓出來（編輯器會畫紅線），
而不是等到營業時間收銀機當掉。

用咖啡店比喻：

| | JavaScript | TypeScript |
|---|---|---|
| 像什麼 | 手寫的便條紙，想寫什麼都行 | 有固定欄位的點餐單：品項、杯型、數量 |
| 寫錯怎麼辦 | 送到吧台才發現看不懂 | 填單時就被提醒「杯型欄不能填『超級大』」 |

### 重點：TypeScript 最後還是會變成 JavaScript

電腦其實看不懂 TypeScript。流程是這樣：

```
你寫的 .ts 檔案  ──（tsc 編譯器檢查型別、拿掉標籤）──▶  .js 檔案  ──（Node.js 或瀏覽器）──▶  執行
```

- **tsc**（TypeScript Compiler）負責檢查型別，然後把 `.ts` 轉成 `.js`。
- 轉出來的 `.js` 就是普通 JavaScript，任何地方都能跑。

所以 TypeScript 不是「另一個語言」，而是「**JavaScript 加上安全檢查**」。
你學會 TypeScript，等於同時學會 JavaScript。

### 這份教學會用到的工具

| 工具 | 用途 | 比喻 |
|------|------|------|
| **Node.js** | 在電腦上執行 JavaScript | 咖啡機：沒有它什麼都煮不出來 |
| **npm** | 隨 Node.js 附贈，用來安裝套件 | 進貨管道：咖啡豆、牛奶都從這裡來 |
| **VS Code** | 寫程式用的編輯器 | 你的工作檯 |
| **typescript** | 編譯器 `tsc`，檢查與轉換程式碼 | 品管員 |
| **tsx** | 直接執行 `.ts` 檔，不用先手動編譯 | 試喝杯：快速嚐一口看看味道對不對 |

下一幕就來安裝它們。

---

## 第 1 幕：開店前的準備 —— 環境設定與專案建立

> **店長的需求**：「系統還沒開始寫，但你先把工具準備好，
> 我想在你的電腦上看到『歡迎光臨 小日子咖啡』這行字。」

這一幕沒有新觀念，只有安裝與設定。請耐心一步一步做，
環境弄好之後，後面每一幕都會順暢很多。

### 1.1 安裝 Node.js

1. 打開瀏覽器，前往 <https://nodejs.org/>。
2. 下載標示 **LTS**（長期支援版）的版本。本教學以 **Node.js 22 以上**為準。
3. 執行安裝程式，全部按「下一步」用預設值即可。

**macOS 使用者**也可以用 Homebrew 安裝（如果你已經有 Homebrew）：

```bash
brew install node
```

### 1.2 認識終端機

接下來很多指令要在「終端機」裡輸入。終端機是一個用**文字**指揮電腦的視窗。

- **Windows**：按 `Win` 鍵，輸入 `PowerShell`，按 Enter。
- **macOS**：按 `Cmd + 空白鍵`，輸入 `Terminal`，按 Enter。

打開後你會看到一個閃爍的游標，這就是輸入指令的地方。
輸入指令後按 **Enter** 才會執行。

### 1.3 確認 Node.js 裝好了

在終端機輸入以下兩行（一次一行，每行按 Enter）：

```bash
node --version
npm --version
```

如果看到類似這樣的輸出，就代表成功了（數字不必完全一樣）：

```
v22.23.4
10.9.9
```

> **如果出現「找不到指令」或 "command not found"**：
> 請關掉終端機重新打開一次。還是不行的話，請重新執行一次 Node.js 安裝程式。

### 1.4 安裝 VS Code

1. 前往 <https://code.visualstudio.com/> 下載並安裝。
2. 打開 VS Code。它內建完整的 TypeScript 支援，不需要額外安裝就能用。
3. （建議）點左側的「擴充功能」圖示（四個方塊），安裝以下兩個擴充：
   - **Chinese (Traditional) Language Pack**：把介面變成繁體中文。
   - **Error Lens**：把錯誤訊息直接顯示在程式碼旁邊，新手很受用。

### 1.5 建立專案資料夾

每個程式專案都住在自己的資料夾裡。在終端機輸入：

```bash
mkdir my-cafe
cd my-cafe
```

- `mkdir`（make directory）：建立一個叫 `my-cafe` 的資料夾。
- `cd`（change directory）：進入那個資料夾。

接著初始化專案：

```bash
npm init -y
```

這會產生一個 `package.json` 檔案。它是專案的「身分證」，
記錄專案名稱、用了哪些套件、有哪些常用指令。`-y` 代表所有問題都用預設答案。

### 1.6 安裝 TypeScript 相關套件

在 `my-cafe` 資料夾裡輸入：

```bash
npm install --save-dev typescript tsx @types/node
```

這一行安裝了三樣東西：

| 套件 | 用途 |
|------|------|
| `typescript` | TypeScript 編譯器，提供 `tsc` 指令 |
| `tsx` | 讓你直接執行 `.ts` 檔，省去每次手動編譯 |
| `@types/node` | 告訴 TypeScript「Node.js 提供了哪些功能」，例如 `setTimeout` |

`--save-dev` 代表這些是**開發時**用的工具，不是程式本身的一部分。

安裝完成後，資料夾裡會多出 `node_modules/`（套件實際存放處，很大，不用管它）
和 `package-lock.json`（鎖定套件版本，也不用管它）。

確認安裝成功：

```bash
npx tsc --version
```

應該看到 `Version 7.x.x` 或 `5.x.x` 之類的字樣。
（`npx` 的意思是「執行專案裡安裝的工具」。）

### 1.7 建立 tsconfig.json：告訴編譯器你的規則

在 `my-cafe` 資料夾裡新增一個檔案叫 `tsconfig.json`
（在 VS Code 裡：檔案 → 開啟資料夾 → 選 `my-cafe`，然後在左側檔案列表按右鍵 → 新增檔案），內容如下：

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "rewriteRelativeImportExtensions": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

每一行的意思：

| 設定 | 意思 |
|------|------|
| `target: "ES2022"` | 編譯出來的 JavaScript 要符合哪個年份的規格。2022 夠新也夠相容。 |
| `module: "NodeNext"` | 用 Node.js 最新的模組規則（第 9 幕會談到「模組」）。 |
| `rootDir: "src"` | 你的原始碼放在 `src/` 資料夾。 |
| `outDir: "dist"` | 編譯出來的 `.js` 放到 `dist/` 資料夾，跟原始碼分開。 |
| `strict: true` | **開啟最嚴格的檢查。** 新手一定要開，才能享受到 TypeScript 的保護。 |
| `rewriteRelativeImportExtensions: true` | 讓你在程式裡可以寫 `import "./menu.ts"`，編譯時自動改成 `.js`。需要 TypeScript 5.7 以上。 |
| `skipLibCheck: true` | 不檢查套件本身的型別檔，加快速度。 |
| `include: ["src"]` | 只編譯 `src/` 裡的檔案。 |

### 1.8 設定 package.json 的常用指令

打開 `package.json`，找到 `"scripts"` 區塊，改成這樣，並加上 `"type": "module"`：

```json
{
  "name": "my-cafe",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "tsx",
    "check": "tsc --noEmit",
    "build": "tsc"
  },
  "devDependencies": {
    "@types/node": "^24.0.0",
    "tsx": "^4.0.0",
    "typescript": "^7.0.0"
  }
}
```

（`devDependencies` 裡的版本號會是你實際安裝到的版本，不必手動改。）

以後你會常用這三個指令：

| 指令 | 作用 |
|------|------|
| `npm run dev src/某檔案.ts` | 直接執行某個 `.ts` 檔，看結果 |
| `npm run check` | 只檢查型別，不產生檔案。寫完一段就跑一次 |
| `npm run build` | 正式編譯，把 `.js` 輸出到 `dist/` |

`"type": "module"` 告訴 Node.js 這個專案使用現代的模組語法。

### 1.9 第一支程式：歡迎光臨

建立資料夾 `src`，在裡面新增檔案 `01-hello.ts`：

```ts
// 第 1 幕：開店第一天 —— 你的第一支 TypeScript 程式
const shopName: string = "小日子咖啡";

console.log(`歡迎光臨 ${shopName}！`);
console.log("今天也要加油喔。");
```

先不用完全看懂，下一幕會解釋。簡單來說：

- `//` 開頭的是**註解**，寫給人看的，電腦會忽略。
- `const shopName: string = "小日子咖啡";` 建立一個叫 `shopName` 的變數，標籤是「文字」，內容是店名。
- `console.log(...)` 把括號裡的東西印在終端機上。
- 每一行結尾的 `;` 像句號，代表這句話結束。

在終端機執行：

```bash
npm run dev src/01-hello.ts
```

你應該會看到：

```
歡迎光臨 小日子咖啡！
今天也要加油喔。
```

**恭喜，你的第一支 TypeScript 程式跑起來了！**

### 1.10 你的專案現在長這樣

```
my-cafe/
├── node_modules/        ← 套件存放處（不用管）
├── src/
│   └── 01-hello.ts      ← 你的程式
├── package.json         ← 專案身分證
├── package-lock.json    ← 套件版本鎖（不用管）
└── tsconfig.json        ← 編譯器設定
```

### 1.11 如果你是直接下載本儲存庫

本儲存庫已經設定好一切，只要：

```bash
git clone <本儲存庫網址>
cd typescript-tutorial
npm install
npm run dev src/01-hello.ts
```

### 1.12 常見問題

| 狀況 | 解法 |
|------|------|
| `npm` 指令找不到 | Node.js 沒裝好或終端機沒重開。重開終端機；還是不行就重裝 Node.js。 |
| Windows 的 PowerShell 說「因為這個系統上已停用指令碼執行」 | 以系統管理員身分開 PowerShell，執行 `Set-ExecutionPolicy RemoteSigned`，輸入 `Y`。 |
| `npm install` 很慢或失敗 | 檢查網路。公司網路可能有代理伺服器，請詢問 IT。 |
| VS Code 裡沒有紅線提示 | 確認是用「開啟資料夾」打開 `my-cafe`，而不是只開單一檔案。 |
| 執行時出現 `Cannot find module` | 檔案路徑打錯了。確認檔案真的在 `src/` 裡，名稱完全一致。 |

---

## 第 2 幕：菜單上的第一杯咖啡 —— 變數與基本型別

> **店長的需求**：「先把店名、拿鐵的價格、現在有沒有營業這幾件事記下來，
> 然後印出一句『小日子咖啡 現在營業中』。」

### 新概念：變數就是貼了標籤的盒子

程式要記住東西，就要用**變數**。你可以把變數想成一個盒子：
盒子上寫著名字（變數名稱），裡面裝著內容（值）。
TypeScript 還會在盒子上貼一張**型別標籤**，規定這個盒子只能裝哪一種東西。

最常用的三種型別：

| 型別 | 裝什麼 | 範例 |
|------|--------|------|
| `string` | 文字（要用引號包起來） | `"拿鐵"`、`'小日子咖啡'` |
| `number` | 數字（整數、小數都算） | `120`、`0.9`、`-5` |
| `boolean` | 是或否，只有兩個值 | `true`、`false` |

宣告變數的語法：

```
let 變數名稱: 型別 = 初始值;
```

### 兩種宣告方式：let 與 const

- `let`：之後**可以**換內容（價格會調整）。
- `const`：之後**不能**換內容（店名不會改）。

**原則：能用 `const` 就用 `const`**，只有真的需要改值時才用 `let`。
這樣程式讀起來更安心：看到 `const` 就知道它不會變。

### 型別推論：TypeScript 很聰明

如果你給了初始值，可以不寫型別，TypeScript 會自己猜（這叫**型別推論**）：

```ts
let espressoPrice = 80;  // TypeScript 自己知道這是 number
```

猜出來的結果和你手寫的一樣嚴格。所以實務上大多數變數都不必手寫型別，
需要寫的地方主要是函式的參數（第 4 幕）。

### 動手寫：`src/02-basic-types.ts`

```ts
// 第 2 幕：菜單上的第一杯咖啡 —— 變數與基本型別

// 1. 三種最常用的型別：文字、數字、是否
let shopName: string = "小日子咖啡";
let lattePrice: number = 120;
let isOpen: boolean = true;

// 2. 型別推論：不寫型別，TypeScript 也猜得到
let espressoPrice = 80; // 推論為 number
const slogan = "一杯咖啡，一段好時光"; // 推論為 string

// 3. 變數可以改值，但不能改型別
lattePrice = 130; // OK，還是數字
// lattePrice = "一百三"; // 錯誤！不能把文字塞進數字變數（見 src-errors/02-wrong-type.ts）

// 4. const 宣告後不能重新指定
// slogan = "另一句話"; // 錯誤！const 不能重新指定

// 5. 樣板字串：用反引號 ` 把變數塞進文字裡
console.log(`${shopName} 現在${isOpen ? "營業中" : "休息中"}`);
console.log(`拿鐵一杯 ${lattePrice} 元，濃縮一杯 ${espressoPrice} 元`);
console.log(slogan);
```

幾個補充：

- **樣板字串**：用反引號 `` ` `` 包起來的文字，裡面可以用 `${變數}` 把變數塞進去。
  反引號在鍵盤左上角，數字 1 的左邊。
- `isOpen ? "營業中" : "休息中"` 叫**三元運算子**，意思是「如果 isOpen 是 true 就用前者，否則用後者」。

### 執行結果

```bash
npm run dev src/02-basic-types.ts
```

```
小日子咖啡 現在營業中
拿鐵一杯 130 元，濃縮一杯 80 元
一杯咖啡，一段好時光
```

### 故意寫錯看看

把 `// lattePrice = "一百三";` 前面的 `//` 拿掉，存檔。
VS Code 會立刻在那一行畫紅線。執行 `npm run check`，會看到：

```
error TS2322: Type 'string' is not assignable to type 'number'.
```

翻譯：「`string`（文字）型別不能指定給 `number`（數字）型別。」
這就是 TypeScript 在保護你。改回去之後紅線就會消失。

### 小練習

1. 新增一個變數 `tableCount`，記錄店裡有幾張桌子，印出「本店共有 N 張桌子」。
2. 把 `isOpen` 改成 `false`，看看輸出怎麼變。
3. 試著宣告 `const todaySpecial = "拿鐵";` 然後在下一行改它的值，看看 TypeScript 說什麼。

---

## 第 3 幕：一張完整的菜單 —— 陣列、物件與介面

> **店長的需求**：「菜單上有美式、拿鐵、卡布奇諾、手沖單品，每一項有編號、名稱、價格，
> 有的還有一段說明。我要能一次把整張菜單印出來。」

### 新概念 1：陣列 —— 把同一種東西排成一列

一間店不會只賣一種飲料。要記錄「一堆」東西，用**陣列**：

```ts
const drinkNames: string[] = ["美式", "拿鐵", "卡布奇諾"];
```

- `string[]` 讀作「字串陣列」，意思是「一排字串」。
- 陣列裡的東西從 **0** 開始編號：`drinkNames[0]` 是「美式」，`drinkNames[1]` 是「拿鐵」。
- `drinkNames.length` 告訴你裡面有幾個。

### 新概念 2：物件 —— 把相關資料包成一組

一個品項有名稱、價格、說明，這些資料應該綁在一起，而不是散落在三個變數裡。
**物件**就是「一組用名字區分的資料」：

```ts
const latte = {
  name: "拿鐵",
  price: 120,
};
```

用 `latte.name` 取得名稱，`latte.price` 取得價格。
大括號裡每一組 `名字: 值` 叫做**屬性**。

### 新概念 3：介面（interface）—— 幫物件定規格

如果菜單上有十幾個品項，你怎麼保證每一個都有 `name` 和 `price`，
而且沒有人把 `price` 打成 `pirce`？
答案是先用 **interface** 定義「一個菜單品項該長什麼樣」：

```ts
interface MenuItem {
  readonly id: number;   // readonly：建立後不能改
  name: string;
  price: number;
  description?: string;  // ?：這個欄位可有可無
}
```

這就像點餐單的印刷範本：欄位固定，每一張單子照著填。

- `readonly`：這個欄位填了就不能改。品項編號不該被改掉。
- `?`：**可選屬性**。不是每種飲料都有說明文字。

之後宣告變數時標上 `: MenuItem`，TypeScript 就會檢查你有沒有填對、填齊。

### 動手寫：`src/03-menu.ts`

```ts
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
```

補充說明：

- `for (const item of menu) { ... }` 是**迴圈**：把 `menu` 裡的每一個品項輪流放進 `item`，
  執行一次大括號裡的程式。
- `item.description ?? "無說明"`：`??` 讀作「如果左邊沒有值，就用右邊」。
  因為 `description` 是可選的，可能沒填，這樣可以避免印出 `undefined`。
- `type` 與 `interface` 都能描述物件的形狀。初學階段把它們當成一樣的即可，
  習慣上描述物件用 `interface`，描述其他東西（第 5 幕的聯合型別）用 `type`。

### 執行結果

```
第一個品項是 美式，價格 90 元
菜單上共有 3 種飲料
[1] 美式 — 90 元（無說明）
[2] 拿鐵 — 120 元（濃縮咖啡加上綿密牛奶）
[3] 卡布奇諾 — 130 元（奶泡多一點）
[4] 手沖單品 — 150 元（無說明）
「咖啡」分類共有 4 個品項
```

### 故意寫錯看看

`src-errors/03-missing-field.ts` 裡有兩個錯誤：少填 `price`，以及想改 `readonly` 的 `id`。
執行 `npx tsc -p src-errors` 可以看到：

```
error TS2741: Property 'price' is missing in type '{ id: number; name: string; }' but required in type 'MenuItem'.
error TS2540: Cannot assign to 'id' because it is a read-only property.
```

第一句：「`price` 屬性沒填，但 `MenuItem` 規定一定要有。」
第二句：「不能指定值給 `id`，因為它是唯讀屬性。」

### 小練習

1. 在菜單加一個「抹茶拿鐵」，價格 140，說明自己想。
2. 在 `MenuItem` 加一個可選欄位 `isHot?: boolean`，並且只在拿鐵填 `true`。
3. 試著在某個品項多加一個介面裡沒有的欄位（例如 `color: "綠"`），看 TypeScript 怎麼說。

