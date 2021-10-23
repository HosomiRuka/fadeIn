//値の取得
let fv = document.getElementById("fv");
let imgs = document.querySelectorAll("img");
let text = document.getElementById("text");
let box1 = document.getElementById("box_1");
let box2 = document.getElementById("box_2");
let box3 = document.getElementById("box_3");

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

setInterval(imgsCount, 2000);
// console.log(count);
