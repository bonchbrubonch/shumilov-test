$(function(){

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100){
    $('header').addClass("sticky");
    }
    else{
    $('header').removeClass("sticky");
    }
  });

  //анимация на секцию present
  // const container = gsap.utils.toArray(".present__left");
  // container.forEach((container) => {
  //   let t2 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: container,
  //       pin: true,
  //       scrub: true
  //     }
  //   });
  
  //   t2.to(container, {
  //     autoAlpha: 1
  //   }).to(
  //     container,
  //     {
  //       autoAlpha: 0
  //     },
  //     0.8
  //   );
  // });


 //анимация на секцию consider
  // const containers = gsap.utils.toArray(".consider__right");
  // containers.forEach((container) => {
  //   let tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: container,
  //       pin: true,
  //       scrub: true
  //     }
  //   });
  
  //   tl.to(container, {
  //     autoAlpha: 1
  //   }).to(
  //     container,
  //     {
  //       autoAlpha: 0
  //     },
  //     0.8
  //   );
  // });

  // function resize() {
  //   if ( $(window).width() < 1100) {     
  //     const containers = gsap.utils.toArray(".consider__box");
  //     containers.forEach((container) => {
  //       let tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: container,
  //           pin: true,
  //           scrub: true
  //         }
  //       });
      
  //       tl.to(container, {
  //         autoAlpha: 1
  //       }).to(
  //         container,
  //         {
  //           autoAlpha: 0
  //         },
  //         0.8
  //       );
  //     });
  //   }
  // }
  // $(window).on("resize", resize);
  // resize();

  let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
  };
      let body=document.querySelector('body');
  if(isMobile.any()){
      body.classList.add('touch');
      let arrow=document.querySelectorAll('.arrow-mob');
    for(i=0; i<arrow.length; i++){
        let thisLink=arrow[i].previousElementSibling;
        let subMenu=arrow[i].nextElementSibling;
        let thisArrow=arrow[i];
  
        thisLink.classList.add('parent');
      arrow[i].addEventListener('click', function(){
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
      });
    }
  }else{
    body.classList.add('mouse');
  }

  //аккордеон

  if ($('.questions__item-title').length > 0) {
    $('.questions__item-title').on('click', function(){
      $('.questions__item').removeClass('questions__item--active');
      $(this).parent().addClass('questions__item--active');
    });
  }
  

  //слайдер
  if ($('.review-slider').length > 0) {
    $('.review-slider').slick({
      prevArrow: '<button class="arrow-phone slider-left"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.91602 2.12939L2.00023 10.1294L9.91602 18.1294" stroke="#528DFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow: '<button class="arrow-phone slider-right"><svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2.12939L9.91579 10.1294L2 18.1294" stroke="#528DFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
    });
  }
 

  //стрпелки к слайдеру
  $(".arrow-phone").click(function () {
    $(".arrow-phone").removeClass("active");
    $(this).addClass("active");
  });

  //селект мобильной версии
  $(".articl__select").on("click", function () {
    $(".articl__select").toggleClass("articl__select-active");
    $(".articl__buttons").toggleClass("articl__buttons-active");
  });


  //слайдер
  if ($('.slider-articl__top').length > 0) { 
    $('.slider-articl__top').slick({
      prevArrow: '<button class="top-left"><svg width="8" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 11L2 6l5-5" stroke="#fff" stroke-width="2"/></svg></button>',
      nextArrow: '<button class="top-right"><svg width="8" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l5 5-5 5" stroke="#fff" stroke-width="2"/></svg></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      fade: true,
      centerMode: true,
      asNavFor: '.slider-articl__bottom',
    
    });
    $('.slider-articl__bottom').slick({
      prevArrow: '<button class="bottom-left"><svg width="11" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1L2 11l8 10" stroke="#909090" stroke-width="2"/></svg></button>',
      nextArrow: '<button class="bottom-right"><svg width="11" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 21l8-10L1 1" stroke="#909090" stroke-width="2"/></svg></button>',
      slidesToShow: 5,    slidesToScroll: 1,
      asNavFor: '.slider-articl__top',
      dots: false,
      arrows:true,
      slidesToShow: 5,
      slidesToScroll: 1,
      variableWidth: true,
    });
   }
  

  //мобильное меню
  $(".menu__btn").on("click", function () {
    $(".menu__btn").toggleClass("menu__btn--active");
    $(".header__menu").toggleClass("active");
  });

  $('.menu-item-has-children a').on('click', function(){
    $(this).next().toggleClass('sub-menu--active');
  });

  //эмблема
  if ($('.emblem').length > 0) {
    var Emblem = {
      init: function(el, str) {
        var element = document.querySelector(el);
        var text = str ? str : element.innerHTML;
        element.innerHTML = '';
        for (var i = 0; i < text.length; i++) {
          var letter = text[i];
          var span = document.createElement('span');
          var node = document.createTextNode(letter);
          var r = (360/text.length)*(i);
          var x = (Math.PI/text.length).toFixed(0) * (i);
          var y = (Math.PI/text.length).toFixed(0) * (i);
          span.appendChild(node);
          span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
          span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
          element.appendChild(span);
        }
      }
    };
    
    Emblem.init('.emblem');
   }

  //эмблема
  if ($('.emblems').length > 0) { 
    var Emblem = {
      init: function(el, str) {
        var element = document.querySelector(el);
        var text = str ? str : element.innerHTML;
        element.innerHTML = '';
        for (var i = 0; i < text.length; i++) {
          var letter = text[i];
          var span = document.createElement('span');
          var node = document.createTextNode(letter);
          var r = (360/text.length)*(i);
          var x = (Math.PI/text.length).toFixed(0) * (i);
          var y = (Math.PI/text.length).toFixed(0) * (i);
          span.appendChild(node);
          span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
          span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
          element.appendChild(span);
        }
      }
    };
    
    Emblem.init('.emblems');
   }
  
//устанавливаем маску телефона
	$(".formPhone").inputmask({"mask": "+7 (999) 999-99-99"});

  //паралакс
  if ($('#scene').length > 0) { 
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
   }


 //фильтр на статьи
   if ($('.articl__box').length > 0) { 
    var mixer = mixitup('.articl__box', {
      load: {
        filter: "all",
      }
    });
    }


    


      // gsap.fromTo('.case__img', 1,
      // {opacity: 0},
      // {opacity: 1, stagger: .1,},
      
      // );

      // gsap.fromTo('.case__bluer', 2,
      // {opacity: 0},
      // {opacity: 1, stagger: .1,},
      
      // );

    	new WOW().init();

});

//фильтр на статьи
// var mixer = mixitup('.articl__box', {
//   load: {
//     filter: "all",
//   }
// });

// var scene = document.getElementById('scene');
// var parallax = new Parallax(scene);