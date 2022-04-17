; (
    function (doc) {
        console.log("%c ", "padding:500px 500px;background:url('https://zora.cool/img/weixin_avator.jpg') no-repeat;");

        var fontResize = function () {
            var clietWidth = document.documentElement.clientWidth;
            doc.documentElement.style.fontSize = clietWidth / 62.5 + 'px';
            // if (clietWidth <= 414) {
            //     doc.documentElement.style.fontSize = clietWidth / 37.5 + 'px';
            // } else {
            //     var fontSize = doc.documentElement.style.fontSize;

            //     if (fontSize !== '62.5%') {
            //         doc.documentElement.style.fontSize = '62.5%';
            //     }
            // }
        }

        var bindEvent = function () {
            window.addEventListener('resize', fontResize, false);
        }

        function init() {
            fontResize();
            bindEvent();
        }

        init()
    }
)(document)

