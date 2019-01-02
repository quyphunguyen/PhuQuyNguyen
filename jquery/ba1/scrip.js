$(function(){
 	$('.add').click(function(){
 		var text=$('.text').val();
 	
 		$('.work').append(`<p class="abc"><span class="fas fa-check yes with "></span>`+text+`<i class="far fa-trash-alt delete"></i>`);
 		
 	});
 	

});
	$(document).on('click','.delete',function(){
 		$(this).parent().remove();
 	});

