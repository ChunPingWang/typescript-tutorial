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
