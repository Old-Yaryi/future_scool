
// ***************slider_Jq*********
$(document).ready(function(){
  $('.comment__slider').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
      slidesToScroll: 2,
      responsive: [                 
        {
          breakpoint: 931,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]   
   });
});
// ************accordeon**********
const faq_item = document.querySelectorAll('.faq__items');
  for(item of faq_item){
    item.addEventListener('click', function(){
      if(this.classList.contains('active')) {
        this.classList.remove('active');
      } else {
        for(el of faq_item) {
        el.classList.remove('active');
        }
        this.classList.add('active')
      }  
    })
}
//**************mobile_menu*********
const mobile_menu = document.querySelector('.header__menu');  
const menu_open = document.querySelector('.header__menu_icon');
const topmenu_mobile = document.querySelector ('.header__top');
menu_open.addEventListener('click', function(){
  mobile_menu.classList.toggle('mobile'),
  topmenu_mobile.classList.toggle('mobile')
});
// ***********why***************
const why_picture = document.querySelectorAll('.why__items_item-inner');
  why_picture.forEach(function (item) {
    item.addEventListener('click', function () {
      if(this.classList.contains('why__inner-active')) {
        this.classList.remove('why__inner-active');
      } else {
        for(el of why_picture) {
        el.classList.remove('why__inner-active');
        }
        this.classList.add('why__inner-active')
      }
    });   
  });
const imgActive = document.querySelectorAll('[data-tab]')  
const picture_active = document.querySelectorAll('.why__img-img'); 
  imgActive.forEach(function(item) {
    item.addEventListener('click', function (){
      picture_active.forEach( function(item){
        item.classList.remove('img-active');
      });
      const whyPicture = document.querySelector('#' + this.dataset.tab)
      whyPicture.classList.add('img-active')
    })
  })

// *****modal*****
const modal_open = document.querySelectorAll('.button')
const modal_send = document.querySelector('.modal')
  modal_open.forEach(function (item) {
    item.addEventListener('click', function (){
      modal_send.style.display = 'flex'
    })
  })
const modal_close = document.querySelector('.modal__inner-close')
  modal_close.addEventListener('click', function (){
    modal_send.style.display = 'none'
  })