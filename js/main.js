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