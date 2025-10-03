$(function(){
    $(window).on("load", function () {
        // まずリストの要素を非表示にしておく
        $("ul.main-visual li").hide();

        setTimeout(function () {
          $("#loading").stop().fadeOut(300, function () {
            // ローディングが完全に消えた後に実行
            $("main").addClass("on");

            // フェードイン開始
            $("ul.main-visual li").each(function (i) {
              $(this).delay(1100 * i).fadeIn(900);
            });
          });
        }, 3000);
    });


    // 変数に要素を入れる
    var trigger = $('.modal__trigger'),
        wrapper = $('.modal__wrapper'),
        layer = $('.modal__layer'),
        container = $('.modal__container'),
        close = $('.modal__close');

    // 『モーダルを開くボタン』をクリックしたら、『モーダル本体』を表示
    $(trigger).click(function() {
    var index = $(this).data("index");
    $('.modal__wrapper[data-index="' + index +'"]').fadeIn(400);

    // スクロール位置を戻す
    $(container).scrollTop(0);

    // サイトのスクロールを禁止にする
    $('html, body').css('overflow', 'hidden');
    });

    // 『背景』と『モーダルを閉じるボタン』をクリックしたら、『モーダル本体』を非表示
    $(layer).add(close).click(function() {
    $(wrapper).fadeOut(400);

    // サイトのスクロール禁止を解除する
    $('html, body').removeAttr('style');
    });

    // ハンバーガーメニュー
    $(".hamburger").click(function () {
        $(".hamburger").toggleClass("open");
        $(".header_nav-sp").fadeToggle();
    });

    // Totopボタン
    const $pageTop = $(".toTop");

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            if (!$pageTop.is(":visible")) {
                
            $pageTop.fadeIn(200).css("display", "flex");
            }
        } else {
            if ($pageTop.is(":visible")) {
            $pageTop.fadeOut(200);
            }
        }

        let scrollHeight = $(document).height(); // ドキュメントの高さ
        let scrollPosition = $(window).height() + $(window).scrollTop(); // 現在のスクロール位置
        let footHeight = $("footer").innerHeight(); // フッターの高さ

        if (scrollHeight - scrollPosition <= footHeight) {
            // フッターが見えたらボタンを固定ではなくabsoluteに変更
            $pageTop.css({
            position: "absolute",
            bottom: footHeight + 20, // 余白を調整
            });
        } else {
            $pageTop.css({
            position: "fixed",
            bottom: "50px",
            });
        }
    });

    // トップへ戻るボタンのクリックイベント
    $("#topBtn, .toTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
    return false;
    });

    // スクロールヒント
    document.addEventListener('DOMContentLoaded', function () {
        new ScrollHint('.js-scrollable', {
            scrollHintIconAppendClass: 'scroll-hint-icon-white',
            suggestiveShadow: true,
            scrollDirection: 'y'
        });

        // スクロールしたらアイコンを消す
        const scrollableElement = document.querySelector('.js-scrollable');
            scrollableElement.addEventListener('scroll', function () {
                document.querySelectorAll('.scroll-hint-icon').forEach(el => {
                    el.style.display = 'none'; // アイコンを完全に非表示
            });
        });
    });



});

