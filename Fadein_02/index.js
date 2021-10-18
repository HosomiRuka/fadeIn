//値の取得
let fv = document.getElementById("fv");
let text = document.getElementById("text");
let box1 = document.getElementById("box_1");
let box2 = document.getElementById("box_2");
let box3 = document.getElementById("box_3");

//取得、反応テスト、クリックされたとき背景色変わる
fv.onclick = function () {
  fv.style.background =
    "linear-gradient(45deg, rgba(255,226,34,1) 20%, rgba(255,121,0,1) 100%) ";

  console.log("クリックされたよ");
};

//３秒後に発動する処理
window.setTimeout(function () {
  console.log(1);
}, 3000);

const bgColor = [
  "linear-gradient(45deg, rgba(64,191,255,1) 0%, rgba(255,0,0,1) 100%)",
  "linear-gradient(90deg, rgba(101,255,221,1) 0%, rgba(249,169,255,1) 100%)",
  "linear-gradient(90deg, rgba(255,59,59,1) 0%, rgba(78,74,255,1) 100%)",
];

let count = -1;

const hoge = () => {
  count++;
  // カウントが最大になれば初期値に戻す
  if (count == bgColor.length) count = 0;
  //画像選択
  fv.style.background = bgColor[count];
  //1秒ごとに実行
  setTimeout(() => {
    hoge();
  }, 1000);
};

console.log(bgColor);

const Number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let count2 = -1;

window.setTimeout(function () {
  if (count2 == Number.length) count = 0;
  for (let step = 0; step < 5; step++) {
    // 値が 0 から 4 まで計 5 回実行される
    console.log();
  }

  console.log(1);
}, 3000);
