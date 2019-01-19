$(document).ready(function(){
	$(".nav a").click(function(){
		$(this).tab('show');
	});
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});



	

});
