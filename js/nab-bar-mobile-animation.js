const headerHeight = document.querySelector('header.header').clientHeight;
const hamburger = document.querySelector('.hamburger');
const closeHamburger = document.querySelector('.close');
const paperWindow = document.querySelector('#paper-window');

let topPosition = (headerHeight - hamburger.clientHeight) / 2;
hamburger.style.top = `${topPosition}px`;
closeHamburger.style.top = `${topPosition}px`;

window.addEventListener('resize', () => {
  const headerHeight = document.querySelector('header.header').clientHeight;
  const hamburger = document.querySelector('.hamburger');
  const closeHamburger = document.querySelector('.close');

  let topPosition = (headerHeight - hamburger.clientHeight) / 2;
  hamburger.style.top = `${topPosition}px`;
  closeHamburger.style.top = `${topPosition}px`;
});

hamburger.addEventListener('click', () => {
  disableScroll();
});

closeHamburger.addEventListener('click', () => {
  enableScroll();
});

window.addEventListener('click', (e) => {
  const block = e.target.closest('#paper-window');

  if(block){
    if(paperWindow.classList.contains('tilt')){
      disableScroll();
      document.querySelector('html').style.scrollBehavior = 'auto';
    } else {
      enableScroll();
      document.querySelector('html').style.scrollBehavior = 'smooth';
    }
  }
});

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

function enableScroll() {
   window.onscroll = function() {};
}

$(document).ready(function(topPosition) {
  var paperMenu = {
    $window: $('#paper-window'),
    $paperFront: $('#paper-front'),
    $hamburger: $('.hamburger'),
    offset: 1800,
    pageHeight: $('#paper-front').outerHeight(),
  
    open: function() {
      this.$window.addClass('tilt');
      this.$hamburger.off('click');
      $('#container, .hamburger').on('click', this.close.bind(this));
      this.hamburgerFix(true);
      console.log('opening...');
    },
    close: function() {
      this.$window.removeClass('tilt'); 
      $('#container, .hamburger').off('click');
      this.$hamburger.on('click', this.open.bind(this));
      this.hamburgerFix(false);
      console.log('closing...');
    },
    updateTransformOrigin: function() {
      scrollTop = this.$window.scrollTop();
      equation = (scrollTop + this.offset) / this.pageHeight * 100;
      this.$paperFront.css('transform-origin', 'center' + equation + '%');
    },
    hamburgerFix: function(opening) {
      if(opening) {
        $('.hamburger').css({
          position: 'absolute',
          top: this.$window.scrollTop() + topPosition + 'px'
        });
      } else {
        setTimeout(function() {
          $('.hamburger').css({
            position: 'fixed',
            top: topPosition + 'px'
          });
        }, 300);
      }
    },
    bindEvents: function() {
      this.$hamburger.on('click', this.open.bind(this));
      $('.close').on('click', this.close.bind(this));
      this.$window.on('scroll', this.updateTransformOrigin.bind(this));
    },
    init: function() {
      this.bindEvents();
      this.updateTransformOrigin();
    },
  };

  paperMenu.init();
});