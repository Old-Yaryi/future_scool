$(document).ready(function(){
  $('.slider').slick({
    
    centerMode: true,
    // centerPadding: '500px',
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1
  });
});
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
const mobile_menu = document.querySelector('.header__menu');  
const menu_open = document.querySelector('.header__menu_icon');
const topmenu_mobile = document.querySelector ('.header__top');
menu_open.addEventListener('click', function(){
  mobile_menu.classList.toggle('mobile'),
  topmenu_mobile.classList.toggle('mobile')
});

const why_picture = document.querySelectorAll('.why__items_item-inner');
const picture_active = document.querySelectorAll('.why__img-img');
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



      picture_active.forEach(function (item1) {
        console.log(picture_active)
        // item1.classList.toggle('img-active')
        // if(this.classList.contains('img-active')) {
        //   item1.classList.remove('img-active');
        // } else {
        //   for(el of picture_active) {
        //   el.classList.remove('img-active');
        //   }
        //   item1.classList.add('img-active')
        // }
      })
    });
    
  });
  
