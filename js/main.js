jQuery(document).ready(function($) {
  particlesJS("particles-js", {"particles":{"number":{"value":120,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.7,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.6,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.8},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
  $('.copy.iban').click(function() {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($('#iban').text()).select();
      document.execCommand("copy");
      $temp.remove();
      $('.succsess').fadeIn('slow').delay(2000).fadeOut('slow');
  });
  $('.copy.card').click(function() {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($('#card').text()).select();
      document.execCommand("copy");
      $temp.remove();
      $('.succsess').fadeIn('slow').delay(2000).fadeOut('slow');
  });
  $('.copy.paypal').click(function() {
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($('#paypal').text()).select();
      document.execCommand("copy");
      $temp.remove();
      $('.succsess').fadeIn('slow').delay(2000).fadeOut('slow');
  });
});
