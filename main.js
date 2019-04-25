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
