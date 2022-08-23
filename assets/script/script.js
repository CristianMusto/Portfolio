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

            maxParticles: 75,

            responsive: [
              {
                breakpoint:
                  768
                ,
                options: {
                  maxParticles:
                    25
                }
              },
            ]
        });
  } else{
    Particles.
        init
        ({

            selector:
                '.background-header'
            ,
            color: "#FFFFFF",

            connectParticles: true,

            retina_detect: true,

            onclick: {
              enable: true,
              mode: "push"
            },

            maxParticles: 75,

            responsive: [
              {
                breakpoint:
                  768
                ,
                options: {
                  maxParticles:
                    25
                }
              },
            ]

        });
  }
}

window.onload = function () {

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

  async function fetchCardsKE(url) {
    const res = await fetch(url);
    return await res.json();
  }

  wrapper = document.querySelector("#ke-wrapper");

  fetchCardsKE('https://cristianmusto.github.io/Portfolio/assets/json/cardsKE.json').then(res => {
    res.forEach(el => {
      wrapper.innerHTML += "<div class='knowledge-card swiper-slide' style='box-shadow: 0 0px 20px 10px "+el.shadow+";'><div class='profile-pic'><img src=" + el.logo + "></div><h2>" + el.title + "</h2><p>" + el.description + "</p></div>"
    })
  })

  async function fetchCardsProjects(url) {
    const res = await fetch(url);
    return await res.json();
  }

  wrapperProjects = document.querySelector("#pj-wrapper");


  fetchCardsProjects('https://cristianmusto.github.io/Portfolio/assets/json/cardsProjects.json').then(res => {
    res.forEach(el => {
      wrapperProjects.innerHTML += "<div class='projects-card swiper-slide' style='box-shadow: 0 0px 20px 10px " + el.shadow + ";'><div class='profile-pic'><img src=" + el.logo + "></div><h2>" + el.title + "</h2><p>" + el.description + "</p><ul class='social - icons'><li><a href='"+el.link+"'><i class='fa-solid fa-arrow-right'></i></a></li></ul></div>"
    })
  })

  const theme = localStorage.getItem('theme');
  if (theme == 'dark') {
    document.querySelector('#switch').checked = true;
    document.querySelector('body').setAttribute('data-theme', 'dark');
    setLocalTheme('dark')
    particles();
  } else if (theme == 'light') {
    document.querySelector('body').setAttribute('data-theme', 'light');
    document.querySelector('#switch').checked = false;
    setLocalTheme('light')
    particles();
  } else {
    document.querySelector('body').setAttribute('data-theme', 'light');
    document.querySelector('#switch').checked = false;
    setLocalTheme('light')
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
          loop: false,
          pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
  });

  scrollTop();
};

const body = document.querySelector('body');
const html = document.querySelector('html');
const preMain = document.querySelector('.pre-main');
const header = document.querySelector('header');
const height = header.outerHeight;
const switcher = document.querySelector('#switch');
const hambMenu = document.querySelector('.hamb-menu');
const headerMobile = document.querySelector('.header-menu-mobile');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      body.classList.add('reachedMain')
    } else {
      body.classList.remove('reachedMain')
    }
  })
}, { threshold: 0 })

observer.observe(preMain)

hambMenu.addEventListener('click', () => {
  if (hambMenu.classList.contains('active')) {
    hambMenu.classList.remove('active');
    headerMobile.classList.remove('active');
    body.classList.remove('mobile-menu-open');
    html.classList.remove('mobile-menu-open');
  } else {
    body.classList.add('mobile-menu-open'); 
    html.classList.add('mobile-menu-open'); 
    hambMenu.classList.add('active');
    headerMobile.classList.add('active');
    scrollTop();
  }
})

function setLocalTheme (value) {
  localStorage.setItem('theme', value);
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

function scrollToAnyTag(tag) {
  const element = document.querySelector(tag);
  if (tag == document.querySelector("#main")) {
    body.classList.add('reachedMain')
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    if ($(window).outerWidth() < 768) {
      hambMenu.classList.remove('active');
      headerMobile.classList.remove('active');
      body.classList.remove('mobile-menu-open');
      html.classList.remove('mobile-menu-open');
    }
  } else {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    if ($(window).outerWidth() < 768) {
      hambMenu.classList.remove('active');
      headerMobile.classList.remove('active');
      body.classList.remove('mobile-menu-open');
      html.classList.remove('mobile-menu-open');
    }
  }
}

function scrollTop() {
  const element = document.querySelector(".pre-main")
  element.scrollIntoView({behavior: 'smooth'})
  body.classList.remove('reachedMain')
}
