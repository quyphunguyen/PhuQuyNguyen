var n;
var m;
var k;
var s=0;
var dem=0;

do{
	n=parseInt(prompt("Nhập số nguyên N:"));
	m=parseInt(prompt("Nhập số nguyên M:"));
	
	if (n>m) {
		alert("Nhập M lớn hơn N !");
	}

}while(n>m);

k=parseInt(prompt("Nhập số nguyên K:"));
for (var i = n; i <=m; i++) {
	if (i%k==0) {
	 	s=s+i;
	 	dem++;
	}
}
document.write("Có "+dem+" số chia hết cho "+k+" trong đoạn từ "+m+ " đến "+n+" và có tổng S = "+s);