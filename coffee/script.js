const menuopenbutton =document.querySelector("#menu-open-button");
const menuclosebutton=document.querySelector("#menu-close-button");
menuopenbutton.addEventListener("click",()=>{
document.body.classList.toggle("show-mobile-menu");
});

menuclosebutton.addEventListener("click",()=>menuopenbutton.click());

const swiper = new Swiper('.slider-wrapper', {

  loop: true,
  spaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
breakpoints:{
    0:{
        slidesPerView:1
    },
    768:{
        slidesPerView:2
    },
    1024:{
        slidesPerView:3
    }
}
});