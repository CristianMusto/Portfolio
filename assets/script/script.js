//creare uno script che all'hover di un menu-item aggiunge una classe a cui assegno una classe
// document.getElementsByClassName('.menu-item').addEventListener('mouseover', addClass());
// function addClass(){
//   if (!document.getElementsByClassName('.menu-item').classList.contains('animate')) {
//     document.getElementsByClassName('.menu-item').classList.add('animate');
//   } else {
//     document.getElementsByClassName('.menu-item').classList.remove('animate');
//   }
// }

window.onload = function () {
  const theme = localStorage.getItem('theme');
  if (theme == 'dark') {
    document.querySelector('#switch').checked = true;
    document.querySelector('body').setAttribute('data-theme', 'dark');
    particles();
  } else if (theme == 'light') {
    document.querySelector('body').setAttribute('data-theme', 'light');
    document.querySelector('#switch').checked = false;
    particles();
  }
  scrollTop();
};

const body = document.querySelector('body')
const preMain = document.querySelector('.pre-main');
const header = document.querySelector('header');
const height = header.outerHeight;
const switcher = document.querySelector('#switch');

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
  element.scrollIntoView({behavior: 'smooth'})
  body.classList.add('reachedMain')
}
function scrollToProjects() {
  const element = document.querySelector("#projects")
  element.scrollIntoView({behavior: 'smooth'})
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
            maxParticles:
                400
            ,
            color: '#ffffff',

            connectParticles: true,

            // options for breakpoints
            responsive: [
                {
                    breakpoint:
                        768
                    ,
                    options: {
                        maxParticles:
                            200
                        ,
                        color: '#ffffff',
                        connectParticles: true
                    }
                }, {
                    breakpoint:
                        425
                    ,
                    options: {
                        maxParticles:
                            100
                        ,
                        color: '#ffffff',
                        connectParticles: true
                    }
                },
            ]
        });
  } else{
    Particles.
        init
        ({

            // normal options
            selector:
                '.background-header'
            ,
            maxParticles:
                400
            ,
            color: '#000000',

            connectParticles: true,

            // options for breakpoints
            responsive: [
                {
                    breakpoint:
                        768
                    ,
                    options: {
                        maxParticles:
                            200
                        ,
                        color: '#000000',
                        connectParticles: true
                    }
                }, {
                    breakpoint:
                        425
                    ,
                    options: {
                        maxParticles:
                            100
                        ,
                        color: '#000000',
                        connectParticles: true
                    }
                },
            ]
        });
  }
}
