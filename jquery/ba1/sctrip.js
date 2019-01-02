$(function(){
	$('.i').click(function(){
		
		$(this).css('display','none');
		
		$(this).next().css('display','block');
		$(this).parent().next().show('10000');
	});
	$('.ii').click(function(){
		
		$(this).css('display','none');
		$(this).prev().css('display','block');

		$(this).parent().next().hide("10000");
	});
});