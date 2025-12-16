# clean-craftsmanship-katas-js

Practice Test-Driven Development (TDD) and Behavior-Driven Development (BDD) in JavaScript by reimplementing classic Uncle Bob katas and examples in a clean, incremental way.

使用 JavaScript 依循 Uncle Bob 的示範題與經典 kata，小步練習 TDD / BDD，專注在程式語言原生邏輯與乾淨設計。

---

## Motivation / 動機

This repository contains my personal practice solutions inspired by exercises and examples from Robert C. Martin (Uncle Bob), including topics from *Clean Craftsmanship* and related articles / videos.  
All code in this repository is my own implementation in JavaScript, not copied from the book’s source code.

這個專案收錄的是我個人依照 Uncle Bob 題目與範例，用 JavaScript 實作的練習程式碼，主軸是用小步 TDD 和 BDD 調整思考方式。  
Repo 裡的程式碼是我自己用 JavaScript 撰寫的版本，而不是直接複製書中的原始碼。

> Exercises and ideas are inspired by Uncle Bob’s public materials; any mistakes or design choices here are my own.

---

## Katas and exercises / 練習題目

目前規劃練習題目（之後會逐步補完）：

- Prime Factors Kata（質因數分解）
- Integer Sorting（整數大小排序）
- Bowling Game Scoring（保齡球計分）
- Word Wrap / Line Breaking（自動換行問題）
- Circular Buffer / Queue（環狀佇列 `IntQueue`）

Each kata is implemented with:

- A clear problem description (rewritten in my own words)
- GWT-style scenarios (Given / When / Then)
- AAA-style unit tests (Arrange / Act / Assert) using Vitest
- Small, incremental TDD steps (red → green → refactor)

每個題目都會包含：

- 我自己整理過的題目說明
- 用 GWT（Given / When / Then）描述的情境
- 用 AAA（Arrange / Act / Assert）撰寫的 Vitest 單元測試
- 依照 TDD 紅 → 綠 → 重構 的小步實作紀錄

---

## Project structure / 專案結構

````text
.
├── src/
│ ├── int-queue/
│ │ ├── int-queue.js
│ │ └── int-queue.test.js
│ ├── prime-factors/
│ │ ├── prime-factors.js
│ │ └── prime-factors.test.js
│ ├── bowling-game/
│ │ ├── bowling-game.js
│ │ └── bowling-game.test.js
│ └── ...
├── package.json
└── README.md
````


- `src/<kata-name>/*.js` — implementation and tests for each kata
- Tests are written with [Vitest](https://vitest.dev)

---

## Getting started / 開始使用

### Requirements / 環境需求

- Node.js 18+  
- npm 或 pnpm / yarn

### Install / 安裝

````bash
npm install
````
或
````bash
pnpm install
````


### Run tests / 執行測試

````bash
npm test
````

或
````bash
npx vitest
````


You can also run a specific kata’s tests:

````bash
npx vitest src/int-queue/int-queue.test.js
````


---

## TDD & BDD style / TDD 與 BDD 寫法說明

For each kata, the workflow is:

1. Start from a plain-language GWT description of the behavior.  
2. Translate GWT into AAA-style unit tests.  
3. Implement the minimal code to make the tests pass.  
4. Refactor while keeping all tests green.

每個題目都會刻意遵守這樣的流程：

1. 用白話 GWT 敘述行為（Given / When / Then）。  
2. 把 GWT 轉成 AAA 測試（Arrange / Act / Assert）。  
3. 只實作「剛好讓測試通過」的最小程式碼。  
4. 在測試全綠的前提下重構設計與命名。

這樣可以幫助自己把「需求故事」和「程式語言的結構」對齊，練習從行為出發設計程式。

---

## Attribution / 來源說明

- Exercises and kata ideas are inspired by Robert C. Martin (Uncle Bob), including *Clean Craftsmanship* and various public articles and talks.
- All JavaScript code, tests, documentation, and comments in this repository are my own work.

題目與練習靈感來自 Robert C. Martin（Uncle Bob）的公開教材與書籍（包含《Clean Craftsmanship 無暇的程式碼 軟體工匠篇》）。  
本專案中的 JavaScript 程式碼、測試、說明文件與註解皆為我個人實作，非書中原始碼之直接複製。

---

## License / 授權條款

You can choose one standard open-source license, for example MIT:

本專案程式碼使用 MIT 授權釋出，詳見 [`LICENSE`](./LICENSE)。
