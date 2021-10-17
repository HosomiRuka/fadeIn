// A && B は、「AとBが両方成立する必要がある」（AND演算）
// A || B は、「AまたはBのどちらかが成立すればOK」（OR演算）
// !A は、「A以外なら何でもOK」（NOT演算）

let textBox = document.getElementById("text");
let btn = document.getElementById("btn");
let h1 = document.getElementById("title");

btn.onclick = function () {
  let text = textBox.value;
  // switch (text) {
  //   case ("赤", "あか"):
  //     h1.innerHTML = "止まれ";
  //     break;
  //   case ("青", "あお"):
  //     h1.innerHTML = "GO!";
  //     break;
  //   case ("黄色", "きいろ"):
  //     h1.innerHTML = "一時停止";
  //     break;
  // }
  if (text > 5) {
    h1.innerHTML = "5より大きい";
  } else if (text == 5) {
    h1.innerHTML = "5です！";
  } else if (text < 5) {
    h1.innerHTML = "5以下！";
  } else {
    h1.innerHTML = "入力内容が正しくありません、半角数字を入力してください";
  }
};

let old = 19;

if (old > 20 && old < 30) {
  console.log("対象年齢です");
} else {
  console.log("対象年齢ではありません");
}

if (old > 20 || old < 30) {
  console.log("対象年齢です");
} else {
  console.log("対象年齢ではありません");
}

if (!(old > 20)) {
  console.log("対象年齢です");
} else {
  console.log("対象年齢ではありません");
}
console.log(textBox.value);
console.log(btn);
console.log(h1);
