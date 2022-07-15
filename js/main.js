$(document).ready(function(){
  $('.slider').slick({
    
    centerMode: true,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1
  });
});
const carusel_item = document.querySelectorAll('.faq__items');
 
  for(item of carusel_item){
    item.addEventListener('click', function(){
      if(this.classList.contains('active')) {
        this.classList.remove('active');
      } else {
        for(el of carusel_item) {
        el.classList.remove('active');
        }
        this.classList.add('active')
      }  
    })
  }