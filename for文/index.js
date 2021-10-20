let text = document.getElementById("text");

for (let step = 0; step < 5; step++) {
  // 値が 0 から 4 まで計 5 回実行される
  console.log("一歩西に歩く");
}

let total = 0; // totalの初期値は0
// for文の実行フロー
// iを0で初期化
// iが10未満（条件式を満たす）ならfor文の処理を実行
// iに1を足し、再び条件式の判定へ
for (let i = 0; i < 10; i++) {
  total += i + 1; // 1から10の値をtotalに加算している
}

let ruka = 0;
window.setTimeout(function () {
  console.log(ruka + 3);
}, 3000);

window.setTimeout(function () {
  console.log(1);
}, 3000);

// for(初期値;　条件式; 式( i++ )) {}
for (let i = 0; i < 5; i++) {
  console.log(i);
}
