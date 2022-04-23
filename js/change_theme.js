
(function (doc) {
    var theme_icon = $('.theme-icon');
    theme_icon.mouseover = function () {
        this.style.transform = 'scale(1.2)';
    }
    theme_icon.mouseout = function () {
        this.style.transform = 'scale(1)';
    }
    const clickCallback = function () {
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
    theme_icon.on('click', clickCallback);

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
            grant_tail.innerHTML = 'I get a kick out of you. 🙈'
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

export default {}