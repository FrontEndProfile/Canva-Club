$('#play-video').on('click', function(e){
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_video();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};


// import Lightbox from 'bs5-lightbox';

const options = {
	keyboard: true,
	size: 'fullscreen'
};

document.querySelectorAll('.my-lightbox-toggle').forEach((el) => el.addEventListener('click', (e) => {
	e.preventDefault();
	const lightbox = new Lightbox(el, options);
	lightbox.show();
}));



$(document).ready(function(){
  $('.frames').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slide-arrow prev-arrow">« Aula Anterior</button>',
    nextArrow: '<button class="slide-arrow next-arrow">Próxima Aula » </button>',
    responsive: [
      {
        breakpoint: 500,
        settings: {
         prevArrow: '<button class="slide-arrow prev-arrow"><img src="images/prev.png" alt="next"></button>',
         nextArrow: '<button class="slide-arrow next-arrow"><img src="images/next.png" alt="back"></button>',

        }
      }
    ]
  });
});