$(document).ready(function () {
  /*    AOS
  =====================================================*/
  AOS.init();

  /*    スライドナビゲーション
  =====================================================*/
  $('.sidenav').sidenav({
    edge: 'right',
  });

  /*    スクロール
  =====================================================*/
  $("a[href*=\\#about]").click(function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $($.attr(this, "href")).offset().top,
    },1000
    );
  });
  $("a[href*=\\#projects]").click(function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $($.attr(this, "href")).offset().top,
    },1000
    );
  });
  $("a[href*=\\#works]").click(function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $($.attr(this, "href")).offset().top,
    },1000
    );
  });
  $("a[href*=\\#study]").click(function (event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $($.attr(this, "href")).offset().top,
    },1000
    );
  });

  $(".scroll-to-top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  /*    モーダル
  =====================================================*/
  // Materialize オプション
  $('.modal').modal({
    startingTop: '0%',
    endingTop: '5%'
  })

  // モーダル振り分け
  var modalContents = $('.modal')
  var modalTriggers = $('.modal-trigger')
  for (var i = 0; i < modalContents.length; i++) {
    $(modalContents[i]).attr('id', 'modal' + i)
    $(modalTriggers[i]).removeAttr('href')
    $(modalTriggers[i]).attr('href', '#modal' + i)
  }

  // 閉じるボタンの追加
  $('.modal').append('<div class="close-button"><a href="#!" class="btn-floating waves-effect waves-light"><i class="material-icons">close</i></a></div>')

  // モーダルを閉じる
  $('.modal .close-button').click(function(event){
    event.preventDefault()
    var $targetModal = $(this).closest("[id^=modal]").attr('id')
    $('#' + $targetModal).modal('close')
  })

  // サムネイルをクリックした時の画像変更
  $('.thumbnails img').click(function(){
    var $thisModalId = $(this).closest("[id^=modal]").attr('id')
    var $thisImg = $(this).attr('src')
    var $thisAlt = $(this).attr('alt')
    $('#' + $thisModalId + ' .mainImage img').attr({src:$thisImg, alt:$thisAlt})
    if ($(this).hasClass('z-depth-2')) {
      $('#' + $thisModalId + ' .thumbnails img').not('.z-depth-2').addClass('z-depth-2')
      $(this).removeClass('z-depth-2')
    }
  })

});