//= require_tree .
// wait for the DOM to be loaded 
$(document).ready(function() { 
    //image swapping
    $('.reveal-truth').click(function() {
      $('.test-module').toggleClass('test-module-truth');
    });
}); 