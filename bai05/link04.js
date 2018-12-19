var n;
var s=0 ;
do{
	n=parseInt(prompt("Nhập số nguyên N:"));
}
while(n<=0);
for (var i = 1; i <=n; i++) {
	s=s+(1/i);
}
document.write("tổng: S = 1 + 1/2 + 1/3 + … + 1/n là:"+s);