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
- [第 4 幕：收銀機要會算錢 —— 函式](#第-4-幕收銀機要會算錢--函式)
- [第 5 幕：客人說「大杯、少冰」—— 聯合型別與型別縮小](#第-5-幕客人說大杯少冰-聯合型別與型別縮小)
- [第 6 幕：這杯做好了嗎？—— 判別聯合與 never](#第-6-幕這杯做好了嗎-判別聯合與-never)
- [第 7 幕：店長想要一台點餐機 —— 類別](#第-7-幕店長想要一台點餐機--類別)
- [第 8 幕：蛋糕也要能排隊 —— 泛型](#第-8-幕蛋糕也要能排隊--泛型)
- [第 9 幕：程式碼變多了 —— 模組與專案結構](#第-9-幕程式碼變多了--模組與專案結構)
- [第 10 幕：向吧台送單要等一下 —— 非同步程式](#第-10-幕向吧台送單要等一下--非同步程式)
- [第 11 幕：打烊前的整理 —— 工具型別與 unknown](#第-11-幕打烊前的整理--工具型別與-unknown)
- [第 12 幕：正式上線 —— 編譯、輸出與執行](#第-12-幕正式上線--編譯輸出與執行)
- [終幕：接下來往哪裡走](#終幕接下來往哪裡走)
- [附錄 A：常見錯誤訊息對照表](#附錄-a常見錯誤訊息對照表)
- [附錄 B：TypeScript 速查表](#附錄-btypescript-速查表)
- [附錄 C：練習題提示](#附錄-c練習題提示)

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

---

## 第 4 幕：收銀機要會算錢 —— 函式

> **店長的需求**：「客人點了三杯，我要能算出總金額、印出收據。
> 會員打 9 折，員工打 7 折。另外，客人進門要打招呼，知道名字就叫名字。」

### 新概念：函式 —— 把一段步驟取個名字，重複使用

「算總金額」這件事每一筆訂單都要做。與其每次重寫一遍，
不如把步驟包起來，取個名字，需要時呼叫它。這就是**函式**。

```ts
function calculateTotal(items: MenuItem[]): number {
  let total = 0;
  for (const item of items) {
    total += item.price;
  }
  return total;
}
```

拆開來看：

| 部分 | 意思 |
|------|------|
| `function calculateTotal` | 定義一個叫 `calculateTotal` 的函式 |
| `(items: MenuItem[])` | **參數**：呼叫時要給一個品項陣列。這裡**一定要**寫型別，因為 TypeScript 猜不到別人會傳什麼進來 |
| `: number` | **回傳型別**：這個函式算完會交出一個數字 |
| `return total;` | 把結果交出去 |

呼叫的方式：`calculateTotal(order)`。

### 參數的三種變化

```ts
// 預設參數：不給 rate 就用 0.9
function applyDiscount(total: number, rate: number = 0.9): number { ... }

// 可選參數：customerName 可以不傳
function greet(customerName?: string): string { ... }

// 沒有回傳值：用 void
function printReceipt(items: MenuItem[], total: number): void { ... }
```

### 箭頭函式：簡短寫法

小工具函式常用更短的**箭頭函式**寫法，功能一樣：

```ts
const formatPrice = (amount: number): string => `NT$ ${amount}`;
```

讀法：「`formatPrice` 是一個函式，接收 `amount`，回傳箭頭右邊的東西。」

### 動手寫：`src/04-functions.ts`

```ts
// 第 4 幕：收銀機要會算錢 —— 函式

interface MenuItem {
  readonly id: number;
  name: string;
  price: number;
}

// 1. 最基本的函式：參數要標型別，回傳值也標型別
function calculateTotal(items: MenuItem[]): number {
  let total = 0;
  for (const item of items) {
    total += item.price;
  }
  return total;
}

// 2. 預設參數：不給折扣率就用 9 折
function applyDiscount(total: number, rate: number = 0.9): number {
  return Math.round(total * rate);
}

// 3. 箭頭函式：寫法更短，常用在小工具函式
const formatPrice = (amount: number): string => `NT$ ${amount}`;

// 4. 沒有回傳值的函式：回傳型別是 void
function printReceipt(items: MenuItem[], total: number): void {
  console.log("====== 收據 ======");
  for (const item of items) {
    console.log(`${item.name.padEnd(6, "　")} ${formatPrice(item.price)}`);
  }
  console.log("------------------");
  console.log(`合計 ${formatPrice(total)}`);
}

// 5. 可選參數：用 ? 表示可以不傳
function greet(customerName?: string): string {
  if (customerName) {
    return `${customerName} 您好，歡迎光臨！`;
  }
  return "您好，歡迎光臨！";
}

// ---- 實際跑一次 ----
const order: MenuItem[] = [
  { id: 2, name: "拿鐵", price: 120 },
  { id: 3, name: "卡布奇諾", price: 130 },
  { id: 1, name: "美式", price: 90 },
];

console.log(greet());
console.log(greet("小美"));

const subtotal = calculateTotal(order);
printReceipt(order, subtotal);

console.log(`會員價（9 折）：${formatPrice(applyDiscount(subtotal))}`);
console.log(`員工價（7 折）：${formatPrice(applyDiscount(subtotal, 0.7))}`);
```

補充：

- `total += item.price` 是 `total = total + item.price` 的縮寫。
- `Math.round(...)` 四捨五入到整數，`Math` 是 JavaScript 內建的數學工具箱。
- `item.name.padEnd(6, "　")` 把名稱補到 6 個字寬，讓收據對齊（補的是全形空白）。
- `if (customerName) { ... }`：**條件判斷**。`customerName` 有值才執行大括號裡的程式。

### 執行結果

```
您好，歡迎光臨！
小美 您好，歡迎光臨！
====== 收據 ======
拿鐵　　　　 NT$ 120
卡布奇諾　　 NT$ 130
美式　　　　 NT$ 90
------------------
合計 NT$ 340
會員價（9 折）：NT$ 306
員工價（7 折）：NT$ 238
```

### 故意寫錯看看

`src-errors/04-wrong-argument.ts`：傳文字 `"340"` 給要數字的參數，以及多傳了一個參數。

```
error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
error TS2554: Expected 1-2 arguments, but got 3.
```

第二句：「預期 1 到 2 個參數，但你給了 3 個。」
因為 `rate` 有預設值，所以可以給 1 個或 2 個，但 3 個就太多了。

### 小練習

1. 寫一個函式 `mostExpensive(items: MenuItem[]): MenuItem`，回傳最貴的品項。
2. 把 `applyDiscount` 改成「折扣率超過 1 或小於 0 時，直接回傳原價」。
3. 把 `printReceipt` 改成也印出「會員價」那一行。

---

## 第 5 幕：客人說「大杯、少冰」—— 聯合型別與型別縮小

> **店長的需求**：「杯型只有小杯、中杯、大杯三種，中杯加 10 元、大杯加 20 元。
> 溫度只能是熱、冰、少冰、去冰。小美上次打了『特大杯』，吧台看不懂，這種事不能再發生。
> 另外，會員編號有的是數字、有的是英文字母開頭的卡號，兩種都要能顯示。」

### 新概念 1：字面量型別 —— 值本身就是型別

到目前為止，`string` 代表「任何文字」。但杯型不該是任何文字，
只能是那三個字。TypeScript 允許你把**特定的值**當成型別：

```ts
type Size = "小杯" | "中杯" | "大杯";
```

- `"小杯"` 這種「值本身就是型別」叫**字面量型別**（literal type）。
- `|` 讀作「或」，把幾個型別串起來叫**聯合型別**（union type）。
- 整句意思：「`Size` 只能是小杯、中杯、大杯其中之一。」

這下小美再打「特大杯」，程式還沒跑就會被擋下來。

### 新概念 2：型別縮小 —— 用 if 幫 TypeScript 看清楚

會員編號可能是數字或文字：`memberId: string | number`。
問題來了：文字有 `.toUpperCase()`（轉大寫），數字沒有。
你不能對一個「可能是數字」的東西呼叫 `.toUpperCase()`。

解法是先用 `typeof` 檢查，TypeScript 會在 `if` 區塊裡**自動縮小**型別：

```ts
if (typeof memberId === "string") {
  // 這裡 TypeScript 確定 memberId 是 string，可以安心用文字的方法
}
// 這裡 TypeScript 確定 memberId 是 number
```

這叫**型別縮小**（narrowing），是 TypeScript 最聰明的功能之一。

### 動手寫：`src/05-union-types.ts`

```ts
// 第 5 幕：客人說「大杯、少冰」—— 聯合型別、字面量型別與型別縮小

interface MenuItem {
  readonly id: number;
  name: string;
  price: number;
}

// 1. 字面量型別 + 聯合型別：只能是這幾個值之一
type Size = "小杯" | "中杯" | "大杯";
type Temperature = "熱" | "冰" | "少冰" | "去冰";

// 2. 一筆「點餐明細」：哪個品項、什麼杯型、什麼溫度、幾杯
interface OrderItem {
  item: MenuItem;
  size: Size;
  temperature: Temperature;
  quantity: number;
}

// 3. 用 switch 針對每一種可能處理：杯型加價
function sizeExtra(size: Size): number {
  switch (size) {
    case "小杯":
      return 0;
    case "中杯":
      return 10;
    case "大杯":
      return 20;
  }
}

// 4. 單筆明細的小計
function lineTotal(line: OrderItem): number {
  return (line.item.price + sizeExtra(line.size)) * line.quantity;
}

// 5. 型別縮小（narrowing）：會員編號可能是數字或文字
function describeMember(memberId: string | number): string {
  if (typeof memberId === "string") {
    // 這個區塊裡，TypeScript 知道 memberId 是 string
    return `會員卡號 ${memberId.toUpperCase()}`;
  }
  // 這裡 TypeScript 知道 memberId 是 number
  return `會員編號 ${memberId.toString().padStart(6, "0")}`;
}

// ---- 實際跑一次 ----
const latte: MenuItem = { id: 2, name: "拿鐵", price: 120 };
const americano: MenuItem = { id: 1, name: "美式", price: 90 };

const lines: OrderItem[] = [
  { item: latte, size: "大杯", temperature: "少冰", quantity: 2 },
  { item: americano, size: "小杯", temperature: "熱", quantity: 1 },
];

for (const line of lines) {
  console.log(
    `${line.item.name} ${line.size} ${line.temperature} x${line.quantity} = ${lineTotal(line)} 元`,
  );
}

console.log(describeMember("vip001"));
console.log(describeMember(42));

// 下面這行打開會出錯：「特大杯」不在 Size 的選項裡（見 src-errors/05-wrong-size.ts）
// const wrong: OrderItem = { item: latte, size: "特大杯", temperature: "冰", quantity: 1 };
```

補充：

- `switch (size) { case "小杯": ... }` 是另一種條件判斷，適合「針對每一個可能的值做不同事」。
  注意 `sizeExtra` 的 `switch` 沒有 `default`，但 TypeScript 不會抱怨，
  因為它知道 `Size` 只有三種可能，而三種都處理到了。
- 在 VS Code 裡打 `size: "` 的時候，會自動跳出「小杯、中杯、大杯」讓你選。這是字面量型別的另一個好處。

### 執行結果

```
拿鐵 大杯 少冰 x2 = 280 元
美式 小杯 熱 x1 = 90 元
會員卡號 VIP001
會員編號 000042
```

### 故意寫錯看看

`src-errors/05-wrong-size.ts`：

```
error TS2322: Type '"特大杯"' is not assignable to type 'Size'.
```

「`"特大杯"` 不能指定給 `Size`。」小美的失誤從此不可能發生。

### 小練習

1. 新增 `type Sweetness = "正常" | "半糖" | "無糖"`，加到 `OrderItem` 裡，並印出來。
2. 把 `sizeExtra` 改成用 `if / else if` 寫，比較一下哪種好讀。
3. 寫一個函式 `describeTemperature(t: Temperature): string`，冰的回傳「請加冰塊」，其他回傳「不加冰」。
   （提示：`"冰" | "少冰"` 要加冰塊。）

---

## 第 6 幕：這杯做好了嗎？—— 判別聯合與 never

> **店長的需求**：「每筆訂單有四種狀態：等待中、製作中、完成、取消。
> 製作中要記錄是誰在做，完成要記錄完成時間，取消要記錄原因。
> 等待中什麼都不用記。我要能一眼看出每筆訂單的狀態。」

### 新概念 1：判別聯合 —— 每種狀態帶不同的資料

這個需求的難點在於**每種狀態附帶的資料不一樣**。如果用一個大物件裝所有欄位：

```ts
// 不好的做法
interface OrderStatus {
  kind: string;
  barista?: string;
  finishedAt?: Date;
  reason?: string;
}
```

所有欄位都變成可選，TypeScript 就沒辦法幫你檢查「完成狀態一定有完成時間」。

更好的做法是把每種狀態寫成一個小物件，用一個共同欄位 `kind` 來區分，再用 `|` 串起來：

```ts
type OrderStatus =
  | { kind: "pending" }
  | { kind: "preparing"; barista: string }
  | { kind: "done"; finishedAt: Date }
  | { kind: "cancelled"; reason: string };
```

這叫**判別聯合**（discriminated union），`kind` 是「判別欄位」。
在 `switch (status.kind)` 的每個 `case` 裡，TypeScript 會自動知道現在是哪一種狀態、有哪些欄位可以用。

這個模式在實務上非常常見：API 回應（成功或失敗）、付款結果、表單狀態都適用。

### 新概念 2：never —— 「不可能發生」的型別

假設半年後店長新增了「退款」狀態，但你忘了在 `describeStatus` 裡處理，怎麼辦？
在 `default` 裡放一個 `never` 型別的變數：

```ts
default: {
  const unhandled: never = status;
  return unhandled;
}
```

`never` 代表「這裡不可能到達」。如果所有狀態都處理了，`status` 在 `default` 裡確實沒有任何可能，可以指定給 `never`。
但如果有狀態漏掉，`status` 就還有剩餘的可能，不能指定給 `never`，**編譯錯誤會提醒你**。

這是一個小技巧，卻能避免很多線上事故。

### 動手寫：`src/06-order-status.ts`

```ts
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
```

補充：

- `Date` 是 JavaScript 內建的「日期時間」型別，`new Date()` 代表現在。
- `.toLocaleTimeString("zh-TW")` 把時間轉成台灣習慣的格式。

### 執行結果

```
#101 小美：等待製作
#102 阿明：店長 正在製作
#103 小花：已完成（下午2:30:11）
#104 大雄：已取消：客人趕時間
```

（時間會是你執行當下的時間。）

### 故意寫錯看看

`src-errors/06-missing-case.ts` 新增了 `refunded` 狀態但沒處理：

```
error TS2322: Type '{ kind: "refunded"; }' is not assignable to type 'never'.
```

「`refunded` 這種狀態不能指定給 `never`。」翻成白話：「你漏了 refunded 沒處理。」

### 小練習

1. 新增一個狀態 `{ kind: "refunded"; amount: number }`，先看到錯誤，再補上 `case` 讓它消失。
2. 寫一個函式 `isActive(status: OrderStatus): boolean`，等待中與製作中回傳 `true`。
3. 把 `describeStatus` 的 `switch` 改用 `if (status.kind === "...")` 寫一次，感受兩者差別。

---

## 第 7 幕：店長想要一台點餐機 —— 類別

> **店長的需求**：「我要一台『點餐機』：輸入客人名字和點的東西，它自動給訂單編號、算總價、
> 把訂單存起來。我要能查某一筆訂單，也要能隨時看今天的總營業額。
> 還有，訂單資料只能透過點餐機操作，不准別人直接亂改。」

### 新概念：類別 —— 把資料和操作包在一起

前幾幕我們把資料（訂單陣列）和操作資料的函式（算總價）分開放。
當它們越來越多，就會想把「屬於同一台機器的東西」收納在一起。這就是**類別**（class）。

你可以把類別想成**點餐機的設計圖**，`new Register("小日子咖啡")` 則是照設計圖**做出一台實際的機器**。

類別有三種成員：

| 成員 | 是什麼 | 範例 |
|------|--------|------|
| **屬性** | 機器裡存的資料 | `orders`、`nextId`、`shopName` |
| **建構子** `constructor` | 製造機器時執行的初始化步驟 | 把店名記下來 |
| **方法** | 機器能做的事（函式） | `createOrder()`、`findOrder()` |

### 存取修飾字：誰可以碰

- `public`（預設，可以不寫）：外面可以讀寫。
- `private`：只有類別內部能用。外面想碰 `register.orders`，編譯直接報錯。
- `readonly`：可以讀，不能改。

店長說「訂單不准亂改」，用 `private` 就能做到。

### getter：像屬性一樣讀取計算結果

「今天總營業額」每次都要加總一遍，它是算出來的，不是存起來的。
用 `get totalRevenue()` 定義後，外面可以寫 `register.totalRevenue`（不加括號），
讀起來像屬性，實際上是即時計算。

### 動手寫：`src/07-class-register.ts`

```ts
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
```

這一幕出現了幾個新的 JavaScript 工具，值得認識：

- `this`：在類別裡代表「這一台機器自己」。`this.orders` 就是這台機器的訂單陣列。
- `this.nextId++`：先用目前的值，然後把 `nextId` 加 1。所以第一筆訂單是 1，第二筆是 2。
- `Record<Size, number>`：一個「鍵是 Size、值是數字」的對照表。第 11 幕會再談。
- `array.reduce((累計, 目前元素) => 新的累計, 初始值)`：把陣列「摺疊」成一個值，最常用來加總。
- `array.find(條件)`：找出第一個符合條件的元素，找不到回傳 `undefined`。
  所以 `findOrder` 的回傳型別是 `Order | undefined`，呼叫的人**必須**處理找不到的情況。
- `{ id: this.nextId++, customerName, lines, total }`：當變數名稱和屬性名稱一樣時，
  `customerName: customerName` 可以縮寫成 `customerName`。

### 執行結果

```
小日子咖啡 今日訂單：
#1 小美 合計 280 元
#2 阿明 合計 220 元
共 2 筆，營業額 500 元
找到訂單 #2，客人是 阿明
```

### 故意寫錯看看

`src-errors/07-private.ts`：從外面動 `private` 的 `orders`。

```
error TS2341: Property 'orders' is private and only accessible within class 'Register'.
```

另一個常見錯誤在 `src-errors/10-possibly-undefined.ts`：`find` 找不到東西時會是 `undefined`，直接使用會被擋下：

```
error TS18048: 'found' is possibly 'undefined'.
```

「`found` 可能是 `undefined`。」解法就像範例裡那樣，先用 `if (found)` 或三元運算子確認再使用。

### 小練習

1. 新增方法 `cancelOrder(id: number): boolean`，把訂單從陣列移除，成功回傳 `true`。
   （提示：`this.orders = this.orders.filter((o) => o.id !== id)`。）
2. 新增 getter `averageOrderValue`，回傳平均客單價。沒有訂單時回傳 0。
3. 把 `shopName` 的 `readonly` 拿掉，試著在外面改店名，再加回去看差別。

---

## 第 8 幕：蛋糕也要能排隊 —— 泛型

> **店長的需求**：「吧台做咖啡要排隊，現在蛋糕櫃也要有自己的排隊順序。
> 咖啡訂單和蛋糕訂單的資料長得不一樣，但『排隊』這件事是一樣的：
> 先進先出。我不想看到兩份幾乎一樣的程式碼。」

### 新概念：泛型 —— 型別也可以當參數

先看一個只能排咖啡的隊伍：

```ts
class CoffeeQueue {
  private items: CoffeeOrder[] = [];
  enqueue(item: CoffeeOrder): void { this.items.push(item); }
  dequeue(): CoffeeOrder | undefined { return this.items.shift(); }
}
```

蛋糕也要排隊，難道複製一份改名叫 `CakeQueue`？以後還有麵包、冰淇淋呢？

注意這個類別裡 `CoffeeOrder` 出現了三次，而且**排隊的邏輯跟它是咖啡還是蛋糕完全無關**。
如果能把 `CoffeeOrder` 挖空，變成一個「之後再填」的洞，就能重複使用了：

```ts
class Queue<T> {
  private items: T[] = [];
  enqueue(item: T): void { this.items.push(item); }
  dequeue(): T | undefined { return this.items.shift(); }
}
```

- `<T>` 就是那個洞，叫**型別參數**。`T` 只是習慣用的名字，叫 `<Item>` 也可以。
- 使用時再填入：`new Queue<CoffeeOrder>()`、`new Queue<CakeOrder>()`。

這就是**泛型**（generics）：「泛用的型別」。
函式有參數讓值可以變，泛型讓**型別**可以變。你平常用的 `string[]` 其實就是 `Array<string>` 的縮寫，陣列本身就是泛型。

### 動手寫：`src/08-generics.ts`

```ts
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
```

補充：

- `array.shift()`：拿走並回傳陣列的第一個元素。陣列是空的就回傳 `undefined`。
- **泛型函式**呼叫時通常不必寫 `<string>`，TypeScript 會從你傳的陣列推論出來。
- `<T extends { price: number }>`：**泛型限制**。意思是「T 可以是任何型別，但至少要有 `price` 數字欄位」，
  這樣函式裡才能放心用 `item.price`。
- `cheapestDrink?.name`：`?.` 叫**可選鏈**，意思是「如果 `cheapestDrink` 不是 `undefined` 才去讀 `.name`」。
- 最後那行 `void CoffeeQueue;` 只是告訴編譯器「我知道這個類別沒用到」，避免警告，實務上你會直接把它刪掉。

### 執行結果

```
下一杯要做：拿鐵
咖啡隊伍還剩 1 杯，蛋糕隊伍還剩 1 個
第一位客人：小美，第一個價格：120
最便宜的是：美式
```

### 小練習

1. 幫 `Queue<T>` 加一個 `clear(): void` 方法清空隊伍，以及 `isEmpty(): boolean`。
2. 寫一個泛型函式 `lastOf<T>(list: T[]): T | undefined`，回傳最後一個元素。
3. 寫一個泛型函式 `pluckNames<T extends { name: string }>(items: T[]): string[]`，把所有名稱抽出來。
   （提示：`items.map((item) => item.name)`。）

---

## 第 9 幕：程式碼變多了 —— 模組與專案結構

> **店長的需求**：「系統越來越大了，一個檔案幾百行我看了頭暈。
> 可不可以菜單歸菜單、算錢歸算錢、點餐機歸點餐機，分開放？」

### 新概念：模組 —— 一個檔案就是一個模組

到目前為止每一幕都是一個檔案，而且 `MenuItem` 介面重複定義了好幾次。
實際專案會把程式**拆成多個檔案**，每個檔案負責一件事，彼此透過 `export` 與 `import` 溝通：

- `export`：「這個東西我願意借給別的檔案用。」
- `import`：「我要跟某個檔案借東西。」

```ts
// menu.ts
export const menu = [...];
export function printMenu() { ... }

// main.ts
import { menu, printMenu } from "./menu.ts";
```

- `./` 代表「同一個資料夾」。`../` 代表「上一層資料夾」。
- 引入**型別**（interface、type）時加上 `type` 關鍵字：`import type { MenuItem } from "./types.ts"`。
  這告訴編譯器「這只是型別，編譯後可以整個拿掉」。
- 路徑寫 `.ts` 副檔名。第 1 幕設定的 `rewriteRelativeImportExtensions` 會在編譯時自動改成 `.js`。

### 專案結構

這一幕把前面所有東西整合起來，變成一個完整的小系統：

```
src/09-modules/
├── types.ts      ← 所有共用的型別（MenuItem、Order、OrderStatus...）
├── menu.ts       ← 菜單資料與查詢
├── pricing.ts    ← 算錢
├── register.ts   ← 點餐機類別與狀態描述
└── main.ts       ← 程式入口，把大家組合起來
```

原則：**型別放一起、資料放一起、邏輯放一起，入口檔只負責組裝。**

### 動手寫

**`src/09-modules/types.ts`** —— 共用型別：

```ts
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
```

**`src/09-modules/menu.ts`** —— 菜單：

```ts
import type { MenuItem } from "./types.ts";

export const menu: MenuItem[] = [
  { id: 1, name: "美式", price: 90 },
  { id: 2, name: "拿鐵", price: 120, description: "濃縮咖啡加上綿密牛奶" },
  { id: 3, name: "卡布奇諾", price: 130, description: "奶泡多一點" },
  { id: 4, name: "手沖單品", price: 150 },
];

export function findMenuItem(name: string): MenuItem | undefined {
  return menu.find((item) => item.name === name);
}

export function printMenu(): void {
  console.log("====== 菜單 ======");
  for (const item of menu) {
    console.log(`[${item.id}] ${item.name} ${item.price} 元`);
  }
}
```

**`src/09-modules/pricing.ts`** —— 算錢：

```ts
import type { OrderItem, Size } from "./types.ts";

const SIZE_EXTRA: Record<Size, number> = { 小杯: 0, 中杯: 10, 大杯: 20 };

export function lineTotal(line: OrderItem): number {
  return (line.item.price + SIZE_EXTRA[line.size]) * line.quantity;
}

export function orderTotal(lines: OrderItem[]): number {
  return lines.reduce((sum, line) => sum + lineTotal(line), 0);
}

export const formatPrice = (amount: number): string => `NT$ ${amount}`;
```

注意 `SIZE_EXTRA` 沒有 `export`，它是 `pricing.ts` 的內部細節，別的檔案不需要知道。

**`src/09-modules/register.ts`** —— 點餐機：

```ts
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
```

這裡出現 `throw new Error(...)`：**丟出錯誤**。找不到訂單是不該發生的事，
與其默默略過，不如直接讓程式停下來並說明原因。第 10 幕會學怎麼「接住」錯誤。

**`src/09-modules/main.ts`** —— 入口：

```ts
// 第 9 幕：程式碼變多了，該分檔案了 —— 模組（import / export）
import { menu, findMenuItem, printMenu } from "./menu.ts";
import { formatPrice } from "./pricing.ts";
import { Register, describeStatus } from "./register.ts";
import type { OrderItem } from "./types.ts";

printMenu();

const register = new Register("小日子咖啡");

const latte = findMenuItem("拿鐵");
const americano = findMenuItem("美式");

if (!latte || !americano) {
  throw new Error("菜單資料有問題");
}

const lines: OrderItem[] = [
  { item: latte, size: "大杯", temperature: "少冰", quantity: 2 },
  { item: americano, size: "小杯", temperature: "熱", quantity: 1 },
];

const order = register.createOrder("小美", lines);
console.log(`\n建立訂單 #${order.id}，合計 ${formatPrice(order.total)}，狀態：${describeStatus(order.status)}`);

register.updateStatus(order.id, { kind: "preparing", barista: "店長" });
console.log(`更新後狀態：${describeStatus(order.status)}`);

register.updateStatus(order.id, { kind: "done", finishedAt: new Date() });
console.log(`更新後狀態：${describeStatus(order.status)}`);

console.log(`\n菜單共 ${menu.length} 項，今日營業額 ${formatPrice(register.totalRevenue)}`);
```

注意 `if (!latte || !americano) { throw ... }` 這段：
`findMenuItem` 回傳 `MenuItem | undefined`，經過這個檢查後，
TypeScript 知道下面的 `latte` 和 `americano` 一定是 `MenuItem`，這又是型別縮小。

### 執行結果

```bash
npm run dev src/09-modules/main.ts
```

```
====== 菜單 ======
[1] 美式 90 元
[2] 拿鐵 120 元
[3] 卡布奇諾 130 元
[4] 手沖單品 150 元

建立訂單 #1，合計 NT$ 370，狀態：等待製作
更新後狀態：店長 正在製作
更新後狀態：已完成（下午2:31:05）

菜單共 4 項，今日營業額 NT$ 370
```

### 小練習

1. 新增 `src/09-modules/discount.ts`，匯出 `applyMemberDiscount(total: number): number`（9 折），在 `main.ts` 用它。
2. 在 `menu.ts` 新增 `menuByCategory`，把咖啡與非咖啡分開。這需要先在 `types.ts` 的 `MenuItem` 加 `category` 欄位。
3. 試著把 `import type` 改成普通 `import`，看看有沒有差（提示：這個設定下兩者都能跑，但 `import type` 意圖更清楚）。

---

## 第 10 幕：向吧台送單要等一下 —— 非同步程式

> **店長的需求**：「送單到吧台後，飲料要做一陣子才會好。系統不能在那邊傻等，
> 要能先收下一筆訂單。還有，豆子用完的時候要告訴客人，不能讓系統當掉。」

### 新概念：非同步 —— 不用等的事就先去做別的

到目前為止程式都是「一行跑完才跑下一行」。
但現實中很多事要**等**：等吧台做飲料、等網路回應、等檔案讀取。
如果程式傻等，整間店都會卡住。

JavaScript 的解法是**非同步**：發出請求後先去做別的事，等結果回來再處理。
TypeScript 用三個概念來表達：

| 概念 | 意思 | 比喻 |
|------|------|------|
| `Promise<T>` | 「一件將來會完成的事，完成後會給你一個 T」 | 取餐號碼牌：現在拿到牌子，飲料之後才會好 |
| `async` | 標記一個函式裡面「會等東西」 | 這個流程中間有等待時間 |
| `await` | 「在這裡等 Promise 完成，然後拿結果」 | 聽到號碼被叫到，去拿飲料 |

重點：`await` 只能寫在 `async` 函式裡。

### 錯誤處理：try / catch

等的事情可能失敗（豆子用完了）。用 `try { ... } catch (error) { ... }` 接住：

- `try` 裡面放可能失敗的程式。
- 失敗時跳到 `catch`，`error` 就是失敗的原因。
- 在 `strict` 模式下 `error` 的型別是 `unknown`（第 11 幕會講），
  要先用 `error instanceof Error` 確認它真的是錯誤物件，才能讀 `.message`。

### 動手寫：`src/10-async.ts`

```ts
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
```

補充：

- `new Promise((resolve, reject) => { ... })`：建立一個 Promise。
  事情做完呼叫 `resolve(結果)`，失敗呼叫 `reject(錯誤)`。
  實務上你很少自己 `new Promise`，大多是呼叫別人寫好的（例如 `fetch` 抓網路資料）。
  這裡自己寫是為了讓你看清楚它的內部。
- `setTimeout(函式, 毫秒)`：幾毫秒之後執行函式。這是模擬「製作時間」的方法。
- `Promise.all([...])`：把多個 Promise 一起等。三杯各要 1、1.5、1 秒，
  **同時做**只要 1.5 秒，而不是 3.5 秒。這是非同步的威力。
- `orders.map((order) => makeDrink(order))`：`map` 把陣列裡每個元素轉換成另一個東西，
  這裡是把每張訂單轉成一個 Promise。

### 執行結果

```
收到訂單 #1：拿鐵
#1 拿鐵 做好了
收到訂單 #2：手沖單品
#2 失敗：手沖豆子用完了

--- 多杯同時製作 ---
#3 美式 做好了
#4 卡布奇諾 做好了
#5 拿鐵 做好了
全部完成，共花 1.5 秒
```

注意「全部完成，共花 1.5 秒」，證明三杯是同時做的。

### 常見錯誤

忘了寫 `await`：

```ts
const result = makeDrink(order);  // 少了 await
console.log(result);               // 印出 Promise { <pending> }，不是字串
```

TypeScript 會提醒你 `result` 的型別是 `Promise<string>` 而不是 `string`，
當你想把它當字串用的時候就會報錯。

### 小練習

1. 把 `serveAll` 改成用 `for` 迴圈一杯一杯 `await`，觀察總時間變成多少。
2. 新增一個 `drink === "卡布奇諾"` 時要多等 1 秒的「打奶泡」步驟。
3. 查一下 `Promise.allSettled`，想想它和 `Promise.all` 在「其中一杯失敗」時有什麼不同。

---

## 第 11 幕：打烊前的整理 —— 工具型別與 unknown

> **店長的需求**：「幾件雜事：（1）品項要能只改價格不動其他欄位；（2）門口看板只要顯示名稱和價格；
> （3）新增品項時還沒有編號；（4）要有庫存表；（5）稅率設定不准被改；
> （6）以後菜單會從檔案讀進來，讀進來的資料要先驗證再用。」

這一幕是雜貨鋪，每個需求對應一個小工具。它們都是 TypeScript 內建的，不用自己寫。

### 新概念 1：工具型別 —— 用現有型別變出新型別

| 工具型別 | 意思 | 對應需求 |
|---------|------|---------|
| `Partial<T>` | T 的所有欄位都變成可選 | （1）局部更新 |
| `Pick<T, K>` | 只挑 T 的某幾個欄位 | （2）看板精簡版 |
| `Omit<T, K>` | 排除 T 的某幾個欄位 | （3）還沒有 id 的新品項 |
| `Record<K, V>` | 鍵是 K、值是 V 的對照表 | （4）庫存表 |
| `Readonly<T>` | T 的所有欄位都變成唯讀 | （5）設定不准改 |

它們的共通點是：**不必重新定義一遍 `MenuItem`**，改了原本的介面，這些衍生型別會自動跟著變。

### 新概念 2：unknown —— 來路不明的東西要先檢查

從檔案或網路讀進來的資料，TypeScript 不可能知道長什麼樣。
JavaScript 的 `JSON.parse` 回傳的型別是 `any`，意思是「什麼都行」。
**`any` 等於關掉 TypeScript 的所有檢查**，新手最常因此踩坑。

更安全的選擇是 `unknown`：「我不知道這是什麼，所以**不准你直接用**，要先檢查。」
檢查的方式是寫一個**型別守衛**（type guard）函式：

```ts
function isMenuItem(value: unknown): value is MenuItem { ... }
```

回傳型別 `value is MenuItem` 的意思是：「如果這個函式回傳 `true`，那 `value` 就是 `MenuItem`。」
之後用 `if (isMenuItem(data))` 檢查，區塊裡 TypeScript 就會把 `data` 當成 `MenuItem`。

### 新概念 3：型別斷言 —— 「相信我，它就是這個型別」

`value as Record<string, unknown>` 叫**型別斷言**（type assertion），
意思是告訴 TypeScript「把它當成這個型別處理」。
這是在**你比編譯器更清楚**的情況下使用，但也代表 TypeScript 不會再幫你檢查，
請少用，而且用的時候要像範例這樣，前面已經做過足夠的檢查。

### 動手寫：`src/11-utility-types.ts`

```ts
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
```

補充：

- `{ ...item, ...changes }`：**展開運算子** `...` 把物件的所有屬性攤開。
  後面的會蓋掉前面的，所以 `changes` 裡有的欄位會覆蓋 `item` 的。這是「不改原物件、產生新物件」的慣用寫法。
- `JSON` 是一種文字格式，長得像 JavaScript 物件，是程式之間交換資料最常見的方式。
  `JSON.parse` 把文字變成物件，`JSON.stringify` 反過來。
- `Object.entries(stock)` 把物件變成 `[鍵, 值]` 的陣列，方便用迴圈走訪。
- `MenuItem | null`：找不到或驗證失敗時回傳 `null`，和 `undefined` 類似，都代表「沒有」。
  慣例上 `undefined` 是「沒設定」，`null` 是「明確表示空」。初學時不必太糾結。

### 執行結果

```
更新後： { id: 2, name: '拿鐵', price: 125, description: '新配方' }
看板用精簡版： { name: '拿鐵', price: 125 }
新品項： { id: 5, name: '抹茶拿鐵', price: 140 }
美式 庫存 50 杯
拿鐵 庫存 30 杯
卡布奇諾 庫存 0 杯（售完）
稅率 5%，幣別 TWD
解析正常 JSON： { id: 9, name: '可可', price: 100 }
解析壞掉的 JSON： null
```

### 關於 any 的忠告

你會在網路上看到很多 `any`。它的意思是「關掉檢查」，寫起來很爽，但等於回到 JavaScript 的世界。
原則：

- 不知道型別時用 `unknown`，然後檢查。
- 看到 `any` 就當成待辦事項，有空就換成正確的型別。
- 如果 `tsconfig.json` 的 `strict` 有開（我們有），沒寫型別的參數會被視為「隱含 any」而報錯，這是好事。

### 小練習

1. 用 `Pick` 做一個 `type PriceTag = Pick<MenuItem, "id" | "price">`，寫函式回傳所有品項的價格標籤陣列。
2. 把 `stock` 的型別改成 `Record<"美式" | "拿鐵" | "卡布奇諾", number>`，看看多加一個鍵或少一個鍵會怎樣。
3. 擴充 `isMenuItem`，讓 `description` 如果存在就必須是 `string`。

---

## 第 12 幕：正式上線 —— 編譯、輸出與執行

> **店長的需求**：「系統可以用了！但店裡那台電腦沒有裝你的開發工具，
> 給我一包可以直接跑的東西。」

### 開發與上線的差別

前面我們一直用 `npm run dev`（也就是 `tsx`）直接執行 `.ts`，方便但那是開發用。
正式環境通常只有 Node.js，沒有 TypeScript 工具。所以要**編譯**成 `.js`：

```bash
npm run build
```

這會執行 `tsc`，根據 `tsconfig.json` 的設定：

1. 檢查 `src/` 裡所有檔案的型別。有任何錯誤就會列出來，並且仍然輸出檔案（可以用 `noEmitOnError` 改成有錯不輸出）。
2. 把每個 `.ts` 轉成 `.js`，放到 `dist/`，資料夾結構保持一樣。
3. 把 `import "./menu.ts"` 改寫成 `import "./menu.js"`。

編譯後的結構：

```
dist/
├── 01-hello.js
├── 02-basic-types.js
├── ...
└── 09-modules/
    ├── main.js
    ├── menu.js
    ├── pricing.js
    ├── register.js
    └── types.js      ← 只有型別的檔案會變成幾乎空的 .js
```

打開 `dist/09-modules/main.js` 看看，你會發現所有型別標籤都不見了，剩下純 JavaScript：

```js
import { menu, findMenuItem, printMenu } from "./menu.js";
import { formatPrice } from "./pricing.js";
import { Register, describeStatus } from "./register.js";
printMenu();
```

### 用 Node.js 直接執行編譯結果

```bash
node dist/09-modules/main.js
```

輸出和第 9 幕完全一樣。這就是你交給店長的東西：`dist/` 資料夾加上 `package.json`，
在任何有 Node.js 的電腦上 `node dist/09-modules/main.js` 就能跑。

本儲存庫的 `package.json` 把這件事包成了 `npm start`。

### 三個指令的使用時機

| 指令 | 什麼時候用 |
|------|-----------|
| `npm run dev src/xxx.ts` | 寫程式時，想馬上看結果 |
| `npm run check` | 寫完一段、提交程式碼前，確認沒有型別錯誤 |
| `npm run build` | 要交付、部署、或給沒裝開發工具的環境跑 |

### 不要把這些東西交出去或提交到版本控制

`.gitignore` 檔案裡列了兩個資料夾：

```
node_modules/
dist/
```

- `node_modules/` 很大，而且任何人用 `npm install` 都能重新產生。
- `dist/` 是編譯產物，用 `npm run build` 就能重新產生。

原始碼（`src/`）、設定檔（`package.json`、`tsconfig.json`）才是要保存的東西。

### 補充：Node.js 也能直接跑 .ts

Node.js 22.18 以上可以直接執行只有型別註記的 `.ts` 檔：`node src/01-hello.ts`。
但它只是**拿掉型別**，不會做型別檢查，而且某些語法（例如 `enum`）不支援。
學習階段請仍然用 `tsx` 開發、`tsc` 檢查，養成好習慣。

### 小練習

1. 在 `tsconfig.json` 加上 `"noEmitOnError": true`，故意製造一個錯誤後 `npm run build`，確認 `dist/` 沒有更新。
2. 在 `tsconfig.json` 加上 `"sourceMap": true`，看看 `dist/` 多了什麼檔案，查一下它的用途。
3. 刪掉 `dist/`，重新 `npm run build`，再 `npm start`。

---

## 終幕：接下來往哪裡走

恭喜你走完整個故事。回顧一下，為了「小日子咖啡」的點餐系統，你學會了：

| 幕 | 店長的需求 | 你學會的 TypeScript |
|---|-----------|-------------------|
| 1 | 準備工具 | Node.js、npm、tsconfig、tsx、tsc |
| 2 | 記下店名和價格 | 變數、`string` / `number` / `boolean`、型別推論 |
| 3 | 一張完整菜單 | 陣列、物件、`interface`、可選與唯讀屬性 |
| 4 | 收銀機算錢 | 函式、參數與回傳型別、預設參數、箭頭函式 |
| 5 | 杯型與溫度不能亂填 | 字面量型別、聯合型別、型別縮小 |
| 6 | 訂單狀態 | 判別聯合、`never` 窮舉檢查 |
| 7 | 點餐機 | `class`、`private`、`readonly`、getter |
| 8 | 蛋糕也要排隊 | 泛型類別、泛型函式、泛型限制 |
| 9 | 程式分檔 | `import` / `export`、專案結構 |
| 10 | 送單要等 | `Promise`、`async` / `await`、`try` / `catch` |
| 11 | 打烊雜事 | `Partial` / `Pick` / `Omit` / `Record`、`unknown`、型別守衛 |
| 12 | 正式上線 | `tsc` 編譯、`dist/`、`.gitignore` |

這些已經涵蓋日常開發 80% 會用到的 TypeScript。

### 建議的下一步

依你的目標選一條路：

**想做網頁前端**
- 學 HTML 與 CSS 基礎。
- 學 **React**（搭配 TypeScript 是業界主流），從官方教學開始：<https://react.dev/learn>。
- 用 **Vite** 建立專案：`npm create vite@latest`，選 React + TypeScript。

**想做後端或 API**
- 學 **Express** 或 **Fastify**，寫一個真正的「點餐 API」，讓前端或手機 App 可以呼叫。
- 學資料庫基礎，用 **Prisma** 或 **Drizzle** 這類 TypeScript 友善的工具存取資料庫。

**想把 TypeScript 學得更深**
- 官方手冊：<https://www.typescriptlang.org/docs/handbook/>，從 "The Basics" 讀起，前面幾章你已經會了。
- 進階主題：`keyof`、索引存取型別、條件型別、映射型別、模板字面量型別。
- 練習題網站 type-challenges：<https://github.com/type-challenges/type-challenges>。

**工程實務**
- 學 **Git** 版本控制。
- 學寫測試：**Vitest** 與 TypeScript 搭配很順。
- 加上 **ESLint** 與 **Prettier**，讓程式碼風格一致。

### 給自己的小專題

把「小日子咖啡」繼續做下去是最好的練習：

1. 把菜單改成從 `menu.json` 檔案讀取（用 Node.js 的 `fs` 模組與第 11 幕的型別守衛）。
2. 加上會員系統：會員有等級，不同等級不同折扣。
3. 每日結帳報表：按品項統計銷量、依時段統計營業額。
4. 把它變成一個 HTTP API，用瀏覽器或 `curl` 下單。

---

## 附錄 A：常見錯誤訊息對照表

這些都是本教學中實際出現過的訊息。遇到時先看錯誤代碼（TS 後面的數字），再對照這張表。

| 錯誤代碼與訊息 | 白話意思 | 怎麼辦 |
|---------------|---------|--------|
| `TS2322: Type 'string' is not assignable to type 'number'.` | 文字不能放進數字變數（或反過來） | 檢查值的型別對不對；是不是忘了轉換 |
| `TS2322: Type '"特大杯"' is not assignable to type 'Size'.` | 這個值不在允許的選項裡 | 改成允許的值，或在 `type` 定義裡加上新選項 |
| `TS2322: Type '{ kind: "refunded"; }' is not assignable to type 'never'.` | `switch` 漏了一種情況沒處理 | 補上對應的 `case` |
| `TS2741: Property 'price' is missing in type ... but required in type 'MenuItem'.` | 少填了必填欄位 | 補上欄位，或在介面裡把它改成可選 `?` |
| `TS2540: Cannot assign to 'id' because it is a read-only property.` | 想改 `readonly` 的欄位 | 不要改它；真的要改就拿掉 `readonly` |
| `TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.` | 傳給函式的參數型別不對 | 檢查呼叫時傳的值 |
| `TS2554: Expected 1-2 arguments, but got 3.` | 參數數量不對 | 對照函式定義，確認傳幾個 |
| `TS2341: Property 'orders' is private and only accessible within class 'Register'.` | 從外面碰 `private` 成員 | 改用類別提供的方法；或把它改成 `public` |
| `TS18048: 'found' is possibly 'undefined'.` | 這個值可能不存在，不能直接用 | 先用 `if (found)` 檢查，或用 `?.` |
| `TS2339: Property 'xxx' does not exist on type 'yyy'.` | 這個型別沒有這個屬性 | 檢查拼字；或型別定義裡少了這個欄位 |
| `TS7006: Parameter 'x' implicitly has an 'any' type.` | 函式參數沒寫型別 | 幫參數加上型別 |
| `TS2307: Cannot find module './xxx.ts'` | 找不到要 `import` 的檔案 | 檢查路徑與檔名，注意大小寫 |
| `TS2304: Cannot find name 'xxx'.` | 用到沒定義的名稱 | 檢查拼字；是不是忘了 `import` |

讀錯誤訊息的訣竅：**先看最後一行**，再看檔名與行號 `(行,列)`，到那一行去看。
VS Code 把滑鼠移到紅線上就會顯示訊息，不必一直切到終端機。

---

## 附錄 B：TypeScript 速查表

### 基本型別

```ts
let s: string = "文字";
let n: number = 42;
let b: boolean = true;
let list: string[] = ["a", "b"];      // 陣列
let maybe: string | undefined;        // 可能沒有值
let anything: unknown;                // 未知，用前要檢查
```

### 物件與介面

```ts
interface MenuItem {
  readonly id: number;    // 唯讀
  name: string;
  description?: string;   // 可選
}

type Point = { x: number; y: number };   // type 也能描述物件
```

### 聯合與字面量

```ts
type Size = "小杯" | "中杯" | "大杯";
type Id = string | number;

type Status =                                   // 判別聯合
  | { kind: "ok"; data: string }
  | { kind: "error"; message: string };
```

### 函式

```ts
function add(a: number, b: number): number { return a + b; }
const double = (n: number): number => n * 2;    // 箭頭函式
function log(msg: string): void {}              // 無回傳值
function greet(name?: string) {}                // 可選參數
function discount(total: number, rate = 0.9) {} // 預設參數
```

### 類別

```ts
class Register {
  private orders: Order[] = [];
  readonly shopName: string;
  constructor(shopName: string) { this.shopName = shopName; }
  createOrder(...): Order { ... }
  get count(): number { return this.orders.length; }
}
```

### 泛型

```ts
class Queue<T> { private items: T[] = []; }
function firstOf<T>(list: T[]): T | undefined { return list[0]; }
function cheapest<T extends { price: number }>(items: T[]): T | undefined { ... }
```

### 模組

```ts
export interface MenuItem { ... }
export function printMenu() { ... }
import { printMenu } from "./menu.ts";
import type { MenuItem } from "./types.ts";
```

### 非同步

```ts
async function load(): Promise<string> {
  try {
    const result = await somethingAsync();
    return result;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    throw error;
  }
}
const all = await Promise.all([p1, p2, p3]);
```

### 工具型別

```ts
Partial<T>     // 全部可選
Required<T>    // 全部必填
Readonly<T>    // 全部唯讀
Pick<T, K>     // 只挑 K
Omit<T, K>     // 排除 K
Record<K, V>   // 鍵 K 值 V 的對照表
```

### 型別縮小與守衛

```ts
if (typeof x === "string") { ... }
if (x instanceof Error) { ... }
if (x) { ... }                              // 排除 undefined / null
function isMenuItem(v: unknown): v is MenuItem { ... }
```

### 常用指令

```bash
npm install --save-dev typescript tsx @types/node
npm run dev src/xxx.ts     # tsx 直接執行
npm run check              # tsc --noEmit 只檢查
npm run build              # tsc 編譯到 dist/
```

---

## 附錄 C：練習題提示

這裡只給方向，不給完整答案。卡住的時候看一眼，然後自己寫完。

**第 2 幕**：`const tableCount = 8;` 然後用樣板字串印出。改 `const` 的值會看到 `TS2588: Cannot assign to 'todaySpecial' because it is a constant.`

**第 3 幕**：多加介面裡沒有的欄位會看到 `TS2353: Object literal may only specify known properties`。這是 TypeScript 的「多餘屬性檢查」。

**第 4 幕**：`mostExpensive` 可以用 `reduce`，或用 `for` 迴圈維護一個 `best` 變數，像第 8 幕的 `cheapest`。

**第 5 幕**：`describeTemperature` 用 `if (t === "冰" || t === "少冰")`。

**第 6 幕**：`isActive` 可以寫成 `return status.kind === "pending" || status.kind === "preparing";`

**第 7 幕**：`averageOrderValue` 記得先判斷 `this.orders.length === 0`，不然會除以零得到 `NaN`。

**第 8 幕**：`isEmpty` 就是 `return this.items.length === 0;`

**第 9 幕**：新檔案記得 `export`，用的地方記得 `import`，路徑要寫 `./discount.ts`。

**第 10 幕**：改成 `for (const order of orders) { console.log(await makeDrink(order)); }` 之後總時間會變成 3.5 秒。
`Promise.allSettled` 不會因為一個失敗就整個失敗，會告訴你每一個的結果。

**第 11 幕**：`Record<"美式" | "拿鐵" | "卡布奇諾", number>` 少一個鍵會報 `TS2741` 缺少屬性，多一個鍵會報 `TS2353`。

**第 12 幕**：`sourceMap` 會產生 `.js.map`，讓除錯工具能把 `.js` 的錯誤對應回 `.ts` 的行號。
