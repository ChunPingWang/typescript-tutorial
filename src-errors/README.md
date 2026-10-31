# 故意寫錯的範例

這個資料夾裡的檔案**故意**包含型別錯誤，用來展示 TypeScript 會怎麼提醒你。
它們不在 `tsconfig.json` 的 `include` 範圍內，所以不會影響 `npm run check` 與 `npm run build`。

想親眼看到所有錯誤訊息，執行：

```bash
npx tsc -p src-errors
```
