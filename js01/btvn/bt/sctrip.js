var dkyy=document.getElementsByClassName('dky')[0];
		dkyy.addEventListener('click', function(){
			alert('Đăng ký thành công')
		});
		var xoaa=document.getElementsByClassName('xoa')[0];
		dkyy.addEventListener('click', function(){
			for (var i =0; i <the.length; i++) {
				document.getElementsByClassName('the')[0].innerHTML='';
			}
			
		});
		var ten=document.getElementsByClassName('name1')[0];
		ten.addEventListener('blur',function(){
			if (ten.value.trim()=='') {
				document.getElementsByClassName('tb1')[0].innerHTML="moi pan nhap ten";
			}else if(ten.value.length<4){
				document.getElementsByClassName('tb1')[0].innerHTML="nhap tren 4 ky tu ";
			}
			else{
				document.getElementsByClassName('tb1')[0].innerHTML="Tuyệt vời";
			}
		});
		
		var p=document.getElementsByClassName('pass')[0];
		p.addEventListener('blur',function(){

			if (p.value.trim()=='') {
				document.getElementsByClassName('tb3')[0].innerHTML="moi pan nhap password";
			}else if(p.value.length<8){
				document.getElementsByClassName('tb3')[0].innerHTML="nhap tren 8 ky tu ";
			}
			else{
				document.getElementsByClassName('tb3')[0].innerHTML="Làm tốt lắm con trai";
			}
		});
		var cp=document.getElementsByClassName('cpass')[0];
		cp.addEventListener('blur',function(){

			if (cp.value.trim()=='') {
				document.getElementsByClassName('tb4')[0].innerHTML="Mời bạn nhập password";
			}else if(cp.value.length<8){
				document.getElementsByClassName('tb4')[0].innerHTML="NHập 8 ký tự trở lơn";
			}
			else{
				document.getElementsByClassName('tb4')[0].innerHTML="Quá hay luôn";
			}
		});
		function validateEmail(email) {
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}
		var check1=document.getElementsByClassName('email1')[0];
		check1.addEventListener('blur',function(){
			if (check1.value.trim()=='') {
				document.getElementsByClassName('tb2')[0].innerHTML="Mời bạn nhập email";
			}else if(validateEmail(check1.value)==true){
			document.getElementsByClassName('tb2')[0].innerHTML='Nhập thành công';
		}else if (validateEmail(check1.value)==false) {
			document.getElementsByClassName('tb2')[0].innerHTML='Sai cú pháp';

		}
		else {
			document.getElementsByClassName('tb2')[0].innerHTML='Khá Bảnh';
			
			
		}
	});
		var so=document.getElementsByClassName('sdt')[0];
		so.addEventListener('blur',function(){
			if (so.value.trim()=='') {
				document.getElementsByClassName('tb5')[0].innerHTML="Mời bạn nhập số đt";
			}else if(so.value.length==10){
				document.getElementsByClassName('tb5')[0].innerHTML="Nhập đủ 10 chữ số ";
			}
			else if (so.value.isNaN()==false) {
				document.getElementsByClassName('tb5')[0].innerHTML="Nhập Số ";

			}
			else{
				document.getElementsByClassName('tb5')[0].innerHTML="Hay lắm";
			}
		});
		