//値の取得
let fv = document.getElementById("fv");
let imgs = document.querySelectorAll("img");
let text = document.getElementById("text");
let boxs = document.getElementById("boxs");
let box1 = document.getElementById("box_1");
let box2 = document.getElementById("box_2");
let box3 = document.getElementById("box_3");

//画像切替
let count = 0;

imgs[count].style.opacity = "1";
let imgsCount = () => {
  imgs[count].style.opacity = "0";
  if (count < 5) {
    //変数countに１を足す
    count += 1;
    imgs[count].style.opacity = "1";
  } else {
    count = 0;
    imgs[0].style.opacity = "1";
  }
};
//実行
setInterval(imgsCount, 2000);
// console.log(count);

//フェードインAnimationのための変数
let fadeIn = () => {
  let textHeight = text.getBoundingClientRect();
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let textArea = textHeight.bottom + scrollTop;
  let boxsArea = boxs.getBoundingClientRect().bottom + scrollTop;
  let windowHeight = window.innerHeight;
  let windowHeights = parseFloat(windowHeight);
  let point = textArea - windowHeight;
  let point2 = boxsArea - windowHeight;

  //条件
  if (scrollTop > textArea - windowHeight) {
    text.style.opacity = "1";
    text.style.transform = "translateY(-20px)";
  } else {
    text.style.opacity = "0";
  }
  console.log(scrollTop);
};

//box
let fadeInBox = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let boxsArea = boxs.getBoundingClientRect().bottom + scrollTop;
  let windowHeight = window.innerHeight;
  let windowHeights = parseFloat(windowHeight);

  //条件
  if (scrollTop + 100 > boxsArea - windowHeight) {
    box1.style.opacity = "1";
    box2.style.opacity = "1";
    box3.style.opacity = "1";
    box1.style.transform = "translateY(-100px)";
    box2.style.transform = "translateY(-100px)";
    box3.style.transform = "translateY(-100px)";
  } else {
    box1.style.opacity = "0";
    box2.style.opacity = "0";
    box3.style.opacity = "0";
  }
  console.log(scrollTop);
};
//実行
window.addEventListener("scroll", function () {
  fadeIn();
});

window.addEventListener("scroll", function () {
  fadeInBox();
});
