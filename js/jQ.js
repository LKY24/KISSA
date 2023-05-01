$(function () {
  /////// フェードイン ///////
  $(window).scroll(function () {
    $(".fade-in").each(function () {
      var elemPos = $(this).offset().top;
      // 位置を取得
      var scroll = $(window).scrollTop();
      // どんだけスクロールしたかを取得
      var windowHeight = $(window).height();
      // 画面の高さを取得
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("scroll-in");
      }
    });
  });
  jQuery(window).scroll();

  /////// スムーススクロール ///////
  $(function () {
    $(".smooth-img").hide();

    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $(".smooth-img").fadeIn();
      } else {
        $(".smooth-img").fadeOut();
      }
    });

    $(".smooth-img").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        500
      );
    });
  });
});
