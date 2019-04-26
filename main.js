$(window).on('load', function() {
    $(".hero img").fadeIn(2000);
    $(".scroll, .scroll span").fadeIn(4000);

    /* toppage-bottom */
    var TopBtn = $('#PageTopBtn');
    TopBtn.hide();
    // スクロール位置が100でボタンを表示
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            TopBtn.fadeIn();
        }
        else {
            TopBtn.fadeOut();
        }
    });
    // ボタンを押下するとトップへ移動
    TopBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 300);
        return false;
    });
  });

  // スライドイン
  $(window).on('load scroll', function(){

    var elem = $('.boxInner');

    elem.each(function () {

      var isPlay = 'isPlay';
      var elemOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      if(scrollPos > elemOffset - wh + (wh / 4)){
        $(this).addClass(isPlay);
      }
    });
  });

  (function ($) {
    // 画面下からどの程度の位置でエフェクトするかの設定
    var EffectH = 100;
    // どのくらい動かすかの設定
    var EffectTop = 100;
    // エフェクト時間(ms)
    var EffectTime = 800;
    // 事前準備として少し下げたところに透明にして配置。
    $('.my-effect').css({ position: 'relative', left: 0, top: EffectTop, opacity: 0, transition: EffectTime + 'ms' });
    // スクロールイベント
    $(window).on('scroll load', function() {
      var scTop = $(this).scrollTop();
      var scBottom = scTop + $(this).height();
      var effectPos = scBottom - EffectH;
      // エフェクト対象それぞれの位置とスクロール位置を比べて
      // 範囲に入っていればエフェクトを実行する
      $('.my-effect').each( function() {
        var thisPos = $(this).offset().top;
        if ( thisPos < effectPos ) {
          $(this).css({ 'opacity' : 1, top: 0 });
        }
      });
    });
  })(jQuery);

  jQuery(function(){
    jQuery(window).scroll(function (){
        jQuery('.fadein').each(function(){
            var elemPos = jQuery(this).offset().top;
            var scroll = jQuery(window).scrollTop();
            var windowHeight = jQuery(window).height();
            if (scroll > elemPos - windowHeight + 100){
                jQuery(this).addClass('scrollin');
            }
        });
    });
    jQuery(window).scroll();
  });
