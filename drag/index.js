const img_0 = document.getElementById('img_0');

const moveDom = transPositionTo(img_0);

function moveAction(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  moveDom(mouseX, mouseY)
}

function modelMoveAction({ touches }) {

  const mouseX = touches[0].clientX;
  const mouseY = touches[0].clientY;
  moveDom(mouseX, mouseY)
}

function giveDocumentEven() {

  document.onmousemove = moveAction

  document.ontouchmove = modelMoveAction

}

img_0.ontouchstart = () => {
  console.log('start');
  giveDocumentEven();
}
// img_0.ontouchmove = () => {
//   console.log('move');
// }
img_0.ontouchend = () => {
  console.log('end');
}

img_0.onmousedown = () => {
  giveDocumentEven();
};

document.onmouseup = () => {
  document.onmousemove = () => { };
  document.ontouchmove = () => { }
}

document.ontouchend = () => {
  document.onmousemove = () => { };
  document.ontouchmove = () => { }
}

function transPositionTo(dom) {
  let { height, width, x: x_img0, y: y_img0 } = getDomSize(dom)
  let lastX = x_img0 + width / 2,
    lastY = y_img0 + height / 2;
  return function (xp, yp) {
    if (Math.abs(xp - lastX) < width && Math.abs(yp - lastY) < height) {
      moveOneDom(dom, xp - x_img0 - width / 2, yp - y_img0 - height / 2);
    } else {
      handlePosition(lastX, lastY);
      lastX = xp;
      lastY = yp;
      //move all
      moveAll();
    }
  }
}

// 处理所有图片的坐标
function handlePosition(x0, y0) {
  for (let i = zoraPosition.length - 1; i > 0; i--) {
    zoraPosition[i].x = zoraPosition[i - 1].x;
    zoraPosition[i].y = zoraPosition[i - 1].y;
  }
  changeImg0Position(x0, y0);
}

// 处理第一个图片的坐标
function changeImg0Position(x, y) {
  zoraPosition[0].x = x;
  zoraPosition[0].y = y;
}

// 根据坐标移动所有图片
function moveAll() {
  for (let index = 1; index < zoras.length; index++) {
    let { height, width, x, y } = getDomSize(zoras[index]);
    moveOneDom(zoras[index],
      zoraPosition[index].x - x - width / 2,
      zoraPosition[index].y - y - height / 2)
  }
}

// 实际移动某个DOM的位置
function moveOneDom(dom, x, y) {
  requestAnimationFrame(() =>
    dom.style.setProperty(
      'transform',
      `translate(${x}px,${y}px)`,
      ''))
}
