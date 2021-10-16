///////////////////お手本///////////////////////
function animation() {
  // フェードインさせる要素を取得してくる
  let sections = document.getElementById("section_01");
  // 要素の寸法と位置を取得,Element.getBoundingClientRect() メソッドは、要素の寸法と、そのビューポートに対する位置を返します。
  let topheight = sections.getBoundingClientRect();
  // 現在のスクロール位置取得
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //画面TOPの座標を取得する
  let target = topheight.bottom + scrollTop;
  // ウィンドウの高さを取得
  let windowHeight = window.innerHeight;
  // pxを削除して数値化
  let windowHeights = parseFloat(windowHeight);
  // スクロール位置からウィンドウの高さ分を減算
  let point = target - windowHeight;

  // 動作確認テスト用
  // console.log(sections + "です");
  // console.log(topheight + "です");
  // console.log(scrollTop + "です");
  // console.log(target + "です");
  // console.log(windowHeight + "です");
  // console.log(point + "です");

  // フェードインアニメーション
  // 条件
  if (scrollTop + 200 > target - windowHeight) {
    // console.log(target - windowHeight);
    // 透過変更
    sections.style.opacity = "1";
    // 座標変更
    sections.style.transform = "translate(0, 0)";
  } else {
    // 透過変更
    sections.style.opacity = "0";
    // 座標変更
    sections.style.transform = "translate(0, 45px)";
  }
}

// 初回実行
animation();
// スクロール時の動作
window.addEventListener("scroll", function () {
  animation();
});
///////////////////--------お手本ここまで-------///////////////////////

//マウスカーソルの座標を取得する
window.addEventListener("mousemove", function (mouse) {
  //これがなんでmouseの役割果たせてるのか意味がわからん↑
  let mX = mouse.pageX;
  let mY = mouse.pageY;

  // console.log(mX);
  // console.log(mY);
});

//お手本を分解して一個ずつ作っていく
//作りたいもの = 要素が指定の箇所まで来たときcssを追加する
//指定の箇所 = どうわからせる？
//1.対象となる要素を取得してくる
let section_02 = document.getElementById("section_02");
//要素の寸法と位置を取得
let size = section_02.getBoundingClientRect();
//

//動いてるか確認
// console.log(section_02);
// console.log(size);
