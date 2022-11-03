document.addEventListener('DOMContentLoaded', function () {

  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });

  document.querySelector('.header__btn-search').addEventListener('click', function () {
    document.querySelector('.header__block-search').classList.add('is-active-search')
  })

  document.querySelector('.block-search__exit').addEventListener('click', function () {
    document.querySelector('.header__block-search').classList.remove('is-active-search')
  })

  //Плвная прокрутка
  const anchors = document.querySelectorAll('a[href*="#"]')
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }


  //Choices
  const element = document.querySelector('.choices');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    placeholderValue: 'value 1',
    itemSelectText: '',
    placeholder: false
  });

  //Swiper
  var swiper1 = new Swiper(".mySwiperOne", {
    slidesPerView: 1,
    spaceBetween: 34,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next-1",
      prevEl: ".swiper-button-prev-1",
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    breakpoints: {
      601: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1201: {
        spaceBetween: 34,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1601: {
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 3,
      }
    },
  });

  var swiper2 = new Swiper(".mySwiperTwo", {
    slidesPerView: 1,
    spaceBetween: 27,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next-2",
      prevEl: ".swiper-button-prev-2",
    },
    pagination: {
      el: '.section-event__swiper-pagination',
    },
    breakpoints: {
      701: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 27,
      },
      993: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 27,
      },
      1601: {
        spaceBetween: 50,
        slidesPerGroup: 3,
        slidesPerView: 3,
      }
    }
  });

  var swiper3 = new Swiper(".mySwiperThree", {
    slidesPerView: 1,
    spaceBetween: 34,
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next-3",
      prevEl: ".swiper-button-prev-3",
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    breakpoints: {
      701: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      769: {
        spaceBetween: 50,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1367: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    }
  });

  // With the above scripts loaded, you can call `tippy()` with a CSS
  // selector and a `content` prop:
  tippy('#myButton1', {
    content: 'Пример современных тенденций - современная методология разработки',
    theme: 'tooltip',
  });
  tippy('#myButton2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ',
    theme: 'tooltip',
  });
  tippy('#myButton3', {
    content: 'В стремлении повысить качество ',
    theme: 'tooltip',
  });


  //GalleryTabs
  document.querySelectorAll('.section-gallery__btn').forEach(function (domElement) {
    domElement.addEventListener('click', function () {
      document.querySelector('#card').classList.toggle('is-active')
    })
  })
  document.querySelector('.card__btn').addEventListener('click', function () {
    document.querySelector('#card').classList.toggle('is-active')
  })
  document.querySelectorAll('.accordion__btn').forEach(function (tabsAccordion) {
    tabsAccordion.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content-active').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })


  let name2 = 'none'
  let name = 'none'
  //HeaderTabs
  document.querySelectorAll('.header__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {

      const path = event.currentTarget.dataset.path

      name = path

      if (name == name2) {
        name2 = 'none'

        document.querySelectorAll('.tab-content-active').forEach(function (tabContent) {
          tabContent.classList.remove('tab-content-active')
        })

        document.querySelectorAll('.header__btn').forEach(function (tabContent) {
          tabContent.classList.remove('is-active-header')
        })
      }
      else {
        name2 = path

        document.querySelectorAll('.tab-content-active').forEach(function (tabContent) {
          tabContent.classList.remove('tab-content-active')
        })

        document.querySelectorAll('.header__btn').forEach(function (tabContent) {
          tabContent.classList.remove('is-active-header')
        })

        document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')


        event.target.classList.add('is-active-header')



        document.querySelector('.section-hero').addEventListener('click', function () {
          document.querySelectorAll('.tab-content-active').forEach(function (tabContent) {
            tabContent.classList.remove('tab-content-active')
          })

          document.querySelectorAll('.header__btn').forEach(function (tabContent) {
            tabContent.classList.remove('is-active-header')
          })

          name2 = 'none'
        })

        document.querySelector('.header__nav').addEventListener('click', function () {
          document.querySelectorAll('.tab-content-active').forEach(function (tabContent) {
            tabContent.classList.remove('tab-content-active')
          })

          document.querySelectorAll('.header__btn').forEach(function (tabContent) {
            tabContent.classList.remove('is-active-header')
          })

          name2 = 'none'
        })
      }
    })
  })


  //Yandex map
  // Функция ymaps.ready будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.


})
