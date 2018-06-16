$(window).scroll(function(){
    if ($(window).scrollTop() >= 120) {
      $('.sticky-header').addClass('fixed');
     }
     else {
      $('.sticky-header').removeClass('fixed');
     }
  });

  $('.parallax-window').parallax({imageSrc:'/assets/img/spaced/SPACEDblue_mockup.jpg'});
  
  var words = ['UX Designer', 'Web Designer', 'Graduate! (soon)', 'Front-End Developer', 'UI Designer' ];
  setInterval(function(){
  var randomIndex = Math.floor(Math.random() * words.length); 
  var randomElement = words[randomIndex];
      $('.type-it').typeIt({
          content : randomElement
      });
  }, 4000);

  $(".arrow").click(function() {
    $('html, body').animate({
        scrollTop: $(".arrow").offset().top
    }, 1200);
});

particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"star","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":11},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":2.6,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"left","random":false,"straight":true,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":0,"rotateY":962.0472365193136}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"bubble"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

$(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 500) {
      $('.carousel').removeClass('is-3');
    } else if (ww >= 501) {
      $('.carousel').addClass('is-3');
    };
    if (ww < 1000) {
      $('.carousel').removeClass('is-5');
    } else if (ww >= 1001) {
      $('.carousel').addClass('is-5');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});

$('#gallery').lightGallery({
  mode: 'lg-fade',
  share: false
});