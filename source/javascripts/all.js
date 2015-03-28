//= require_tree .
// wait for the DOM to be loaded 
$(document).ready(function() { 
    //image swapping
    $('.reveal-truth-instagram').click(function() {
      $('.frame-instagram').toggleClass('frame-instagram-truth');
	  return false;
    });
    $('.reveal-truth-facebook').click(function() {
      $('.frame-facebook').toggleClass('frame-facebook-truth');
	  return false;
    });
    $('.reveal-truth-linkedin').click(function() {
      $('.frame-linkedin').toggleClass('frame-linkedin-truth');
	  return false;
    });
}); 


//put in the login form: LOLZ THIS FORM DOESN'T EVEN WORK. APRIL FOOLS!