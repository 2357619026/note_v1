let n = 10;

(function () {
  n = window.prompt('你想要多少小跟班', '');
  let messageTip = '不想要小跟班啦？麻溜的';
  while (Number(n) === 0 || isNaN(n)) {
    n = window.prompt(messageTip, '');


    n = Number(n);
    console.log(n);
    if (isNaN(n)) {
      messageTip = '乖乖，我需要一个数字'
    } else if (n === 0) {
      messageTip = '不想要小跟班啦？麻溜的';
    }

  }
  console.log('inner: ', n);
})();
console.log('11outer: ', n);

if (n === null) {
  alert('你没有输入任何数字，就只有一个小跟班了');
  n = 0;
} else {
  let message = '你增加了' + n + '个小跟班';
  if (n > 50) {
    message += '\n小跟班有点多，做好心理准备哦'
  }
  alert(message);

}


const container = document.getElementById('container');
for (let i = 0; i < n - 1; i++) {
  const img = document.createElement('img');
  img.className = 'myZora';
  img.src = '../img/my_avator.jpg';
  img.alt = 'she is my Zora';
  container.appendChild(img);
}
