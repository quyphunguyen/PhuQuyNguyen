$(function(){
	$('.red').css('color','red');//thay doi css
	$('.red').width('50%');//thay doi chiều rông
	$('.red').height('200px');//thay doi chiều cao

	$('.blue').html('123');//thay doi noi dung
	$('input').attr('value','test')//thay đổi thuộc tính
	$('input').attr('id','add')//thay đổi thuộc tính
	$('input').attr('value','test')//thay đổi thuộc tính
	$('input').addclass('test1')//thêm class
	$('input').remuveclass('test')//xoá class
	$(window).resize(function(){
		alert('abc');
	});
});