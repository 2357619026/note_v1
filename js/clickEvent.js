; (function (doc) {
    var theme_icon = doc.querySelector('.theme-icon');
    theme_icon.onmouseover = function () {
        // console.log('mouseover: ', this);
        this.style.transform = 'scale(1.2)';
    }
    theme_icon.onmouseout = function () {
        // console.log('mouseover: ', this);
        this.style.transform = 'scale(1)';
    }
    theme_icon.onclick = function () {
        var style = doc.documentElement.style;
        var mask_color = style.getPropertyValue('--mask-color');
        if (mask_color === 'black') {
            changeBackgroundColor(false);
            changeText(false);
            changeImg(false);
        } else {
            changeBackgroundColor(true);
            changeText(true);
            changeImg(true);
        }
    }

    function changeBackgroundColor(is_night) {
        var style = doc.documentElement.style;
        if (is_night) {
            style.setProperty('--mask-color', 'black');
        } else {
            style.setProperty('--mask-color', 'transparent');
        }
    }
    function changeText(is_night) {
        var grant_text = doc.querySelector('.grant-text');
        var grant_tail = grant_text.querySelector('.grant-tail');
        var grant_head = grant_text.querySelector(".grant-head");
        if (is_night) {
            grant_text.style.color = 'white';
            grant_tail.innerHTML = 'Tonight the moon is beautiful. 🌕';
            grant_head.style.display = 'none'
        } else {
            grant_text.style.color = 'black';
            grant_tail.innerHTML = 'Today is a beautiful day. 😁'
            grant_head.style.display = 'inline'
        }
    }
    function changeImg(is_night) {
        var grant_text = doc.querySelector('.theme-icon');
        if (is_night) {
            grant_text.style.backgroundImage = `url(./img/svg/sun.svg)`
        } else {
            grant_text.style.backgroundImage = `url(./img/svg/night.svg)`
        }
    }

})(document)