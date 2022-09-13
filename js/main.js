$(function () {
    $('.tab li').click(function(){
        var index = $('.tab li').index(this);
        $('.tab li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').removeClass('show').eq(index).addClass('show');
    })

    function fadeUpEffect() {
		$('.fadeUpEffect').each(function () {
			var elemPos = $(this).offset().top + 200;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPos - windowHeight) {
				$(this).addClass('fadeUp');
			}
		});
  }
  $(window).scroll(function () {
		fadeUpEffect();
  });

    $(window).on('load', function () {
        $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
        $('.tab-content:first-of-type').addClass("show"); //最初の.areaにis-activeクラスを追加
      var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
      GethashID (hashName);//設定したタブの読み込み
    });

    const swiper = new Swiper(".swiper", {
        loop: true,
        pagination: {
            el: ".swiper-pagination"
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
    });
    $(function(){
        $('.questions').click(function(){
            $(this).toggleClass('active');
            $(this).next('.answer').slideToggle();
        })
    });
    var pagetop = $('.top_btn');
    pagetop.hide();
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
       } else {
            pagetop.fadeOut();
       }
    });
    pagetop.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 1000);
       return false;
    });

    $(window).scroll(function(){
        let headerHight = $('header').height();
        let scroll = $(this).scrollTop();
        if(scroll > headerHight) {
            $('.fixed_header').addClass('is-show');
        } else {
            $('.fixed_header').removeClass('is-show');
        }
    })

    function BgFadeAnime(){

        $('.bgLRextendTrigger').each(function(){
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
              $(this).addClass('bgLRextend');
            }else{
              $(this).removeClass('bgLRextend');
            }
          });
    
       
        $('.bgappearTrigger').each(function(){ 
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
              $(this).addClass('bgappear');
            }else{
              $(this).removeClass('bgappear');
            }
          });
      }

      $(window).scroll(function (){
        BgFadeAnime();
      });
    
      $(window).on('load', function(){
        BgFadeAnime();
      });
  });

 