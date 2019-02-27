!(function(win, doc){
    function setFontSize() {
        
        // 获取window 宽度
        // zepto实现 $(window).width()就是这么干的
        var winWidth =  window.innerWidth;
        if(winWidth < 1366){
        	doc.documentElement.style.fontSize = (360 / 360) * 100 + 'px';
        	return;
        }
        doc.documentElement.style.fontSize = (winWidth / 360) * 100 + 'px';//设置最小屏幕和最小像素


    }

    var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';

    var timer = null;

    win.addEventListener(evt, function () {
        clearTimeout(timer);

        timer = setTimeout(setFontSize, 100);
    }, false);

    win.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(timer);

            timer = setTimeout(setFontSize, 100);
        }
    }, false);

    //初始化
    setFontSize();
}(window, document));
