function particles() {
  if (switcher.checked) {
    console.log('dark'),
    Particles.
        init
        ({

            // normal options
            selector:
                '.background-header'
            ,
            color: "#000000",

            connectParticles: true,

            retina_detect: true,

            onclick: {
              enable: true,
              mode: "push"
            },

            maxParticles: 200
        });
  } else{
    Particles.
        init
        ({

            selector:
                '.background-header'
            ,
            maxParticles:
                200
            ,
            color: "#FFFFFF",

            connectParticles: true,

            retina_detect: true,

        });
  }
}

window.onload = function () {
  const theme = localStorage.getItem('theme');
  setLocalTheme()
  if (theme == 'dark') {
    document.querySelector('#switch').checked = true;
    document.querySelector('body').setAttribute('data-theme', 'dark');
    particles();
  } else if (theme == 'light') {
    document.querySelector('body').setAttribute('data-theme', 'light');
    document.querySelector('#switch').checked = false;
    particles();
  } else {
    document.querySelector('body').setAttribute('data-theme', 'light');
    document.querySelector('#switch').checked = false;
    particles();
  }
  var swiper = new Swiper(".swiper-container", {
          effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: "auto",
          autoplay: {
            delay: 3000,
           disableOnInteraction: true,
          },
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          },
          loop: true,
          pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
  });
  scrollTop();
};

if ($(window).outerWidth() > 768) {
  $('.header-menu').css({
    'display': 'block'
  })
  $('.header-menu-mobile').css({
    'display': 'none'
  })
} else {
  $('.header-menu').css({
    'display': 'none'
  })
  $('.header-menu-mobile').css({
    'display': 'block'
  })
}

const body = document.querySelector('body')
const preMain = document.querySelector('.pre-main');
const header = document.querySelector('header');
const height = header.outerHeight;
const switcher = document.querySelector('#switch');
const hambMenu = document.querySelector('.hamb-menu');
const headerMobile = document.querySelector('.header-menu-mobile');

hambMenu.addEventListener('click', () => {
  if (hambMenu.classList.contains('active')) {
    hambMenu.classList.remove('active');
    headerMobile.classList.remove('active');
  } else {
    hambMenu.classList.add('active');
    headerMobile.classList.add('active');
  }
})

function setLocalTheme (value) {
  const localTheme = localStorage.setItem('theme', value);
}

function switchTheme() {
  if (switcher.checked) {
    body.setAttribute('data-theme', 'dark');
    setLocalTheme('dark');
    particles();
  } else if (!switcher.checked) {
    body.setAttribute('data-theme', 'light');
    setLocalTheme('light');
    particles();
  }
}

function scrollToTag() {
  const element = document.querySelector("#main")
  element.scrollIntoView({behavior: 'smooth', block: 'start'})
  body.classList.add('reachedMain')
  if ($(window).outerWidth() < 768) {
    hambMenu.classList.remove('active');
    headerMobile.classList.remove('active');
  }
}
function scrollToProjects() {
  const element = document.querySelector("#projects")
  element.scrollIntoView({behavior: 'smooth', block: 'start'})
  if ($(window).outerWidth() < 768) {
    hambMenu.classList.remove('active');
    headerMobile.classList.remove('active');
  }
}

function scrollToKnE() {
  const element = document.querySelector(".knowledge-content")
  element.scrollIntoView({behavior: 'smooth', block: 'start'})
  if ($(window).outerWidth() < 768) {
    hambMenu.classList.remove('active');
    headerMobile.classList.remove('active');
  }
}

function scrollToSocial() {
  const element = document.querySelector("#social")
  element.scrollIntoView(false, {behavior: 'smooth', block: 'start'})
  if ($(window).outerWidth() < 768) {
    hambMenu.classList.remove('active');
    headerMobile.classList.remove('active');
  }
}

function scrollTop() {
  const element = document.querySelector(".pre-main")
  element.scrollIntoView({behavior: 'smooth'})
  body.classList.remove('reachedMain')
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      body.classList.add('reachedMain')
    } else {
      body.classList.remove('reachedMain')
    }
  })
},{ threshold: 0})

observer.observe(preMain)
