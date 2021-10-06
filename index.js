// フェードインさせる要素を取得してくる
const sections = document.getElementById("section_01");

// 取得されたかの確認、クリックされた時背景色が変わる
sections.onclick = function () {
  console.log("クリックされました");
  sections.style.background = "tomato";
};

//画面TOPの座標を取得する
window.onscroll = function (event) {
  console.log(event.target.documentElement.scrollTop);

  // sections.style.background = "tomato";
};
