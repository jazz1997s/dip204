// JavaScript Document
$(function() {
  $(document).on("click",function (e) {
    if (e.target.id=="plenty") {
      $("#less").fadeToggle(200);
      e.stopPropagation();
      return false;
    }
    else if ($("#less").is(":visible")) {
      $("#less").fadeOut(200);
    }
  });
});

// JavaScript Document
	$(document).ready(function(){
		$('#more').click(function(){
			$('#details').fadeToggle(1000);
		});
	});
