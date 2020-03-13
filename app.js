const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

window.addEventListener('click', (e) => {
  e.target == modal ? modal.classList.remove('show-modal') : false;
});


//  change header background color on scroll
const header = document.querySelector('.header');
const topOfHeader = header.offsetTop;
const btnCta = document.querySelector('.header-buttons .cta')

function fixNav() {
  if (window.scrollY > topOfHeader) {
    header.classList.add('light');
    btnCta.classList.add('black');

  } else {
    header.classList.remove('light');
    btnCta.classList.remove('black');
  }
}

window.addEventListener('scroll', fixNav);

const imgs = document.querySelectorAll('.slide');

function checkSlide() {
  imgs.forEach(img => {
    if (window.scrollY + 100 > img.offsetTop) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  })
}

window.addEventListener('scroll', checkSlide);