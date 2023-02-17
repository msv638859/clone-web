//declare menu
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const shoppingElement = $('.header-navbar__item-down')
const blogElement = $(".header-navbar__item-blog")
const menuShoppingElement = $(".menu-down-shopping")
const menuBlogElement = $(".menu-down-blog")




window.addEventListener('click', function(e){  
    if(shoppingElement.contains(e.target)){
        e.preventDefault();
        menuShoppingElement.classList.toggle('visible')
    }else{
        e.preventDefault();
        menuShoppingElement.classList.remove('visible')

    }
    if(blogElement.contains(e.target)){
        e.preventDefault();
        menuBlogElement.classList.toggle('visible')
    }else{
        e.preventDefault();
        menuBlogElement.classList.remove('visible')

    }
  });
 
 


  var swiper1 = new Swiper(".mySwiperSlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor:true,
    loop: true,
    speed:1000,
    pagination: {
      el: ".swiper-pagination1",
      clickable: true
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction:false,
    },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1"
    }
  });
  var swiper = new Swiper(".mySwiperCustomer", {
    slidesPerView: 1,
    spaceBetween:0,
    grabCursor:true,

    speed:1000,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction:false,
    },
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2"
    }
  });

// scrool up
const btnScroolElement = $('.scroll-up')
window.onscroll = () => {
  
  window.scrollY >= 100 ? btnScroolElement.classList.remove("hide") : btnScroolElement.classList.add('hide')
 
}
btnScroolElement.onclick = () =>{
  window.scroll(0, 0);
  console.log(123);
}