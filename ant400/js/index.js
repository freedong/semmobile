$(function() { (function() {
        var banner = $("#banner"),
        pic_c = banner.find(".pics"),
        pics = pic_c.children(),
        idx_c = banner.find(".idxs"),
        idxs = idx_c.children(),
        btns = banner.find(".btns a"),
        prev = btns.filter(".prev"),
        next = btns.filter(".next"),
        prev1 = btns.filter(".prev1"),
        next1 = btns.filter(".next1"),
        len = pics.length,
        idx = 0,
        prev_i = -1,
        max_i = len - 1,
        curr_p = pics.eq(idx),
        curr_i = idxs.eq(idx),
        delay = 4000,
        timeout = -1;
        win.on("load",
        function() {
            idx_recu(0, 1500 / len,
            function() {
                setTimeout(function() {
                    curr_i.addClass("on");
                    auto();
                },
                300);
                idxs.hover(hover);
            });
            banner.hover(function() {
                stop();
                btns.addClass("on");
            },
            function() {
                auto();
                btns.removeClass("on");
            });
            prev.on("click",
            function() {
                fade(idx === 0 ? idx = max_i: --idx);
            });
            next.on("click",
            function() {
                fade(idx === max_i ? idx = 0 : ++idx);
            });
            prev1.on("click",
            function() {
                fade(idx === 0 ? idx = max_i: --idx);
            });
            next1.on("click",
            function() {
                fade(idx === max_i ? idx = 0 : ++idx);
            });
        });
        function fade(idx) {
            clearTimeout(timeout);
            prev_i = idx;
            curr_p.stop(false, true).fadeOut(300);
            curr_p = pics.eq(idx).stop(false, true).fadeIn(300);
            curr_i.removeClass("on");
            curr_i = idxs.eq(idx).addClass("on");
            auto()
        }
        function hover() {
            idx = $(this).index();
            if (idx === prev_i) {
                return
            }
            fade(idx);
        }
        function idx_recu(idx, delay, func) {
            temp = idxs.eq(idx);
            if (temp.length) {
                temp.css("margin-top", 0).fadeIn(500);
                setTimeout(function() {
                    idx_recu(idx + 1, delay, func);
                },
                delay)
            } else {
                func();
                return
            }
        }
        function auto() {
            timeout = setTimeout(function() {
                fade(idx === max_i ? idx = 0 : ++idx)
            },
            delay);
        }
        function stop() {
            clearTimeout(timeout);
        }
    } ());
var wid = window.screen.width;
        var hei = window.screen.height;
        if (wid>1366) {
            $(".pics").addClass('hei400');
        }else{
            $(".pics").addClass('hei344');
        };
});