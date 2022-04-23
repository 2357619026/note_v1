; (
    function (doc) {
        console.log("%c ", "padding:150px 150px;background:url('https://zora.cool/img/weixin_avator.jpg') no-repeat center/cover;");

        var fontResize = function () {
            var clietWidth = document.documentElement.clientWidth;
            doc.documentElement.style.fontSize = clietWidth / 62.5 + 'px';
        }

        var bindEvent = function () {
            window.addEventListener('resize', fontResize, false);
        }

        function init() {
            fontResize();
            bindEvent();
        }

        init();
    }
)(document)

