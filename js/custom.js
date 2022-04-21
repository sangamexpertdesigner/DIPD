var swiper = new Swiper(".swiper_demo", {
     slidesPerView: 3,
     spaceBetween: 30,
     loop: true,
     loopFillGroupWithBlank: true,
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
     // Responsive breakpoints
                       breakpoints: {
                         // when window width is >= 320px
                         320: {
                           slidesPerView: 1,

                         },
                         // when window width is >= 575px
                         575: {
                           slidesPerView: 1,

                         },
                         // when window width is >= 480px
                         768: {
                           slidesPerView:2,

                         },
                         // when window width is >= 991px
                         992: {
                           slidesPerView: 3,

                         }
                       },
   });
$(document).ready(function(){
  $(".toggle_img").click(function(){
    $("body").toggleClass("activeclass");
  });
});


var swiper = new Swiper(".swiper_demo2", {
     slidesPerView: 3,
     spaceBetween: 30,
     slidesPerGroup: 3,
     loop: true,
     loopFillGroupWithBlank: true,
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
     // Responsive breakpoints
                      breakpoints: {
                        // when window width is >= 320px
                        320: {
                          slidesPerView: 1,

                        },
                        // when window width is >= 575px
                        575: {
                          slidesPerView: 1,

                        },
                        // when window width is >= 480px
                        768: {
                          slidesPerView:2,

                        },
                        // when window width is >= 991px
                        992: {
                          slidesPerView: 3,

                        }
                      },
   });
