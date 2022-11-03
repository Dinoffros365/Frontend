document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.section-work__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tab-content-active').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')

      document.querySelectorAll('.section-work__btn').forEach(function(tabContent) {
        tabContent.classList.remove('is-active-3')
      })

      event.target.classList.add('is-active-3')
    })
  })

  document.querySelector('.header__burger').addEventListener('click', function(event){
    document.querySelector('#menu').classList.toggle('is-active')
  })

  document.querySelector('.header__btn1').addEventListener('click', function(event){
    document.querySelector('#menu').classList.toggle('is-active')
  })

  document.querySelector('.section-work__item').addEventListener('click', function(event){
    document.querySelector('.section-work__btn').classList.toggle('is-active')
  })

  document.querySelector('.header__btn').addEventListener('click', function(){
    document.querySelector('.header__input').classList.toggle('is-active-1')
  })

  document.querySelector('.header__btn-3').addEventListener('click', function(){
    document.querySelector('.header__input').classList.toggle('is-active-1')
  })

  var handleClick = function(event){
    alert('NO!!!!!')
    console.log(event)
  }
  var button = document.querySelector('.section-view__btn')
  button.addEventListener('click' , handleClick)
})

const swiper = new Swiper('.swiper', {
  loop: true,
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  direction: 'horizontal',

  a11y: {
    paginationBulletMessage: 'Кнопка {{index}}',
  }

});

