// cancel drag event
const zoras = document.querySelectorAll('.myZora');
const zoraPosition = [];
const headPosition = [];

; (function () {
  zoras.forEach(item => {
    item.ondragstart = (e) => {
      e.preventDefault();
    }
  });
})();



// get all position
; (function () {
  const { height, width } = getDomSize(zoras[0]);
  zoras.forEach(item => {
    zoraPosition.push({
      x: item.offsetLeft + width / 2,
      y: item.offsetTop + height / 2
    })
  });
})();

function getNumberFromPx(data) {
  return Number(data.replace('px', ''))
}

function getDomSize(dom) {
  let { left: x, top: y, width, height } = getComputedStyle(dom);
  height = getNumberFromPx(height);
  width = getNumberFromPx(width);
  x = getNumberFromPx(x);
  y = getNumberFromPx(y);
  return { height, width, x, y };
}